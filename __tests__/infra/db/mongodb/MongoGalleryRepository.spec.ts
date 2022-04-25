import { Collection } from 'mongodb';
import { MongoHelper, MongoGalleryRepository } from '../../../../src/infra/db/mongodb';
import { mockAddGallery } from '../../../domain/mocks/MockGallery';
import env from '../../../../src/main/config/env';
import { GalleryDomainUseCase } from '../../../../src/domain/usecases';

let galleryCollection: Collection;

const mockGallery = async (): Promise<GalleryDomainUseCase.Result | false> => {
  const gallery = mockAddGallery();
  const res = await galleryCollection.insertOne(gallery);

  if (res.insertedId) return { id: res.insertedId.toHexString(), ...gallery };
  else return false;
};

const mockGalleries = async (): Promise<void> => {
  const galleries = [mockAddGallery(), mockAddGallery()];
  await galleryCollection.insertMany(galleries);
};

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
  });

  it('should find one gallery', async () => {
    const gallery = await mockGallery();

    if (gallery) {
      const aux = makeAux();
      const result = await aux.findOneGallery(gallery.id);
      expect(result).not.toBeNull();
      expect(result?.id).toEqual(gallery.id);
    }
  });

  it('should find all galleries', async () => {
    await mockGalleries();
    const aux = makeAux();
    const result = await aux.findAllGalleries();
    expect(result).not.toBeUndefined();
    expect(result).toHaveLength(2);
  });
});
