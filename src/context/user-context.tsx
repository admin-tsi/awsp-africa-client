import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface UserData {
  _id: string;
  isverified: boolean;
}
interface UserContextProps {
  user: UserData | null;
  updateUser: (newUserData: UserData) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  token: string | null;
  veri: boolean;
  setVeri: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  updateUser: () => {},
  login: async () => {},
  logout: () => {},
  token: null,
  veri: false,
  setVeri: () => {},
});

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const LOGIN_PATH = '/api/v1/auth/login';

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [veri, setVeri] = useState(false);

  const initUser = async (jwtToken: string | null) => {
    try {
      const { token } = JSON.parse(jwtToken || getCookie('token') || '{}');
      setToken(token);

      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/abcd`;

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Error while retrieving user information. Status ${response.status}`
        );
      }

      const userData = await response.json();
      console.log('User data:', userData);

      setUser(userData);

      if (userData.isverified) {
        router.push('/Courses');
      } else {
        router.push('/Step');
      }
    } catch (error) {
      console.error('User initialization error:', error);
    }
  };

  useEffect(() => {
    initUser(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUser = (newUserData: UserData) => {
    setUser(newUserData);
  };

  const login = async (email: string, password: string) => {
    try {
      const url = `${API_URL}${LOGIN_PATH}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials.');
      }

      const data = await response.json();
      console.log(data.user.isverified);

      setCookie(
        'token',
        JSON.stringify({ user: data.user, token: data.token }),
        data.expiresIn
      );

      setUser(data.user);
      setToken(data.token);

      if (data.user.isverified) {
        router.push('/Courses');
      } else {
        router.push('/Step');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    deleteCookie('token');
    router.push('/');
  };

  // Functions to interact with cookies using document.cookie API
  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=None; Secure`;
  };

  const getCookie = (name: string) => {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find((c) => c.trim().startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  };

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  return (
    <UserContext.Provider
      value={{ user, updateUser, login, logout, token, veri, setVeri }}
    >
      {children}
    </UserContext.Provider>
  );
};
