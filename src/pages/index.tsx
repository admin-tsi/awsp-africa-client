import CustomButton from '@/components/CustomButton';
import Footer from '@/components/Footer';
import Joinform from '@/components/Joinform';
import Loginform from '@/components/Loginform';
import Navbar from '@/components/Navbar';

export default function Index() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center items-center bg-neutral">
        <Loginform/>
      </div>
      <Footer />
    </div>
  );
}
