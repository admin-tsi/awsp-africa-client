import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';


type Props = {};

function User_register_step4({}: Props) {
  let easing = [0.6, -0.05, 0.01, 0.99];
  return (
    <div className="w-full flex flex-col space-y-6 p-5 mt-5">
      <motion.textarea
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
        id="message"
        rows={4}
        className="bg-black text-white h-full w-full rounded-lg px-2 outline-none shadow-md p-5"
        placeholder="Why join AWSP ?"
      />
    </div>
  );
}

export default User_register_step4;
