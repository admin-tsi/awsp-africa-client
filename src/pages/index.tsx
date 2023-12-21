import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Select from '@/components/Select';
import { useState } from 'react';

export default function Index() {
  const options = [
    { label: 'Athletics', value: 'Athletics' },
    { label: 'Basketball', value: 'Basketball' },
    { label: 'Soccer', value: 'Soccer' },
    { label: 'Baseball', value: 'Baseball' },
  ];
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center items-center bg-neutral">
        <Select
          options={options}
          value={value}
          onChange={(o) => setValue(o)}
        />{' '}
      </div>
      <Footer />
    </div>
  );
}
