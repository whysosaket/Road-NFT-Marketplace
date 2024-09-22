import Image from "../../assets/img4.png";
import Background from "../../assets/bg2.png";
import Background2 from "../../assets/bg.png";
import DiscoverButton from "../shared/DiscoverButton";
import { motion } from "framer-motion";

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
              <motion.h1
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[3rem] md:text-[6rem] my-div"
              >
                R
              </motion.h1>
              <motion.p
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0, delay: 0.23 }}
                viewport={{ once: true }}
                className="md:-mt-8 md:ml-2 text-xs md:text-base my-div"
              >
                RALLY
              </motion.p>
            </div>
            <div className="bg-p1 md:h-20 md:my-8 w-[1px] mr-1 md:mr-0 ml-8"></div>
            <div>
              <motion.h1
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0, delay: 0.25 }}
                viewport={{ once: true }}
                className="text-[3rem] md:text-[6rem] my-div"
              >
                OA
              </motion.h1>
              <motion.p
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0, delay: 0.28 }}
                viewport={{ once: true }}
                className="md:-mt-8 md:ml-2 text-xs md:text-base my-div"
              >
                ONWARDS AND
              </motion.p>
            </div>
            <div className="bg-p1 md:h-20 md:my-8 w-[1px] mr-1 md:mr-0 ml-8"></div>
            <div>
              <motion.h1
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0, delay: 0.31 }}
                viewport={{ once: true }}
                className="text-[3rem] md:text-[6rem] my-div"
              >
                D
              </motion.h1>
              <motion.p
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0, delay: 0.34 }}
                viewport={{ once: true }}
                className="md:-mt-8 md:ml-2 text-xs md:text-base my-div"
              >
                DOMINATE
              </motion.p>
            </div>
          </div>

          <div className="md:flex">
            <div className="md:w-1/2 flex -my-20">
              <div className="md:-ml-20 z-50">
                <motion.img
                  initial={{ x: 0, y: 200, opacity: 0, scale: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0, delay: 0.25 }}
                  viewport={{ once: true }}
                  src={Image}
                  className="w-96 my-div"
                />
              </div>
            </div>
            <div className="md:w-1/2 my-auto md:-ml-28 flex z-20 flex-col">
              <motion.p
                initial={{ x: -200, y: 100, opacity: 0, scale: 0.5 }}
                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-inter leading-loose my-8 my-div"
              >
                We want to impact (A Billion+) people around the world in a
                positive way. We help market and advertise companies &
                individuals that also share the same mission.
              </motion.p>
              <motion.div
                initial={{ x: -200, y: -100, opacity: 0, scale: 0.5 }}
                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0, delay: 0.2 }}
                viewport={{ once: true }}
                className="my-div"
              >
                <DiscoverButton />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, y: 100, opacity: 0, scale: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0, delay: 0.1 }}
          viewport={{ once: true }}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
