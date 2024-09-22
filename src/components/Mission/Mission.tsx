import Image from "../../assets/img4.png";
import Background from "../../assets/bg2.png";
import Background2 from "../../assets/bg.png";
import DiscoverButton from "../shared/DiscoverButton";

const Mission = () => {
  return (
    <div className="pt-16 pl-4 border-t-2 border-p3 w-full bg-p3 min-h-screen">
    <img src={Background} className="absolute -z-0 -left-[50rem] opacity-30" />
    <div>
        <img src={Background} className="absolute -z-0 w-[40rem] left-[20rem] opacity-20" />
        <img src={Background2} className="absolute -z-0 w-[60rem] right-[0rem] opacity-20" />
    </div>
    
    <div className="">
        <div className="w-20 -ml-8 rotate-90 text-p1">0.0.1</div>
    </div>
    <div className="flex">
        
        <div className="w-2/3">
            <div className="flex gap-8">
                <div className="bg-p1 h-20 my-8 w-[1px]"></div>
                <div>
                    <h1 className="text-[6rem]">R</h1>
                    <p className="-mt-8 ml-2">RALLY</p>
                </div>
                <div className="bg-p1 h-20 my-8 w-[1px] ml-8"></div>
                <div>
                    <h1 className="text-[6rem]">OA</h1>
                    <p className="-mt-8 ml-2">ONWARDS AND</p>
                </div>
                <div className="bg-p1 h-20 my-8 w-[1px] ml-8"></div>
                <div>
                    <h1 className="text-[6rem]">D</h1>
                    <p className="-mt-8 ml-2">DOMINATE</p>
                </div>
            </div>

            <div className="flex">
                <div className="w-1/2 flex">
                    <div className="-ml-20 z-50">
                        <img src={Image} className="w-96" />
                    </div>
                </div>
                <div className="w-1/2 my-auto -ml-28 flex z-20 flex-col">
                    <p className="font-inter leading-loose my-8">We want to impact (A Billion+) people around the world in a positive way. We help market and advertise companies & individuals that also share the same mission.</p>
                    <DiscoverButton />
                </div>
            </div>
        </div>
        <div className="w-1/3 leading-tight">
            <div className="bg-p1 h-44 my-8 w-[1px]"></div>
            <h1 className="text-[5rem]">OUR</h1>
            <h1 className="text-[5rem]">MISSION</h1>
            <h1 className="text-[5rem]">IS</h1>
            <h1 className="text-[5rem]">SIMPLE<span className="text-blue-400">.</span> </h1>
        </div>
    </div>
    </div>
  )
}

export default Mission