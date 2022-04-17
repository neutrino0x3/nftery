import Container from "../components/Container";
import CardPreview from "../components/NftPreviewCard";
import { fetchAllNft } from "../services/web3DataStore";
import { NFTType } from "../utils/types";
import { useEffect, useState } from "react";

const home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const data = fetchAllNft(10);
    setData(data);
  }, []);

  return (
    <Container>
      <div className="flex flex-wrap ml-[300px] gap-24  ">
        {data &&
          data.map((e: NFTType) => {
            return <CardPreview nftData={e} />;
          })}
      </div>
    </Container>
  );
};

export default home;
