import {
  BsShop,
  BsStars,
  BsFillHandbagFill,
  BsGear,
  BsFillBookmarkStarFill,
} from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { ImHammer2 } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";

const SidebarView = () => {
  return (
    <section className="w-60 h-screen flex flex-col  border-r-2 ml-10">
      <header className="font-bold text-4xl pt-4">NFTrey</header>

      <div className="flex  flex-col relative top-6">
        <span className="text-black text-xl py-3">MARKET PLACE</span>
        <div className="flex items-center  gap-3 text-lg py-0.5">
          <BsFillHandbagFill className="" />
          <span>Market</span>
        </div>
        <div className=" flex items-center gap-3 text-lg py-0.5">
          <ImHammer2 />
          <span>Active Bid</span>
        </div>
        <div className=" flex items-center gap-3 text-lg py-0.5">
          <BsFillBookmarkStarFill />
          <span>Saved</span>
        </div>
      </div>

      <div className="flex  flex-col relative top-7 py-7">
        <span className="text-black text-xl py-3">MY ACCOUNT</span>

        <div className=" flex items-center gap-3 text-lg py-0.5">
          <BsFillHandbagFill />
          <span>My Collection</span>
        </div>

        <div className=" flex items-center gap-3 text-lg py-0.5">
          <FiSave />
          <span>History</span>
        </div>

        <div className=" flex items-center gap-3 text-lg py-0.5">
          <BsFillBookmarkStarFill />
          <span>Favourite</span>
        </div>
      </div>
    </section>
  );
};
export default SidebarView;
