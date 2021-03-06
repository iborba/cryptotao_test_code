import faker from '@faker-js/faker';
import { ObjectId } from 'mongodb';
import { NFTModel } from '../../../src/domain/models';
import { NFTDomainUseCase } from '../../../src/domain/usecases';

const nft = {
  name: 'SOL Parasite #4679',
  description: '10,000 NFT Parasites finding their hosts on the Solana Blockchain.',
  image: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
  external_url: 'https://solparasites.com',
  origin: {
    name: 'SOL Parasite #4679',
    symbol: 'PRST',
    description: '10,000 NFT Parasites finding their hosts on the Solana Blockchain.',
    seller_fee_basis_points: 1900,
    image: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
    external_url: 'https://solparasites.com',
    attributes: [],
    collection: {
      name: 'SOL Parasites',
    },
    properties: {
      files: [
        {
          uri: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
          type: 'image/jpeg',
        },
      ],
      category: 'image',
      creators: [
        {
          address: '8bZXQYaU3eHQG9mzzrM7aHMkedmuNaZsHq4unYCw6VTm',
          share: 100,
        },
      ],
    },
  },
};

export const mockFindOneNFT = (galleryId?: ObjectId, nftId?: ObjectId): NFTModel => {
  return {
    _id: nftId,
    galleryId,
    nft,
  };
};
export const mockFindAllNFTs = (galleryId: ObjectId): NFTModel[] => [
  mockFindOneNFT(galleryId, new ObjectId()),
  mockFindOneNFT(galleryId, new ObjectId()),
];
export const mockAddNFT = (): NFTDomainUseCase.AddParams => ({
  galleryId: new ObjectId(),
  nft,
});
