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

export default function Index() {
  const moduleDetailsProps = {
    title: "Modules",
    content: [
      {
        id: 1,
        title: "Partie 1:",
        secondtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales felis bibendum tortor fringilla, sit amet scelerisque est porta.",
      },
      {
        id: 2,
        title: "Partie 2:",
        secondtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales felis bibendum tortor fringilla, sit amet scelerisque est porta.",
      },
      {
        id: 3,
        title: "Partie 3:",
        secondtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales felis bibendum tortor fringilla, sit amet scelerisque est porta.",
      },
      {
        id: 4,
        title: "Partie 4:",
        secondtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales felis bibendum tortor fringilla, sit amet scelerisque est porta.",
      },
      {
        id: 5,
        title: "Partie 5:",
        secondtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales felis bibendum tortor fringilla, sit amet scelerisque est porta.",
      },
    ],
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container mx-auto flex-1 flex justify-center bg-neutral mt-10">
        <div className="flex flex-col p-5 md:flex-row">
          <div className="w-full text-white">
            <h1 className="text-[25px] leading-[28px] md:text-[45px] w-fit h-fit md:leading-[50px] font-medium">
              Strength and Conditioning Trainer Certification
            </h1>

            <div className="flex mt-2">
              <Image
                src={Translate}
                alt="language"
                className="w-[30px] h-[23px]"
              ></Image>
              <h4 className=" text-sm">
                Taught in <u>English</u> et en <u>French</u>
              </h4>
            </div>

            <div className="flex mt-6">
              <Image
                src={Ellipse}
                alt="language"
                className="w-[25px] h-[29px]"
              ></Image>
              <h3 className=" ml-2 text-sm mt-1">
                Teacher: Richard Williams & Keith Jones
              </h3>
            </div>
            <h3 className=" text-sm flex ">
              <p className="font-medium mr-1">70.000</p> already registered
            </h3>

            <h2 className='mt-4 text-lg font-semibold'>
              What will you learn?
            </h2>
            <div className='text-sm mt-2'>
              <p>1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>4.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>5.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <h2 className='mt-4 text-lg font-semibold'>Reviews</h2>
            <div className='flex'>
                <Image src={Stat} alt='stat icon'></Image>
                <h3 className='ml-1'>N quiz</h3>
            </div>
          </div>

          <div className="w-full p-4 bg-white text-black rounded-lg h-fit">
            <h4 className="font-medium">Courses</h4>
            <p className="text-xs">
              Learn the fundamentals of physical preparation and take part in
              the emergence of great athletes in Africa and around the world.
            </p>
            <hr className="border-1 border-black my-1" />
            <p className="font-bold flex">
              4.8
              <Image src={Star} alt="Star Icon" className="ml-1 mr-1"></Image> |
              10 000 reviews
            </p>

            <div className="flex">
              <Image
                src={Calendar}
                alt="Calendar Icon"
                className="mr-1 mt-0"
              ></Image>
              <div className="mt-2">
                <h1 className="font-medium text-lg">Planning : Flexible</h1>
                <p className="text-xs">Learn at your own place</p>
              </div>
            </div>

            <div className="flex mt-3">
              <Image src={Pin} alt="Pin Icon" className="mr-1"></Image>
              <div className="">
                <h1 className="font-medium">Infrastructure</h1>
              </div>
            </div>
            <p className="text-xs ml-5">
              Need an internet connection or a good computer device to work
              with? No problem. You can check AWSP relay points here at any
              time.
              <br />
              We provide you with everything you need for a smooth learning
              experience.
            </p>
          </div>
        </div>
      </div>
      <ModuleDetails {...moduleDetailsProps} />
      <Footer />
    </div>
  );
}
