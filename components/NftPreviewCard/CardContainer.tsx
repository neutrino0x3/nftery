import React from "react";
import CardPreview from "./CardView";
import { fetchAllNft } from "../../services/web3DataStore";

const CardContainer = () => {
  console.log(fetchAllNft(10));
  return (
    <div className="m-10 scroll-bar h-[700px]">
      <div className="grid grid-cols-3 place-items-center gap-x-24 px-24 ">
        <CardPreview />
        <CardPreview />
        <CardPreview />
        <CardPreview />
        <CardPreview />
        <CardPreview />
        <CardPreview />
        <CardPreview />
        <CardPreview />
      </div>
    </div>
  );
};

export default CardContainer;
