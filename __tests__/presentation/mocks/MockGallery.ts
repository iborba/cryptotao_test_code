import { CreateGallery } from "../../../src/domain/usecases/CreateGallery";
import { ListGallery } from "../../../src/domain/usecases/ListGallery";
import { mockFindGalleries } from "../../domain/mocks/MockGallery";

export class SaveGallerySpy implements CreateGallery {
  params: CreateGallery.Params | undefined
  async create(gallery: CreateGallery.Params): Promise<boolean> {
    this.params = gallery
    return true
  }
}

export class ListGallerySpy implements ListGallery {
  params: ListGallery.Params | undefined
  async findAll(): Promise<ListGallery.GalleryResult> {
    return mockFindGalleries()
  }
  findOne: (id: string) => Promise<ListGallery.GalleryResult>;
  findOneNFT: (id: string, nftId: string) => Promise<ListGallery.NFTResult>;
  findAllNFTs: (id: string) => Promise<ListGallery.NFTResult>;

}