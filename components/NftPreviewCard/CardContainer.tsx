import React, { useEffect, useState } from "react";
import { NFTType } from "../../utils/types";
import CardView from "./CardView";

export const CardContainer = ({ nftData }: { nftData: NFTType }) => {
  return <CardView nftData={nftData} />;
};
