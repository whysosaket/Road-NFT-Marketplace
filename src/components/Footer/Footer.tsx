import Me from "../Hero/Me";

const Footer = () => {
  return (
    <div className="flex justify-between align-middle mt-48 mb-4">
      <div className="w-1/12 ">
        <div className="-rotate-90 -ml-16">
          <div className="flex gap-6">
            <h1>DISCOVER</h1>
            <h1>CONTACT</h1>
            <h1>REGISTER</h1>
          </div>
        </div>
      </div>
      <div className="w-11/12">
        <div className="flex gap-24">
          <div className="w-4/12 relative bottom-20">
            <h1 className="text-4xl">DON'T BE SHY.</h1>
            <h1 className="text-4xl">TALK TO US</h1>
          </div>
          <div className="w-3/12 relative bottom-20 font-inter">
            Say Hello.
            <hr className="opacity-30 my-4" />
            x.com/whyosaket
          </div>
          <div className="w-3/12 relative bottom-20 font-inter">
              New Business
              <hr className="opacity-30 my-4" />
              saketaryan2002@gmail.com
          </div>
        </div>
        <div className="w-full flex justify-between">
          <Me />
          <h1 className="font-inter">Saket 2024, All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
