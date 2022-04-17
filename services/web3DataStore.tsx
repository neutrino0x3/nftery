import { faker } from "@faker-js/faker";

type NFTType = {
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

export const fetchAllNft = (count: Number) => {
  let res = [];
  for (let i = 0; i < count; i++) {
    const test: NFTType = {
      tokenId: faker.random.number({ max: 10000 }),
      owner: faker.random.hexaDecimal(16),
      creator: faker.random.hexaDecimal(16),
      title: faker.hacker.adjective() + " " + faker.hacker.noun(),
      description: faker.hacker.phrase(),
      imageURI: faker.image.abstract(),
      isMarketItem: faker.datatype.boolean(),
      seller: faker.random.hexaDecimal(16),
      price: faker.random.float({ max: 10, precision: 0.01 }),
    };
    res.push(test);
  }
  return res;
};
