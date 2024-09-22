import { FaPlus } from "react-icons/fa6";

const OurOfferings = () => {
  return (
    <div>
      <h1 className="text-4xl flex gap-4 justify-end">
        <FaPlus size={25} className="my-auto text-p1" />
        WHAT WE OFFER
      </h1>
      <div className="flex justify-end">
        <div className="bg-p1 h-28 my-8 w-[1px]"></div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-right">INTELLIGENT NFTS</h1>
        <h1 className="text-right">INTERACTIVE NFTS</h1>
        <h1 className="text-right">BLOCKCHAIN</h1>
        <h1 className="text-right">CRYPTOCURRENCY</h1>
        <h1 className="text-right">META SHOWDOWN</h1>
      </div>
    </div>
  );
};

export default OurOfferings;
