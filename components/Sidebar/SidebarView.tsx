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
    <section className="w-80 h-screen flex flex-col align-center border-2">
      <header className="font-bold text-3xl">NFTrey</header>

      <div className="flex align-center flex-col relative top-6">
        <span className="flex align-center">MARKET PLACE</span>
        <div className="flex items-center  gap-3">
          <BsFillHandbagFill className="" />
          <span>Market</span>
        </div>
        <div className=" flex items-center gap-3">
          <ImHammer2 />
          <span>Active Bid</span>
        </div>
        <div className=" flex items-center gap-3">
          <BsFillBookmarkStarFill />
          <span>Saved</span>
        </div>
      </div>

      <div className="flex align-center flex-col relative top-7">
        <span className="myAccountTitle">MY ACCOUNT</span>

        <div className=" flex items-center justify-center gap-3">
          <BsFillHandbagFill />
          <span>My Collection</span>
        </div>

        <div className=" flex items-center justify-center gap-3">
          <ImHammer2 />
          <span>Wallet</span>
        </div>

        <div className=" flex items-center justify-center gap-3">
          <FiSave />
          <span>History</span>
        </div>

        <div className=" flex items-center justify-center gap-3">
          <IoIosSettings />
          <span>Settings</span>
        </div>

        <div className=" flex items-center justify-center gap-3">
          <BsFillBookmarkStarFill />
          <span>Favourite</span>
        </div>
      </div>
    </section>
  );
};
export default SidebarView;
