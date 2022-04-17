type UserMetaType = {
  walletAddress: String;
  displayName: String;
  email: String;
  profileUri: String;
  ethBalance: Number;
};

export const fetchUserMeta = (walletAddress: String): UserMetaType => {
  const dummyUserData: UserMetaType = {
    walletAddress: walletAddress,
    displayName: "testUser",
    email: "test@nomail.com",
    profileUri: "",
    ethBalance: 0.1,
  };
  return dummyUserData;
};
