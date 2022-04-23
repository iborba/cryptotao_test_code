import GalleryModel from "../../../../domain/models/GalleryModel"
import { SaveGalleryDomainUseCase } from "../../../../domain/usecases/SaveGalleryDomainUseCase"
import { ListGalleryUseCase } from "../../../../domain/usecases/ListGalleryDomainUseCase"

export interface GalleryRepository {
  findAllNFTs(id: string): Promise<ListGalleryUseCase.NFTResult[]>
  findOneNFT(id: string, nftId: string): Promise<ListGalleryUseCase.NFTResult | undefined>
  findOneGallery(id: string): Promise<GalleryModel | undefined>
  findAllGalleries(): Promise<ListGalleryUseCase.GalleriesResult>
  create: (gallery: SaveGalleryRepository.Params) => Promise<SaveGalleryRepository.Result>
}

export namespace SaveGalleryRepository {
  export type Params = SaveGalleryDomainUseCase.Params

  export type Result = SaveGalleryDomainUseCase.Result
}