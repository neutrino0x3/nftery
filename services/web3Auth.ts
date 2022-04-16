type StateType = {
  provider?: any;
  web3Provider?: any;
  address?: string;
  chainId?: number;
};

export const web3Login = () => {
  const notLoggedIn: StateType = {
    provider: null,
    web3Provider: null,
    address: null,
    chainId: null,
  };
  const loggedIn: StateType = {
    provider: "null",
    web3Provider: "null",
    address: "0x8rqe7fgo8r7",
    chainId: 2345,
  };
  return loggedIn;
};
