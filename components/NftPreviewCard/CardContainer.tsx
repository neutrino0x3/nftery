import React from "react";
import CardPreview from "./CardView";
import { fetchAllNft } from "../../services/web3DataStore";

const CardContainer = () => {
  console.log(fetchAllNft(10));
  return (
    <div className="w-full grid-rows-3 gap-5 place-items-center">
      <CardPreview />
      <CardPreview />
      <CardPreview />
    </div>
  );
};

export default CardContainer;
