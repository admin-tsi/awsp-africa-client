import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface UserData {
  _id: string;
}

interface UserContextProps {
  user: UserData | null;
  updateUser: (newUserData: UserData) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  token: string | null;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  updateUser: () => {},
  login: async () => {},
  logout: () => {},
  token: null,
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

  const initUser = async (jwtToken: string | null) => {
    try {
      const storedToken = localStorage.getItem('token');

      if (!storedToken) {
        router.push('/');
        return;
      }

      const { user, token } = JSON.parse(storedToken);

      setUser(user);
      setToken(token);
    } catch (error) {
      console.error('Erreur lors de l\'initialisation de l\'utilisateur:', error);
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
        throw new Error(`Identifiants invalides (${response.status})`);
      }

      const data = await response.json();

      localStorage.setItem('token', JSON.stringify({ user: data.user, token: data.token }));

      setUser(data.user);
      setToken(data.token);

      router.push('/Course');
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <UserContext.Provider value={{ user, updateUser, login, logout, token }}>
      {children}
    </UserContext.Provider>
  );
};
