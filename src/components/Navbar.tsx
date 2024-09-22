import { IoMenu } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex justify-between align-middle">
        <div className="my-auto">
            <div className="absolute -left-32 -top-32 -z-10 w-60 h-60 bg-p2 rounded-full"></div>
            <CgMenuGridO size={25} />
        </div>
        <div className="hidden md:flex gap-8">
            <button>EXPLORE</button>
            <button>MARKETPLACE</button>
            <button>RESOURCES</button>
            <button>FAQ</button>
        </div>
        <div className="my-auto">
            <div className="absolute right-1 md:right-3 -top-28 -z-10 w-20 h-60 bg-p2 rounded-br-[10rem]"></div>
            <IoMenu size={25} />
        </div>
    </div>
  )
}

export default Navbar