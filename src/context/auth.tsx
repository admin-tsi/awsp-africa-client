import { FC, useEffect, useContext, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../context/user-context';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!user) {
          router.push('/Login');
        }
      } catch (error) {
        console.error(
          "Erreur lors de la vérification de l'authentification:",
          error
        );
      }
    };

    checkAuth();
  }, [user, router]);

  return <div>{children}</div>;
};

export default AuthGuard;
