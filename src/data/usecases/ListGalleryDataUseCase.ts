import GalleryModel from "../../domain/models/GalleryModel";
import { ListGalleryUseCase } from "../../domain/usecases/ListGalleryDomainUseCase";
import { GalleryRepository } from "../protocols/db/gallery/GalleryRepository";

export class ListGalleryDataUseCase implements ListGalleryUseCase {
  constructor(
    private readonly galleryRepository: GalleryRepository
  ) { }
  findAll(): Promise<ListGalleryUseCase.GalleriesResult> {
    return this.galleryRepository.findAllGalleries();
  }
  findOne(id: string): Promise<GalleryModel | undefined> {
    return this.galleryRepository.findOneGallery(id);
  }
  findOneNFT(id: string, nftId: string): Promise<ListGalleryUseCase.NFTResult | undefined> {
    return this.galleryRepository.findOneNFT(id, nftId);
  }
  findAllNFTs(id: string): Promise<ListGalleryUseCase.NFTResult[]> {
    return this.galleryRepository.findAllNFTs(id);
  }
}