import { CreateGallery } from "../../domain/usecases/CreateGallery";
import { GalleryRepository } from "../protocols/db/gallery/GalleryRepository";

export class SaveGallery implements CreateGallery {
  constructor(
    private readonly saveGalleryRepository: GalleryRepository
  ) { }
  async create(gallery: CreateGallery.Params): Promise<boolean> {
    return this.saveGalleryRepository.create(gallery)
  }
}