import { Layouts } from "../components/Layouts";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import Employee from "../assets/employee.svg";
import LogoIpsum from "../assets/logoipsum.png";
import { Footer } from "../components/Footer";

const HeadContent = () => {
  return (
    <>
      <section className="md:justify-between justify-center md:gap-x-6 gap-x-0 gap-y-6 md:gap-y-0 items-start pt-2 md:pt-40 w-full h-full flex flex-col md:flex-row px-16">
        <img width={400} src={Employee} />
        <div className="flex flex-col gap-y-6">
          <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold text-center md:text-left">
            Let's make Business more Enjoy with us!
          </h1>
          <p className="text-white text-center md:text-start">
            Create a business with less effort and more secure so you dont need
            to worry
          </p>
          <div className="flex gap-x-4 justify-center md:justify-start">
            <Button text="Lets Talk" />
            <Button isprimary size="p-4" text="Learn More" />
          </div>
          <div className="grid grid-cols-3 w-auto lg:w-md grid-row-2 gap-x-2">
            <img src={LogoIpsum} />
            <img src={LogoIpsum} />
            <img src={LogoIpsum} />
            <img src={LogoIpsum} />
            <img src={LogoIpsum} />
            <img src={LogoIpsum} />
          </div>
        </div>
      </section>
    </>
  );
};

const MidContent = () => {
  return (
    <>
      <section className="md:justify-between justify-center md:gap-x-6 gap-x-0 gap-y-6 md:gap-y-0 items-start pt-2 md:pt-[200px] w-full h-full flex flex-col md:flex-row px-10">
        <div className="flex gap-y-10 flex-col w-auto md:w-1/2 order-2 justify-start items-end h-full">
          <div className="w-full h-auto">
            <h1 className="text-gray-700 font-bold text-3xl">
              01 Be More Productive
            </h1>
            <span className="text-gray-600 font-medium text-xl">
              Our happy client that enjoy his bisnis with us
            </span>
          </div>
          <div className="w-full h-auto">
            <h1 className="text-gray-700 font-bold text-3xl">
              01 Be More Productive
            </h1>
            <span className="text-gray-600 font-medium text-xl">
              Our happy client that enjoy his bisnis with us
            </span>
          </div>
          <div className="w-full h-auto">
            <h1 className="text-gray-700 font-bold text-3xl">
              01 Be More Productive
            </h1>
            <span className="text-gray-600 font-medium text-xl">
              Our happy client that enjoy his bisnis with us
            </span>
          </div>
          <div className="w-full h-auto">
            <h1 className="text-gray-700 font-bold text-3xl">
              01 Be More Productive
            </h1>
            <span className="text-gray-600 font-medium text-xl">
              Our happy client that enjoy his bisnis with us
            </span>
          </div>
        </div>
        <div className="flex gap-y-8 flex-col w-auto md:w-1/2 mt-[200px] md:mt-0">
          <h1 className="text-gray-700 font-medium text-4xl">
            Need to know what you need
          </h1>
          <p className="text-gray-800 text-center md:text-start">
            Let's see something in here that maybe you should know and need for
            growing to success with us
          </p>
          <div className="bg-gray-100 w-full h-auto p-8">
            <h1 className="text-green-500 font-bold text-3xl">1200+</h1>
            <span className="text-gray-600 font-medium text-xl">
              Our happy client that enjoy his bisnis with us
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export const Home = () => {
  return (
    <>
      <Navbar />
      <Layouts bgcolor="bg-gray-800" content={<HeadContent />} />
      <Layouts bgcolor="bg-white" content={<MidContent />} />
      <Footer/>
    </>
  );
};
