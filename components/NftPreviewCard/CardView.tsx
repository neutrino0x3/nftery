import React from "react";

import { fetchAllNft } from "../../services/web3DataStore";

const CardPreview = () => {
  return (
    <div className="max-w-xs rounded-md overflow-hidden shadow-xl px-2 pt-12 border-2 border-gray-500 dark:border-white my-10">
      <div className="overflow-hidden border-b-2">
        <img src="" alt="" />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-2 items-center justify-start">
          <header className="text-lg font-semibold">Zazzles</header>
          <span className="text-slate-100">#122755</span>
        </div>
        <div>
          <span className="text-red-700">@creatorMark</span>
        </div>

        <div className="flex items-center justify-between ">
          <span></span>
          <button className="border-2 rounded-xl px-4 py-2 hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
