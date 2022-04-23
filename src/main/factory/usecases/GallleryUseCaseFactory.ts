import { ListGalleryDataUseCase } from "../../../data/usecases/ListGalleryDataUseCase";
import { SaveGalleryDataUseCase } from "../../../data/usecases/SaveGalleryDataUseCase";
import { ListGalleryDomainUseCase, SaveGalleryDomainUseCase } from "../../../domain/usecases";
import { MongoRepository } from "../../../infra/db/mongodb/MongoRepository";

export const makeDBListGallery = (): ListGalleryDomainUseCase => {
  const galleryMongoRepository = new MongoRepository()
  return new ListGalleryDataUseCase(galleryMongoRepository)
}
export const makeDBSaveGallery = (): SaveGalleryDomainUseCase => {
  const galleryMongoRepository = new MongoRepository()
  return new SaveGalleryDataUseCase(galleryMongoRepository)
}