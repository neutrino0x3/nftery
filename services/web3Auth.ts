type AuthState = {
  provider?: any;
  web3Provider?: any;
  address?: string;
  chainId?: number;
};

export const web3Login = () => {
  return new Promise((resolve, reject) => {
    const notLoggedIn: AuthState = {
      provider: null,
      web3Provider: null,
      address: null,
      chainId: null,
    };
    const loggedIn: AuthState = {
      provider: "null",
      web3Provider: "null",
      address: "0x8rqe7fgo8r7",
      chainId: 2345,
    };
    resolve(loggedIn);
  });
};
