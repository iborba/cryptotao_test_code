import { ListGalleryDataUseCase } from "../../../data/usecases/ListGalleryDataUseCase";
import { ListGalleryUseCase } from "../../../domain/usecases/ListGalleryDomainUseCase";
import { MongoRepository } from "../../../infra/db/mongodb/MongoRepository";

export const makeDBListGallery = (): ListGalleryUseCase => {
  const galleryMongoRepository = new MongoRepository()
  return new ListGalleryDataUseCase(galleryMongoRepository)
}