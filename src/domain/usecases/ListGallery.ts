import { GalleryModel } from '../models/GalleryModel'
export interface ListGallery {
  findAll: () => Promise<ListGallery.GalleryResult>
  findOne: (id: string) => Promise<ListGallery.GalleryResult>
  findOneNFT: (id: string, nftId: string) => Promise<ListGallery.NFTResult>
  findAllNFTs: (id: string) => Promise<ListGallery.NFTResult>
}

export namespace ListGallery {

  export type Params = {
    id: string,
    nftId: string
    type: string
  }
  export type GalleryResult = GalleryModel[]

  export type NFTResult = {
    id: string,
    name: string,
    ownerId: string,
    nft: object
  }

}