import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { web3Login } from "../services/web3Auth";

const index = () => {
  const router = useRouter();
  const [web3LoginResponse, setWeb3LoginResponse] = useState(null);

  useEffect(() => {
    web3Login().then((res) => {
      setWeb3LoginResponse(res);
    });
  }, []);

  useEffect(() => {
    if (web3LoginResponse?.web3Provider) {
      router.push("/home");
    }
  }, [web3LoginResponse]);

  return <div>Landing</div>;
};

export default index;
