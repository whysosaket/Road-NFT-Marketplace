import { FaPlus } from "react-icons/fa6";
import Road from "../../assets/img3.png";
import Video from "../../assets/video.png";
import DiscoverButton from "../shared/DiscoverButton";


const Impact = () => {
  return (
    <div className="pt-24 pl-4  w-full">
      <div className="flex justify-end">
        <div className="w-20 -ml-8 rotate-90 text-p1">0.0.4</div>
      </div>
      <div className="flex mt-8">
        <div className="w-1/3">
          <div className="relative w-[30rem] flex z-50">
            <img src={Road} className="w-full" />
          </div>
          <div>
            <h1 className="text-[3.5rem]">WE IMPACT</h1>
            <p className="font-inter my-4 leading-[3rem] pr-12">
              In the NFT space, AI-adjacent technologies have been used in
              generative art projects like Art Blocks. One-of-a-kind crupto
              artworks created by AI.
            </p>
            <div className="my-8">
              <DiscoverButton />
            </div>
          </div>
        </div>

        <div className="w-2/3">
          <h1 className="text-4xl flex gap-4 justify-end mr-10">
            <FaPlus size={25} className="my-auto text-p1" />
            OUR CAMPAIGNS
          </h1>
          <div className="flex justify-end mt-8 max-h-[50rem] overflow-y-hidden">
            <img src={Video} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
