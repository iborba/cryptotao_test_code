import { SaveGalleryDomainUseCase } from "../../../src/domain/usecases/SaveGalleryDomainUseCase";
import { ListGalleryUseCase } from "../../../src/domain/usecases/ListGalleryDomainUseCase";
import { mockFindAllNFTs, mockFindGalleries, mockFindGallery, mockFindOneNFT } from "../../domain/mocks/MockGallery";

export class SaveGallerySpy implements SaveGalleryDomainUseCase {
  params: SaveGalleryDomainUseCase.Params | undefined
  async create(gallery: SaveGalleryDomainUseCase.Params): Promise<boolean> {
    this.params = gallery
    return true
  }
}

export class ListGallerySpy implements ListGalleryUseCase {
  params: ListGalleryUseCase.Params | undefined
  async findAll(): Promise<ListGalleryUseCase.GalleriesResult> {
    return mockFindGalleries()
  }
  async findOne(id: string): Promise<ListGalleryUseCase.GalleryResult> {
    return mockFindGallery();
  }

  async findOneNFT(id: string, nftId: string): Promise<ListGalleryUseCase.NFTResult> {
    return mockFindOneNFT();
  }
  async findAllNFTs(id: string): Promise<ListGalleryUseCase.NFTResult[]> {
    return mockFindAllNFTs()
  }
}