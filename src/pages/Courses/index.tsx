import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Star from '../../../public/star.svg';
import Image from 'next/image';
import Calendar from '../../../public/calendar.svg';
import Pin from '../../../public/pin.svg';
import Translate from '../../../public/translate.svg';
import Ellipse from '../../../public/ellipse.svg';
import Stat from '../../../public/stats.svg';
import ModuleDetails from '@/components/ModuleDetails';
import Certificate from '../../../public/certificate.svg';
import Router, { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  const handleBeginIntroduction = () => {
    router.push('/Introduction');
  };
  const moduleDetailsProps = {
    title: 'Modules',
    content: [
      {
        id: 1,
        title: 'Module 1:',
        secondtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales felis bibendum tortor fringilla, sit amet scelerisque est porta.',
      },
      {
        id: 2,
        title: 'Module 2:',
        secondtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales felis bibendum tortor fringilla, sit amet scelerisque est porta.',
      },
      {
        id: 3,
        title: 'Module 3:',
        secondtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales felis bibendum tortor fringilla, sit amet scelerisque est porta.',
      },
      {
        id: 4,
        title: 'Module 4:',
        secondtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales felis bibendum tortor fringilla, sit amet scelerisque est porta.',
      },
      {
        id: 5,
        title: 'Module 5:',
        secondtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales felis bibendum tortor fringilla, sit amet scelerisque est porta.',
      },
    ],
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container mx-auto flex-1 flex justify-center bg-neutral md:mt-10">
        <div className="flex flex-col space-y-6 p-5 lg:flex-row">
          <div className="w-full flex flex-col space-y-6 text-white">
            <div className="flex flex-col space-y-3">
              <h1 className="text-[25px] leading-[28px] md:text-[45px] w-fit h-fit md:leading-[50px] font-medium">
                Strength and Conditioning Trainer Certification
              </h1>
              <div className="flex items-center">
                <Image
                  src={Translate}
                  alt="language"
                  className="w-[30px] h-[23px]"
                ></Image>
                <h4 className=" text-sm">
                  Taught in <u>English</u> et en <u>French</u>
                </h4>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex space-x-2 justify-start items-center">
                <Image
                  src={Ellipse}
                  alt="language"
                  className="w-[25px] h-[29px]"
                />
                <h3 className="text-sm">
                  Teacher: Richard Williams & Keith Jones
                </h3>
              </div>
              <h3 className=" text-sm flex ">
                <p className="font-medium mr-1">70.000</p> already registered
              </h3>
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-semibold">What will you learn?</h2>
              <div className="text-sm">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa, repudiandae! Nesciunt hic nemo unde modi, aspernatur
                  necessitatibus nam fugit voluptatibus, natus eius expedita
                  ullam neque beatae labore officia sequi deserunt.
                </span>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa, repudiandae! Nesciunt hic nemo unde modi, aspernatur
                  necessitatibus nam fugit voluptatibus, natus eius expedita
                  ullam neque beatae labore officia sequi deserunt.
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-sIemibold">Reviews</h2>
              <div className="flex space-x-2">
                <Image src={Stat} alt="stat icon"></Image>
                <h3 className="ml-1">N quiz</h3>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-3 p-5 bg-white text-black rounded-lg h-fit">
            <div className="flex flex-col">
              <h4 className="font-medium">Courses</h4>
              <p className="text-xs">
                Learn the fundamentals of physical preparation and take part in
                the emergence of great athletes in Africa and around the world.
              </p>
              <hr className="border-1 border-black my-1" />
              <p className="font-bold flex">
                4.8
                <Image
                  src={Star}
                  alt="Star Icon"
                  className="ml-1 mr-1"
                ></Image>{' '}
                | 10 000 reviews
              </p>
            </div>

            <div className="flex flex-col justify-center items-start">
              <div className="flex justify-center items-center space-x-2">
                <Image
                  src={Calendar}
                  alt="Calendar Icon"
                  width={16}
                  height={16}
                />
                <h1 className="font-medium text-lg">Planning : Flexible</h1>
              </div>
              <p className="text-xs ml-6">Learn at your own place</p>
            </div>

            <div>
              <div className="flex space-x-2">
                <Image
                  src={Pin}
                  alt="Pin Icon"
                  height={16}
                  width={16}
                  className=""
                ></Image>
                <div className="">
                  <h1 className="font-medium">Infrastructure</h1>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-xs ml-6">
                  Need an internet connection or a good computer device to work
                  with? No problem. You can check AWSP relay points here at any
                  time. We provide you with everything you need for a smooth
                  learning experience.
                </p>
                <span className="text-red-500 ml-6">No extra charges !</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto relative md:flex mt-6 justify-center items-center p-5 hidden ">
        <div className="h-[90%] w-full bg-[#D9D9D9] p-5 -z-10 flex flex-col space-y-3 rounded-md">
          <p className="text-2xl font-medium">Get a professional certificate</p>
          <p className="text-xs">
            Add this qualification to your CV <br /> Share it on social networks
          </p>
        </div>
        <Image
          src={Certificate}
          alt="Certificate"
          className="z-10 absolute right-0 w-[200px] h-[200px]"
        ></Image>
      </div>
      <ModuleDetails {...moduleDetailsProps} />
      <Footer />
    </div>
  );
}
