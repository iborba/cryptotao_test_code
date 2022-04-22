import { SaveGalleryRepository } from "../../../data/protocols/db/gallery/SaveGalleryRepository";
import { CreateGallery } from "../../../domain/usecases/CreateGallery";
import { MongoHelper } from "./MongoHelper";

export class MongoRepository implements SaveGalleryRepository {
  async create(gallery: CreateGallery.Params): Promise<boolean> {
    const galleryCollection = MongoHelper.getCollection('galleries')
    const result = await galleryCollection.insertOne(gallery)

    return result.insertedId !== null
  }
}