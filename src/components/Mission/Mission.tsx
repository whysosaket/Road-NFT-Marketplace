import Image from "../../assets/img4.png";
import Background from "../../assets/bg2.png";
import Background2 from "../../assets/bg.png";
import DiscoverButton from "../shared/DiscoverButton";

const Mission = () => {
  return (
    <div className="pt-16 pl-4 border-t-2 border-p3 w-full bg-p3 min-h-screen overflow-hidden">
      <img
        src={Background}
        className="absolute -z-0 -left-[50rem] opacity-30"
      />
      <div className="hidden md:block">
        <img
          src={Background}
          className="absolute -z-0 w-[40rem] left-[20rem] opacity-20"
        />
        <img
          src={Background2}
          className="absolute -z-0 w-[60rem] right-[0rem] opacity-20"
        />
      </div>

      <div className="">
        <div className="w-20 -ml-8 rotate-90 text-p1">0.0.1</div>
      </div>
      <div className="md:flex">
        <div className="md:w-2/3">
          <div className="flex gap-1 md:gap-8 mb-10 md:mb-0">
            <div className="bg-p1 md:h-20 md:my-8 mr-1 md:mr-0 w-[1px]"></div>
            <div>
              <h1
                className="text-[3rem] md:text-[6rem] my-div"
              >
                R
              </h1>
              <p
                className="md:-mt-8 md:ml-2 text-xs md:text-base my-div"
              >
                RALLY
              </p>
            </div>
            <div className="bg-p1 md:h-20 md:my-8 w-[1px] mr-1 md:mr-0 ml-8"></div>
            <div>
              <h1
                className="text-[3rem] md:text-[6rem] my-div"
              >
                OA
              </h1>
              <p
                className="md:-mt-8 md:ml-2 text-xs md:text-base my-div"
              >
                ONWARDS AND
              </p>
            </div>
            <div className="bg-p1 md:h-20 md:my-8 w-[1px] mr-1 md:mr-0 ml-8"></div>
            <div>
              <h1
                className="text-[3rem] md:text-[6rem] my-div"
              >
                D
              </h1>
              <p
                className="md:-mt-8 md:ml-2 text-xs md:text-base my-div"
              >
                DOMINATE
              </p>
            </div>
          </div>

          <div className="md:flex">
            <div className="md:w-1/2 flex -my-20">
              <div className="md:-ml-20 z-50">
                <img
                  src={Image}
                  className="w-96 my-div"
                />
              </div>
            </div>
            <div className="md:w-1/2 my-auto md:-ml-28 flex z-20 flex-col">
              <p
                className="font-inter leading-loose my-8 my-div"
              >
                We want to impact (A Billion+) people around the world in a
                positive way. We help market and advertise companies &
                individuals that also share the same mission.
              </p>
              <div
                className="my-div"
              >
                <DiscoverButton />
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:w-1/3 leading-tight flex md:block mt-8 md:mt-0 a"
        >
          <div className="bg-p1 md:h-44 my-4 md:my-8 w-[1px] md:block mr-8"></div>
          <div>
            <h1 className="text-[3rem] md:text-[5rem] my-div">OUR</h1>
            <h1 className="text-[3rem] md:text-[5rem] my-div">MISSION</h1>
            <h1 className="text-[3rem] md:text-[5rem] my-div">IS</h1>
            <h1 className="text-[3rem] md:text-[5rem] my-div">
              SIMPLE<span className="text-blue-400">.</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
