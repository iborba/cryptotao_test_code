import { ObjectId } from 'mongodb';
import { GalleryRepository } from '../../../data/protocols/db/gallery/GalleryRepository';
import { GalleryDomainUseCase } from '../../../domain/usecases';
import { MongoHelper } from './MongoHelper';
export class MongoGalleryRepository implements GalleryRepository {
  async findOne(id?: ObjectId): Promise<GalleryDomainUseCase.Result | null> {
    const collection = MongoHelper.getCollection('galleries');
    const data = await collection.findOne<GalleryDomainUseCase.Result>({ _id: id });
    if (data) {
      data._id = id;
    }
    return data;
  }
  async findAll(): Promise<GalleryDomainUseCase.Result[]> {
    const collection = MongoHelper.getCollection('galleries');
    return await collection.find<GalleryDomainUseCase.Result>({}).toArray();
  }

  async create(gallery: GalleryDomainUseCase.Params): Promise<GalleryDomainUseCase.Result | false> {
    const galleryCollection = MongoHelper.getCollection('galleries');
    const result = await galleryCollection.insertOne(gallery);

    if (result.insertedId) {
      gallery._id = result.insertedId;
      return {
        ...gallery,
      };
    }
    return false;
  }
  async delete(id?: ObjectId): Promise<void> {
    const collection = MongoHelper.getCollection('galleries');
    await collection.deleteOne({ _id: id });
  }
  async update(id: ObjectId, gallery: GalleryDomainUseCase.Params): Promise<void> {
    const collection = MongoHelper.getCollection('galleries');
    await collection.updateOne({ _id: id }, gallery);
  }
}
