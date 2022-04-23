import { SaveGalleryDomainUseCase, ListGalleryDomainUseCase } from "../../../../domain/usecases"

export interface GalleryRepository {
  findAllNFTs(id: string): Promise<ListGalleryDomainUseCase.NFTResult[]>
  findOneNFT(id: string, nftId: string): Promise<ListGalleryDomainUseCase.NFTResult | undefined>
  findOneGallery(id: string): Promise<ListGalleryDomainUseCase.GalleryResult | undefined>
  findAllGalleries(): Promise<ListGalleryDomainUseCase.GalleriesResult>
  create: (gallery: SaveGalleryRepository.Params) => Promise<SaveGalleryRepository.Result>
}

export namespace SaveGalleryRepository {
  export type Params = SaveGalleryDomainUseCase.Params

  export type Result = SaveGalleryDomainUseCase.Result
}