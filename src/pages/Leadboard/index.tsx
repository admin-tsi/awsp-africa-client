import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Index() {
  const tableData = [
    {
      position: '🥇',
      fullname: 'John Doe',
      country: '🇧🇯 Benin',
      fulfilledCourses: 39,
      xp: '229,908',
      level: 34,
    },
    {
      position: '🥈',
      fullname: 'William Dae',
      country: '🇨🇮 Ivory Coast',
      fulfilledCourses: 35,
      xp: '209,998',
      level: 32,
    },
    {
      position: '🥉',
      fullname: 'Jane Doe',
      country: '🇧🇯 Benin',
      fulfilledCourses: 33,
      xp: '199,998',
      level: 31,
    },
    {
      position: '4',
      fullname: 'Bras Doe',
      country: '🇧🇯 Benin',
      fulfilledCourses: 32,
      xp: '189,998',
      level: 30,
    },
    {
      position: '5',
      fullname: 'John Doe',
      country: '🇧🇯 Benin',
      fulfilledCourses: 31,
      xp: '179,998',
      level: 29,
    },
    {
      position: '6',
      fullname: 'John Doe',
      country: '🇧🇯 Benin',
      fulfilledCourses: 30,
      xp: '169,998',
      level: 28,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container mx-auto bg-neutral p-3">
        <div className="w-full flex justify-center items-center my-8">
          <span className="text-5xl text-white">Leadboard 🏆</span>
        </div>
        <div className="relative overflow-x-auto p-8 my-12 bg-[#202020] rounded-lg">
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
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className="odd:bg-neutral even:bg-neutral3 border-b-2 border-neutral my-3"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.position}
                  </td>
                  <td className="px-6 py-4">{data.fullname}</td>
                  <td className="px-6 py-4">{data.country}</td>
                  <td className="px-6 py-4">{data.fulfilledCourses}</td>
                  <td className="px-6 py-4">{data.xp}</td>
                  <td className="px-6 py-4">{data.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col items-center my-2">
            <span className="text-sm text-white">
              Showing <span className="font-semibold underline">1</span> to
              <span className="font-semibold underline px-1">10</span> of
              <span className="font-semibold underline px-1">100</span> Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-zinc-900">
                Prev
              </button>
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-zinc-800 hover-bg-gray-900">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
