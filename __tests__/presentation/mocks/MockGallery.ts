import { SaveGalleryDomainUseCase, ListGalleryDomainUseCase } from "../../../src/domain/usecases";
import { mockFindAllNFTs, mockFindGalleries, mockFindGallery, mockFindOneNFT } from "../../domain/mocks/MockGallery";

export class SaveGallerySpy implements SaveGalleryDomainUseCase {
  params: SaveGalleryDomainUseCase.Params | undefined
  async create(gallery: SaveGalleryDomainUseCase.Params): Promise<boolean> {
    this.params = gallery
    return true
  }
}

export class ListGallerySpy implements ListGalleryDomainUseCase {
  params: ListGalleryDomainUseCase.Params | undefined
  async findAll(): Promise<ListGalleryDomainUseCase.GalleriesResult> {
    return mockFindGalleries()
  }
  async findOne(id: string): Promise<ListGalleryDomainUseCase.GalleryResult> {
    return mockFindGallery();
  }

  async findOneNFT(id: string, nftId: string): Promise<ListGalleryDomainUseCase.NFTResult> {
    return mockFindOneNFT();
  }
  async findAllNFTs(id: string): Promise<ListGalleryDomainUseCase.NFTResult[]> {
    return mockFindAllNFTs()
  }
}