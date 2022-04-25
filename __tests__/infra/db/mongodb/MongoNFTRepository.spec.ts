import { Collection } from 'mongodb';
import { MongoHelper, MongoGalleryRepository } from '../../../../src/infra/db/mongodb';
import { mockAddGallery } from '../../../domain/mocks/MockGallery';
import env from '../../../../src/main/config/env';
import { GalleryDomainUseCase } from '../../../../src/domain/usecases';

let galleryCollection: Collection;
let nftCollection: Collection;

const mockGallery = async (): Promise<GalleryDomainUseCase.Result | false> => {
  const gallery = mockAddGallery();
  const res = await galleryCollection.insertOne(gallery);

  if (res.insertedId) return { id: res.insertedId.toHexString(), ...gallery };
  else return false;
};

const mockNFT = async (): Promise<void> {
  const nft = mockAddNFT()
}

const makeAux = (): MongoGalleryRepository => {
  return new MongoGalleryRepository();
};

describe('MongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    galleryCollection = MongoHelper.getCollection('galleries');
    await galleryCollection.deleteMany({});

    nftCollection = MongoHelper.getCollection('nft');
    await nftCollection.deleteMany({});
  });

  it('should find all NFTs', async () => {
    const gallery = await mockGallery();

    if (gallery) {
      const aux = makeAux();
      const result = await aux.findAllNFTs(gallery.id);
      console.log('allnft', result);
      expect(result).not.toBeUndefined();
    }
  });
});
