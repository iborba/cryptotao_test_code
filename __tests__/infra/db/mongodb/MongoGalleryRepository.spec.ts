import { Collection, ObjectId } from 'mongodb';
import { MongoHelper, MongoGalleryRepository } from '../../../../src/infra/db/mongodb';
import { mockAddGallery } from '../../../domain/mocks';
import env from '../../../../src/main/config/env';

let galleryCollection: Collection;
let galleryId: ObjectId | undefined;

const mockGallery = async (): Promise<void> => {
  const gallery = mockAddGallery();
  const res = await galleryCollection.insertOne(gallery);
  galleryId = res.insertedId;
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
    await mockGallery();

    const aux = makeAux();
    const result = await aux.findOne(galleryId);

    expect(result).not.toBeNull();
    expect(result?._id).toEqual(galleryId);
  });

  it('should find all galleries', async () => {
    await mockGalleries();
    const aux = makeAux();
    const result = await aux.findAll();
    expect(result).not.toBeUndefined();
    expect(result).toHaveLength(2);
  });
});
