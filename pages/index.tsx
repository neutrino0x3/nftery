import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { web3Login } from "../services/web3auth";

const Index = () => {
  const router = useRouter();
  const [web3Provider, setWeb3Provider] = useState(null);

  useEffect(() => {}, []);

  useEffect(() => {
    if (web3Provider) {
    //   router.push("/home");
    }
  }, [web3Provider]);

  return <div>Landing</div>;
};

export default Index;
