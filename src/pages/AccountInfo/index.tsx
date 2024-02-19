import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Input from '@/components/Input';
import { useContext } from 'react';
import { UserContext } from '@/context/user-context';

const Index = () => {
  const { user, token } = useContext(UserContext);
  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    firstname: '',
    lastname: '',
  });

  const id = user?._id;
  const usertok = token;

  const [passwords, setPasswords] = useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  const [loading, setLoading] = useState(false);
  const [passwordload, setpasswordload] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [passwordchangSuccess, setPasswordchangSuccess] = useState(false);

  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    if (user && token) {
      fetchUserData();
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${id}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + usertok,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUserData(data);
      console.log('User data:', data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const saveUserData = async () => {
    try {
      setLoading(true);
      console.log(userData);
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${id}`;
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + usertok,
        },
        body: JSON.stringify({
          email: userData.email,
          phone: userData.phone,
          firstname: userData.firstname,
          lastname: userData.lastname,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setSaveSuccess(true);
    } catch (error) {
      console.error('Error saving user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const changeUserPassword = async () => {
    try {
      setPasswordError(null);
      setpasswordload(true);

      if (passwords.new_password !== passwords.confirm_password) {
        setPasswordError('New password and confirm password do not match.');
      }

      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/updatePassword/${id}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + usertok,
        },
        body: JSON.stringify({
          oldpassword: passwords.old_password,
          password: passwords.new_password,
        }),
      });

      console.log(id);
      console.log(token);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      setPasswordchangSuccess(true);
      console.log(responseData);
    } catch (error) {
      console.error('Error changing password:', error);
    } finally {
      setpasswordload(false);
    }
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [id]: value,
    }));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [id]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await saveUserData();
  };
  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await changeUserPassword();
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
                disabled={!userData.email}
              />
              <Input
                label="Phone Number :"
                id="phone"
                type="number"
                placeholder="96931602"
                required
                value={userData.phone}
                onChange={handleChange}
                disabled={!userData.phone}
              />
              <Input
                label="First Name :"
                id="firstname"
                type="text"
                placeholder="Doe"
                required
                value={userData.firstname}
                onChange={handleChange}
                disabled={!userData.firstname}
              />
              <Input
                label="Last Name :"
                id="lastname"
                type="text"
                placeholder="John"
                required
                value={userData.lastname}
                onChange={handleChange}
                disabled={!userData.lastname}
              />
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <button
              type="submit"
              disabled={
                loading || Object.values(userData).every((value) => !value)
              }
              className="text-neutral bg-primary hover:font-semibold focus:ring-4 outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading
                ? 'Saving...'
                : saveSuccess
                ? 'Success'
                : 'Save all changes'}{' '}
            </button>
          </div>
        </form>
        <form
          className="mx-8 mb-8 bg-neutral3 p-5 md:p-12 rounded-lg"
          onSubmit={handleChangePassword}
        >
          <div>
            <div className="w-full flex justify-center items-center my-8 md:justify-start">
              <span className="text-white text-4xl">Change user password</span>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <Input
                label="Old password :"
                id="old_password"
                type="password"
                placeholder="*****"
                required
                value={passwords.old_password}
                onChange={handlePasswordChange}
              />
              <Input
                label="New password :"
                id="new_password"
                type="password"
                placeholder="*******"
                required
                value={passwords.new_password}
                onChange={handlePasswordChange}
              />
              <Input
                label="Confirm password :"
                id="confirm_password"
                type="password"
                placeholder="*******"
                required
                value={passwords.confirm_password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <button
              type="submit"
              disabled={loading}
              className="text-neutral bg-primary hover:font-semibold font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {passwordload
                ? 'Saving...'
                : passwordchangSuccess
                ? 'Success'
                : 'Save new password'}
            </button>
          </div>
          <div className="w-full flex justify-end items-end my-5">
            {passwordError && (
              <div className="text-red-500">{passwordError}</div>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
