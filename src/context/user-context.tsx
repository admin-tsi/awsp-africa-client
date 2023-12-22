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

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<string | null>(null);

  const initUser = async (jwtToken: string | null) => {
    try {
      let newToken = localStorage.getItem('token');
      if (jwtToken) {
        newToken = jwtToken;
        localStorage.setItem('token', newToken);
      }
      if (newToken) {
        try {
          const url = '';
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + newToken,
            },
          });

          if (!response.ok) {
            throw new Error('Erreur de requête');
          }

          const data = await response.json();
          setUser(data);
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
  }, []);

  const updateUser = (newUserData: any) => {
    setUser(newUserData);
  };

  const login = async (email: string, password: string) => {
    try {
      const url = '';
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
        throw new Error('Identifiants invalides');
      }

      const data = await response.json();
      const jwtToken = data.token;
      localStorage.setItem('token', jwtToken);
      await initUser(jwtToken);
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
