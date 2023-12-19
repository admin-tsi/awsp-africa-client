import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Index() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container mx-auto bg-neutral p-3">
        <div className="w-full flex justify-center items-center my-8">
          <span className="text-5xl text-white">Leadboard 🏆</span>
        </div>
        <div className="relative overflow-x-auto p-8 bg-[#202020] rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Fullname
                </th>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  Fulfilled Courses
                </th>
                <th scope="col" className="px-6 py-3">
                  XP
                </th>
                <th scope="col" className="px-6 py-3">
                  Level
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#262626] my-3">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  🥇
                </td>
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">🇧🇯 Benin</td>
                <td className="px-6 py-4">39</td>
                <td className="px-6 py-4">229,908</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr className="bg-[#262626] my-3">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  🥈
                </td>
                <td className="px-6 py-4">John Dze</td>
                <td className="px-6 py-4">🇧🇯 Benin</td>
                <td className="px-6 py-4">35</td>
                <td className="px-6 py-4">229,908</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr className="bg-[#262626] my-3">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  🥉
                </td>
                <td className="px-6 py-4">Luc Doe</td>
                <td className="px-6 py-4">🇧🇯 Benin</td>
                <td className="px-6 py-4">29</td>
                <td className="px-6 py-4">229,908</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr className="bg-[#262626] my-3">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  4
                </td>
                <td className="px-6 py-4">Luc Doe</td>
                <td className="px-6 py-4">🇧🇯 Benin</td>
                <td className="px-6 py-4">29</td>
                <td className="px-6 py-4">229,908</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr className="bg-[#262626] my-3">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  5
                </td>
                <td className="px-6 py-4">Luc Doe</td>
                <td className="px-6 py-4">🇧🇯 Benin</td>
                <td className="px-6 py-4">29</td>
                <td className="px-6 py-4">229,908</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr className="bg-[#262626] my-3">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  6
                </td>
                <td className="px-6 py-4">Luc Doe</td>
                <td className="px-6 py-4">🇧🇯 Benin</td>
                <td className="px-6 py-4">29</td>
                <td className="px-6 py-4">229,908</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr className="bg-[#262626] my-3">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  7
                </td>
                <td className="px-6 py-4">Luc Doe</td>
                <td className="px-6 py-4">🇧🇯 Benin</td>
                <td className="px-6 py-4">29</td>
                <td className="px-6 py-4">229,908</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr className="bg-[#262626] my-3">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  8
                </td>
                <td className="px-6 py-4">Luc Doe</td>
                <td className="px-6 py-4">🇧🇯 Benin</td>
                <td className="px-6 py-4">29</td>
                <td className="px-6 py-4">229,908</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr className="bg-[#262626] my-3">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  9
                </td>
                <td className="px-6 py-4">Luc Doe</td>
                <td className="px-6 py-4">🇧🇯 Benin</td>
                <td className="px-6 py-4">29</td>
                <td className="px-6 py-4">229,908</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr className="bg-[#262626] my-3">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  10
                </td>
                <td className="px-6 py-4">Luc Doe</td>
                <td className="px-6 py-4">🇧🇯 Benin</td>
                <td className="px-6 py-4">29</td>
                <td className="px-6 py-4">229,908</td>
                <td className="px-6 py-4">34</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
