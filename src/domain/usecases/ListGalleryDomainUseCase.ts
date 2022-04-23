import { GalleryModel } from '../models'
export interface ListGalleryDomainUseCase {
  findAll: () => Promise<ListGalleryDomainUseCase.GalleriesResult>
  findOne: (id: string) => Promise<ListGalleryDomainUseCase.GalleryResult | undefined>
  findOneNFT: (id: string, nftId: string) => Promise<ListGalleryDomainUseCase.NFTResult | undefined>
  findAllNFTs: (id: string) => Promise<ListGalleryDomainUseCase.NFTResult[]>
}

export namespace ListGalleryDomainUseCase {
  export type Params = {
    id: string,
    nftId: string
    type: string
  }
  export type GalleryResult = GalleryModel
  export type GalleriesResult = GalleryModel[]

  export type NFTResult = {
    id: string,
    galleryId: string,
    nft: object
  }
}