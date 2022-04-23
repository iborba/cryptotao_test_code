import { CreateGallery } from "../../../src/domain/usecases/CreateGallery";
import { ListGallery } from "../../../src/domain/usecases/ListGallery";
import { mockFindAllNFTs, mockFindGalleries, mockFindGallery, mockFindOneNFT } from "../../domain/mocks/MockGallery";

export class SaveGallerySpy implements CreateGallery {
  params: CreateGallery.Params | undefined
  async create(gallery: CreateGallery.Params): Promise<boolean> {
    this.params = gallery
    return true
  }
}

export class ListGallerySpy implements ListGallery {
  params: ListGallery.Params | undefined
  async findAll(): Promise<ListGallery.GalleriesResult> {
    return mockFindGalleries()
  }
  async findOne(id: string): Promise<ListGallery.GalleryResult> {
    return mockFindGallery();
  }

  async findOneNFT(id: string, nftId: string): Promise<ListGallery.NFTResult> {
    return mockFindOneNFT();
  }
  async findAllNFTs(id: string): Promise<ListGallery.NFTResult[]> {
    return mockFindAllNFTs()
  }
}