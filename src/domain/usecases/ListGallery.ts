import { GalleryModel } from '../models/GalleryModel'
export interface ListGallery {
  findAll: () => Promise<ListGallery.GalleriesResult>
  findOne: (id: string) => Promise<ListGallery.GalleryResult>
  findOneNFT: (id: string, nftId: string) => Promise<ListGallery.NFTResult>
  findAllNFTs: (id: string) => Promise<ListGallery.NFTResult[]>
}

export namespace ListGallery {

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