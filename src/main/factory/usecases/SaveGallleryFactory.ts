import { SaveGalleryDataUseCase } from "../../../data/usecases/SaveGalleryDataUseCase";
import { SaveGalleryDomainUseCase } from "../../../domain/usecases/SaveGalleryDomainUseCase";
import { MongoRepository } from "../../../infra/db/mongodb/MongoRepository";

export const makeDBSaveGallery = (): SaveGalleryDomainUseCase => {
  const galleryMongoRepository = new MongoRepository()
  return new SaveGalleryDataUseCase(galleryMongoRepository)
}