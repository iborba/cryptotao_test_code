import GalleryModel from "../../../../domain/models/GalleryModel"
import { CreateGallery } from "../../../../domain/usecases/CreateGallery"
import { ListGalleryUseCase } from "../../../../domain/usecases/ListGallery"

export interface GalleryRepository {
  findAllNFTs(id: string): Promise<ListGalleryUseCase.NFTResult[]>
  findOneNFT(id: string, nftId: string): Promise<ListGalleryUseCase.NFTResult | undefined>
  findOneGallery(id: string): Promise<GalleryModel | undefined>
  findAllGalleries(): Promise<ListGalleryUseCase.GalleriesResult>
  create: (gallery: SaveGalleryRepository.Params) => Promise<SaveGalleryRepository.Result>
}

export namespace SaveGalleryRepository {
  export type Params = CreateGallery.Params

  export type Result = CreateGallery.Result
}