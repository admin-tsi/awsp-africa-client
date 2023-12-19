// Index.js

import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Input from '@/components/Input';

const Index = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col bg-neutral container mx-auto">
        <form className="m-8 bg-neutral3 p-5 md:p-12 rounded-lg">
          <div>
            <div className="w-full flex justify-center items-center my-8 md:justify-start">
              <span className="text-white text-4xl">Account infos</span>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="mb-1">
                <Input
                  label="Email :"
                  id="email"
                  type="email"
                  placeholder="john@doe.com"
                  required
                />{' '}
              </div>
              <div className="mb-1">
                <Input
                  label="Password :"
                  id="password"
                  type="password"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div className="mb-1">
                <Input
                  label="Confirm password :"
                  id="confirm_password"
                  type="password"
                  placeholder="•••••••••"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center items-center my-8 md:justify-start">
              <span className="text-white text-4xl">User infos</span>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <Input
                label="Phone number :"
                id="phone"
                type="tel"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
              <Input
                label="First name :"
                id="first_name"
                type="text"
                placeholder="John"
                required
              />
              <Input
                label="Last name :"
                id="last_name"
                type="text"
                placeholder="Doe"
                required
              />
              <Input
                label="City :"
                id="city"
                type="text"
                placeholder="Cotonou"
                required
              />
              <Input
                label="State :"
                id="state"
                type="text"
                placeholder="Littoral"
                required
              />
              <Input
                label="Locality :"
                id="locality"
                type="text"
                placeholder="."
                required
              />
              <Input
                label="Birthdate :"
                id="birthdate"
                type="date"
                placeholder="25/08/2000"
                required
              />
              <Input
                label="Profession :"
                id="profession"
                type="text"
                placeholder="Coach"
                required
              />
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <button
              type="submit"
              className="text-neutral bg-primary hover:font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Saves all changes
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
