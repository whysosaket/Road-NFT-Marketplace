import { FaPlus } from "react-icons/fa6";

const OurOfferings = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl flex gap-4 md:justify-end">
        <FaPlus size={25} className="my-auto text-p1" />
        WHAT WE OFFER
      </h1>
      <div className="flex md:block mt-8 md:mt-0">

      
      <div className="flex md:justify-end mr-5 md:mr-0">
        <div className="bg-p1 h-28 md:my-8 w-[1px]"></div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="md:text-right">INTELLIGENT NFTS</h1>
        <h1 className="md:text-right">INTERACTIVE NFTS</h1>
        <h1 className="md:text-right">BLOCKCHAIN</h1>
        <h1 className="md:text-right">CRYPTOCURRENCY</h1>
        <h1 className="md:text-right">META SHOWDOWN</h1>
      </div>
      </div>
    </div>
  );
};

export default OurOfferings;
