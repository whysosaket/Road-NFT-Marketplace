import Me from "../Hero/Me";

const Footer = () => {
  return (
    <div className="md:flex justify-between align-middle mt-24 md:mt-48 mb-4">
      <div className="md:w-1/12 ">
        <div className="md:-rotate-90 md:-ml-16">
          <div className="flex gap-6 justify-center">
            <h1>DISCOVER</h1>
            <h1>CONTACT</h1>
            <h1>REGISTER</h1>
          </div>
        </div>
      </div>
      <div className="md:w-11/12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 my-8 md:my-0">
          <div className="md:w-4/12 md:relative bottom-20">
            <h1 className="text-4xl text-center md:text-start">DON'T BE SHY.</h1>
            <h1 className="text-4xl text-center md:text-start">TALK TO US</h1>
          </div>
          <div className="md:w-3/12 hidden md:block md:relative bottom-20 font-inter">
            Say Hello.
            <hr className="opacity-30 my-4" />
            x.com/whyosaket
          </div>
          <div className="md:w-3/12 hidden md:block md:relative bottom-20 font-inter">
              New Business
              <hr className="opacity-30 my-4" />
              saketaryan2002@gmail.com
          </div>
        </div>
        <div className="w-full flex flex-col justify-center md:flex-row md:justify-between">
          <div className="flex justify-center">
          <Me />
          </div>
          <h1 className="font-inter md:text-start text-center">Saket 2024, All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
