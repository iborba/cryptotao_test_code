import { ListGallery } from "../../../data/usecases/ListGallery";
import { ListGalleryUseCase } from "../../../domain/usecases/ListGallery";
import { MongoRepository } from "../../../infra/db/mongodb/MongoRepository";

export const makeDBListGallery = (): ListGalleryUseCase => {
  const galleryMongoRepository = new MongoRepository()
  return new ListGallery(galleryMongoRepository)
}