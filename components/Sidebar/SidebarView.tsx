import {
  BsShop,
  BsStars,
  BsFillHandbagFill,
  BsGear,
  BsFillBookmarkStarFill,
} from "react-icons/bs";
import { FiSave } from "react-icons/fi";
import { ImHammer2, ImUpload2 } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { FaWallet, FaStar, FaHistory } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

const SidebarView = () => {
  return (
    <section className="fixed h-screen p-4 ml-1 pl-8 w-[250px] border-2 rounded-lg">
      <header className="font-bold text-4xl pt-4">NFTrey</header>

      <div className="flex  flex-col relative top-6">
        <span className="text-black text-xl py-3"></span>

        <div className="flex items-center  gap-3 text-xl py-0.5">
          <AiFillHome className="" />
          <span>Home</span>
        </div>

        <div className="flex items-center  gap-3 text-xl py-0.5">
          <BsFillHandbagFill className="" />
          <span>Market</span>
        </div>

        {/* <div className=" flex items-center gap-3 text-xl py-0.5">
          <ImHammer2 />
          <span>Active Bid</span>
        </div> */}

        <button className=" flex items-center gap-3 text-xl py-0.5">
          <BsFillBookmarkStarFill />
          <span>Saved</span>
        </button>
      </div>

      <div className="flex  flex-col relative top-7 py-7">
        <span className="text-black text-xl py-3">MY PROFILE</span>

        <button className=" flex items-center gap-3 text-xl py-0.5">
          <ImUpload2 />
          <span>Mint NFT</span>
        </button>

        <button className=" flex items-center gap-3 text-xl py-0.5">
          <BsFillCollectionFill />
          <span>My Collection</span>
        </button>

        <button className=" flex items-center gap-3 text-xl py-0.5">
          <FaHistory />
          <span>History</span>
        </button>

        <button className=" flex items-center gap-3 text-xl py-0.5">
          <FaStar />
          <span>Favourite</span>
        </button>
      </div>

      {/* <div class="flex items-center justify-center w-full mb-12">
  
        <label 
    for="toogleA"
    class="flex items-center cursor-pointer"
  >
    <!-- toggle -->
    <div class="relative">
      <!-- input -->
      <input id="toogleA" type="checkbox" class="sr-only" />
      <!-- line -->
      <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
      <!-- dot -->
      <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div> */}
    </section>
  );
};
export default SidebarView;
