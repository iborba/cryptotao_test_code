import { SaveGallery } from "../../../data/usecases/SaveGallery";
import { CreateGallery } from "../../../domain/usecases/CreateGallery";
import { MongoRepository } from "../../../infra/db/mongodb/MongoRepository";

export const makeDBSaveGallery = (): CreateGallery => {
  const galleryMongoRepository = new MongoRepository()
  return new SaveGallery(galleryMongoRepository)
}