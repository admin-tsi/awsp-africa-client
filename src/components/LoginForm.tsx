import React, { useState } from 'react';
import Input from './Input';
import { AnimatePresence, motion } from 'framer-motion';

const LoginForm = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [forgotPasswordData, setForgotPasswordData] = useState({
    forgotEmail: '',
  });

  const handleLoginClick = () => {
    console.log('Login clicked!', loginData);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleSendMailClick = () => {
    console.log('Send mail clicked!', forgotPasswordData);
  };

  const handleBackToLoginClick = () => {
    setShowForgotPassword(false);
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
              <button
                onClick={handleLoginClick}
                className="bg-white p-2 rounded-md font-semibold hover:font-bold"
              >
                Submit
              </button>
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
              <button
                className="bg-white p-2 rounded-md font-semibold"
                onClick={handleSendMailClick}
              >
                Send Mail
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LoginForm;
