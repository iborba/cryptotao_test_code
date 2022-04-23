import { ListGalleryDataUseCase } from "../../../data/usecases/ListGalleryDataUseCase";
import { ListGalleryDomainUseCase } from "../../../domain/usecases";
import { MongoRepository } from "../../../infra/db/mongodb/MongoRepository";

export const makeDBListGallery = (): ListGalleryDomainUseCase => {
  const galleryMongoRepository = new MongoRepository()
  return new ListGalleryDataUseCase(galleryMongoRepository)
}