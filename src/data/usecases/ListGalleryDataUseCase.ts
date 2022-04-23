import { ListGalleryDomainUseCase } from "../../domain/usecases";
import { GalleryRepository } from "../protocols/db/gallery/GalleryRepository";

export class ListGalleryDataUseCase implements ListGalleryDomainUseCase {
  constructor(
    private readonly galleryRepository: GalleryRepository
  ) { }
  findAll(): Promise<ListGalleryDomainUseCase.GalleriesResult> {
    return this.galleryRepository.findAllGalleries();
  }
  findOne(id: string): Promise<ListGalleryDomainUseCase.GalleryResult | undefined> {
    return this.galleryRepository.findOneGallery(id);
  }
  findOneNFT(id: string, nftId: string): Promise<ListGalleryDomainUseCase.NFTResult | undefined> {
    return this.galleryRepository.findOneNFT(id, nftId);
  }
  findAllNFTs(id: string): Promise<ListGalleryDomainUseCase.NFTResult[]> {
    return this.galleryRepository.findAllNFTs(id);
  }
}