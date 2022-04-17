import { IoIosSettings } from "react-icons/io";
import { BiWalletAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="h-24 border-b-2 flex items-center justify-between px-20">
      <div className="font-bold text-xl">Name-</div>
      <div className="flex gap-4">
        <div className=" flex items-center gap-3 text-lg py-0.5 rounded-full border-2 p-3">
          <IoIosSettings className="" />
        </div>
        <div className=" flex items-center gap-3 text-lg py-0.5 rounded-full border-2 p-3">
          <BiWalletAlt className="" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
