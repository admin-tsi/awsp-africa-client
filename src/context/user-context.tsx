import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface UserContextProps {
  user: any;
  updateUser: (newUserData: any) => void;
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
const USER_PATH = '/api/v1/users/{userId}';
const LOGIN_PATH = '/api/v1/auth/login';

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<string | null>(null);
  const [user_id, setUser_id] = useState<string | null>(null);

  const initUser = async (jwtToken: string | null) => {
    try {
      let newToken = localStorage.getItem('token');
      if (jwtToken) {
        newToken = jwtToken;
        localStorage.setItem('token', newToken);
      }

      // Vérifier si un token est présent avant de faire une redirection
      if (!newToken) {
        router.push('/');
        return;
      }

      if (newToken) {
        try {
          const url = `${API_URL}${USER_PATH.replace('{userId}', user_id || '')}`;
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + newToken,
            },
          });

          if (!response.ok) {
            throw new Error(`Erreur de requête (${response.status})`);
          }

          const data = await response.json();
          setUser(data);
          console.log('2nd data', data);
        } catch (error) {
          console.error('Erreur lors de la requête:', error);
        }
      }

      setToken(newToken);
    } catch (error) {
      console.error("Erreur lors de l'initialisation de l'utilisateur :", error);
    }
  };

  useEffect(() => {
    initUser(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUser = (newUserData: any) => {
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
      setUser_id(data.user._id);
      setUser(data.user);
      const jwtToken = data.token;
      console.log('1st data', data.user._id);

      router.push("/Course")

      // Vérifier si les données de l'utilisateur sont déjà présentes
      if (!user || user._id !== data.user._id) {
        localStorage.setItem('token', jwtToken);
        await initUser(jwtToken);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, updateUser, login, logout, token }}>
      {children}
    </UserContext.Provider>
  );
};
