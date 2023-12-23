import { FC, useEffect, useContext, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../context/user-context';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  const [isAuthCheckComplete, setAuthCheckComplete] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!user) {
          router.push('/Login');
        }
      } catch (error) {
        console.error(
          "Erreur lors de la vérification de l'authentification :",
          error
        );
      } finally {
        setAuthCheckComplete(true);
      }
    };

    checkAuth();
  }, [user, router]);

  return isAuthCheckComplete ? <div>{children}</div> : null;
};

export default AuthGuard;
