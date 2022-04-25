import { Collection } from 'mongodb';
import { MongoHelper, MongoNFTRepository } from '../../../../src/infra/db/mongodb';
import { mockAddNFT } from '../../../domain/mocks';
import env from '../../../../src/main/config/env';
import { NFTModel } from '../../../../src/domain/models';
import faker from '@faker-js/faker';

let nftCollection: Collection;
let galleryId: string;
let nftId: string;

const mockNFT = async (pGalleryId?: string): Promise<void> => {
  const nft = mockAddNFT();
  if (pGalleryId) {
    nft.galleryId = pGalleryId;
  }
  const res = await nftCollection.insertOne(nft);
  nftId = res.insertedId.toHexString();
  const result = await nftCollection.findOne<NFTModel>({ _id: res.insertedId });
  if (result) galleryId = result.galleryId;
};

const mockNFTs = async (galleryId: string): Promise<void> => {
  await mockNFT(galleryId);
  await mockNFT(galleryId);
};

const makeAux = (): MongoNFTRepository => {
  return new MongoNFTRepository();
};

describe('MongoNFTRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    nftCollection = MongoHelper.getCollection('nft');
    await nftCollection.deleteMany({});
  });

  it('should find one NFT', async () => {
    await mockNFT();

    const aux = makeAux();
    const result = await aux.findOne(galleryId, nftId);
    expect(result).not.toBeNull();
    expect(result?._id).toEqual(nftId);
    expect(result?.galleryId).toEqual(galleryId);
  });

  it('should find all NFTs', async () => {
    await mockNFTs(faker.datatype.uuid());

    const aux = makeAux();
    const result = await aux.findAll(galleryId);
    expect(result).not.toBeUndefined();
    expect(result).toHaveLength(2);
  });
});
