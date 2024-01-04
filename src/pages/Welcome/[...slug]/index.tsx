import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { UserContext } from '@/context/user-context';

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);

  useEffect(() => {
    if (Array.isArray(slug) && slug.length === 3) {
      console.log(slug);
      setOldPassword(slug[0]);
      setId(slug[1]);
      setToken(slug[2]);
    } else {
      console.log('Slug is undefined, not an array, or has incorrect length');
    }
  }, [slug]);

  let easing = [0.6, -0.05, 0.01, 0.99];

  const handleSavePassword = async () => {
    try {
      setLoading(true);
      setError('');

      if (password !== confirmPassword) {
        setError('Password and Confirm Password do not match');
        setLoading(false);
        return;
      }

      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/updatePassword/${id}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          oldpassword: oldPassword,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.email);
        await login(data.email, password);
      } else {
        console.error('Failed to update password');
        setError('Failed to update password. Please try again.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <div className="flex-1 container mx-auto flex justify-center items-center bg-neutral">
          <div className="h-fit w-[570px] rounded-lg bg-neutral border border-black shadow-xl m-5 lg:mx-0">
            <div className="h-[80px] bg-[#222222] rounded-lg flex justify-center items-center p-5">
              <span className="text-xl font-semibold text-white">
                Set your password
              </span>
            </div>
            <div className="flex flex-col space-y-6 p-5 mt-5">
              {error && (
                <div className="w-full flex justify-center items-center">
                  <span className="text-red-500 text-center">{error} !!!</span>
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, ease: easing, duration: 0.6 }}
                className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
              >
                <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[50%] font-semibold flex justify-start items-center px-3">
                  Password *
                </span>
                <input
                  type="password"
                  name="password"
                  id="password1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
                  placeholder="*************"
                  maxLength={8}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, ease: easing, duration: 0.6 }}
                className="w-full h-[80px] bg-black rounded-lg flex justify-end items-center space-x-5 relative"
              >
                <span className="text-white absolute left-[13px] top-[-11px] w-full md:w-[50%] font-semibold flex justify-start items-center px-3">
                  Confirm Password *
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  id="password2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-black text-white h-14 w-full flex justify-center items-center rounded-lg px-2 outline-none shadow-md"
                  placeholder="*************"
                  maxLength={8}
                  required
                />
              </motion.div>
            </div>
            <div className="w-full flex justify-end items-center p-5">
              <button
                className="bg-white text-black p-2 rounded-lg hover:font-semibold"
                onClick={handleSavePassword}
              >
                {loading ? (
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
                ) : (
                  <span>Save my password</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
