import { SaveGalleryDomainUseCase } from "../../domain/usecases/SaveGalleryDomainUseCase";
import { GalleryRepository } from "../protocols/db/gallery/GalleryRepository";

export class SaveGalleryDataUseCase implements SaveGalleryDomainUseCase {
  constructor(
    private readonly saveGalleryRepository: GalleryRepository
  ) { }
  async create(gallery: SaveGalleryDomainUseCase.Params): Promise<boolean> {
    return this.saveGalleryRepository.create(gallery)
  }
}