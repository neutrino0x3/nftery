export type NFTType = {
  tokenId: Number;
  creator: String;
  owner: String;
  title: String;
  description: String;
  imageURI: String;
  isMarketItem: Boolean;
  seller?: String;
  price?: Number;
};
