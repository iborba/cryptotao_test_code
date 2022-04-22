import { CreateGallery } from "../../domain/usecases/CreateGallery";
import { SaveGalleryRepository } from "../protocols/db/gallery/SaveGalleryRepository";

export class SaveGallery implements CreateGallery {
  constructor(
    private readonly saveGalleryRepository: SaveGalleryRepository
  ) { }
  async create(gallery: CreateGallery.Params): Promise<boolean> {
    return this.saveGalleryRepository.create(gallery)
  }
}