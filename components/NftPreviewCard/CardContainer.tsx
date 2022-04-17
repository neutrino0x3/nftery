import React from "react";
import CardPreview from "./CardView";
import { fetchAllNft } from "../../services/web3DataStore";

const CardContainer = () => {
  const data = fetchAllNft(10);
  return (
    <div className="flex flex-wrap ml-[300px] gap-24  ">
      {data.map((e) => {
        return <CardPreview nftData={e} />;
      })}
    </div>
  );
};

export default CardContainer;
