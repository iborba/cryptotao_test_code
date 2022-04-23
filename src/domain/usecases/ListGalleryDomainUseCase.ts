import { GalleryModel } from '../models/GalleryModel'
export interface ListGalleryUseCase {
  findAll: () => Promise<ListGalleryUseCase.GalleriesResult>
  findOne: (id: string) => Promise<ListGalleryUseCase.GalleryResult | undefined>
  findOneNFT: (id: string, nftId: string) => Promise<ListGalleryUseCase.NFTResult | undefined>
  findAllNFTs: (id: string) => Promise<ListGalleryUseCase.NFTResult[]>
}

export namespace ListGalleryUseCase {

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