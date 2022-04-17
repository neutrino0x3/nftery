import ReactTooltip from "react-tooltip";
import { IoIosSettings } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="h-24 border-b-0 flex items-center justify-between px-20 pt-6">
      <div className="font-bold text-4xl">Hello, Name</div>
      <div className="flex gap-4">
        <button
          className=" flex items-center justify-center rounded-full border-2 h-10 w-10 border-black"
          data-tip="home">
          <AiFillHome className="text-2xl " />
        </button>
        <button
          className=" flex items-center justify-center rounded-full border-2 h-10 w-10 border-black"
          data-tip="settings">
          <IoIosSettings className="text-2xl " />
        </button>
        <button
          className=" flex items-center justify-center rounded-full border-2 h-10 w-10 border-black"
          data-tip="wallet">
          <IoWallet className="text-2xl " />
        </button>
      </div>
      <ReactTooltip place="bottom" type="dark" effect="float" />
    </header>
  );
};

export default Navbar;
