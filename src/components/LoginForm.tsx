import React, { useContext, useState } from 'react';
import Input from './Input';
import { AnimatePresence, motion } from 'framer-motion';
import { UserContext } from '@/context/user-context';

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [recoveryEmailSent, setRecoveryEmailSent] = useState(false);
  const [loginInProgress, setLoginInProgress] = useState(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLoginClick = async () => {
    try {
      setLoginInProgress(true);
      console.log('Login clicked!', loginData.email, loginData.password);
      await login(loginData.email, loginData.password);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    } finally {
      setLoginInProgress(false);
    }
  };

  const [forgotPasswordData, setForgotPasswordData] = useState({
    forgotEmail: '',
  });

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleSendMailClick = () => {
    console.log('Send mail clicked!', forgotPasswordData);
    setRecoveryEmailSent(true);
  };

  const handleBackToLoginClick = () => {
    setShowForgotPassword(false);
    setRecoveryEmailSent(false);
  };

  const easing = [0.6, -0.05, 0.01, 0.99];

  return (
    <section className="h-fit w-[558px] rounded-lg bg-neutral border border-black shadow-xl m-5 lg:mx-0">
      <div className="h-[100px] bg-[#222222] rounded-lg flex justify-center items-center">
        <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
          {showForgotPassword ? 'Forgot Password' : 'Login'}
        </span>
      </div>
      <div className="p-8 flex flex-col space-y-6">
        {!showForgotPassword ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
              className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
            >
              <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[50%] font-semibold flex justify-start items-center px-3">
                Email *
              </span>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="john@doe.com"
                className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
                onChange={(e) =>
                  setLoginData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
              className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
            >
              <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[50%] font-semibold flex justify-start items-center px-3">
                Password *
              </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="****************"
                className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
                onChange={(e) =>
                  setLoginData((prevData) => ({
                    ...prevData,
                    password: e.target.value,
                  }))
                }
                required
              />
            </motion.div>
            <div className="w-full h-fit flex justify-end items-center">
              <button
                className="text-white hover:underline hover:font-semibold"
                onClick={handleForgotPasswordClick}
              >
                Forgot your password ?
              </button>
            </div>
            <div className="w-full flex justify-end">
              {loginInProgress ? (
                <button
                  className="bg-white p-2 rounded-md font-semibold w-[20%] flex justify-center items-center"
                  disabled
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="bg-white p-2 rounded-md font-semibold hover:font-bold"
                >
                  Submit
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
              className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
            >
              <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[50%] font-semibold flex justify-start items-center px-3">
                Email *
              </span>
              <input
                type="text"
                name="forgotEmail"
                id="forgotEmail"
                placeholder="john@doe.com"
                className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
                onChange={(e) =>
                  setForgotPasswordData((prevData) => ({
                    ...prevData,
                    forgotEmail: e.target.value,
                  }))
                }
                disabled={recoveryEmailSent}
                required
              />
            </motion.div>
            <div className="w-full h-fit flex justify-end items-center">
              <button
                className="text-white hover:underline hover:font-semibold"
                onClick={handleBackToLoginClick}
              >
                Back to login
              </button>
            </div>
            <div className="w-full flex justify-end">
              {recoveryEmailSent ? (
                <p className="text-primary">
                  Recovery email sent! Check your inbox.
                </p>
              ) : (
                <button
                  className="bg-white p-2 rounded-md font-semibold"
                  onClick={handleSendMailClick}
                >
                  Send Mail
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LoginForm;
