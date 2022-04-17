import React from "react";

import { NFTType } from "../../utils/types";
// type NFTType = {
//   tokenId: Number;
//   creator: String;
//   owner: String;
//   title: String;
//   description: String;
//   imageURI: String;
//   isMarketItem: Boolean;
//   seller?: String;
//   price?: Number;
// };

const CardPreview = ({ nftData }: { nftData: NFTType }) => {
  return (
    <div className=" w-96 h-96 max-w-3xl rounded-md overflow-hidden shadow-xl px-2 pt-12 border-2 border-gray-500 dark:border-white my-10">
      <div className="overflow-hidden border-b-2">
        {/* <img src={nftData.imageURI as string} alt="" /> */}
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-2 items-center justify-start">
          <header className="text-lg font-semibold">{nftData.title}</header>
          <span className="text-slate-100">{`#${nftData.tokenId}`}</span>
        </div>
        <div>
          <span className="text-red-700">{`${nftData.owner}`}</span>
        </div>

        <div className="flex items-center justify-between ">
          <span>{`Price:${nftData.price}`}</span>
          <button className="border-2 rounded-xl px-4 py-2 hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
