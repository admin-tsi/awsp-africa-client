// Index.js
import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Input from '@/components/Input';
import { useContext } from 'react';
import { UserContext } from '@/context/user-context';

const Index = () => {
  const { user, token } = useContext(UserContext);
  const userId = user?._id; // Corrected the variable name
  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    first_name: '',
    last_name: '',
    city: '',
    state: '',
    locality: '',
    profession: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/data/${userId}`; // Use the correct variable name
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });

        console.log(userId);
        console.log(token);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          console.log(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
    if (user && token) {
      fetchUserData();
    }
  }, [user, token, userId]); // Added userId to the dependencies

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/data/${userId}`; // Use the correct variable name
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User data updated successfully');
      } else {
        console.error('Failed to update user data');
      }
    } catch (error) {
      console.error('Error updating user data', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col bg-neutral container mx-auto">
        <form
          className="m-8 bg-neutral3 p-5 md:p-12 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="w-full flex justify-center items-center my-8 md:justify-start">
              <span className="text-white text-4xl">User infos</span>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <Input
                label="Email :"
                id="email"
                type="email"
                placeholder="john@doe.com"
                required
                value={userData.email}
                onChange={handleChange}
              />
              <Input
                label="Phone Number :"
                id="phone"
                type="number"
                placeholder="96931602"
                required
                value={userData.phone}
                onChange={handleChange}
              />
              <Input
                label="First Name :"
                id="first_name"
                type="text"
                placeholder="Doe"
                required
                value={userData.first_name}
                onChange={handleChange}
              />
              <Input
                label="Last Name :"
                id="last_name"
                type="text"
                placeholder="John"
                required
                value={userData.last_name}
                onChange={handleChange}
              />
              <Input
                label="City :"
                id="city"
                type="text"
                placeholder="Cotonou"
                required
                value={userData.city}
                onChange={handleChange}
              />
              <Input
                label="Profession :"
                id="profession"
                type="text"
                placeholder="Coach"
                required
                value={userData.profession}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <button
              type="submit"
              disabled={loading}
              className="text-neutral bg-primary hover:font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? 'Saving...' : 'Save all changes'}
            </button>
          </div>
        </form>
        <form action="" className="m-8 bg-neutral3 p-5 md:p-12 rounded-lg">
          <div>
            <div className="w-full flex justify-center items-center my-8 md:justify-start">
              <span className="text-white text-4xl">Change user password</span>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <Input
                label="Old password :"
                id="old_password"
                type="password"
                placeholder="*****"
                required
                value={userData.email}
                onChange={handleChange}
              />
              <Input
                label="New password :"
                id="new_password"
                type="password"
                placeholder="*******"
                required
                value={userData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <button
              type="submit"
              disabled={loading}
              className="text-neutral bg-primary hover:font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? 'Saving...' : 'Save new password'}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
