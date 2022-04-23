import faker from '@faker-js/faker'
import { GalleryModel } from '../../../src/domain/models/GalleryModel'
import { GalleryNFTModel } from '../../../src/domain/models/GalleryNFTModel'
export const mockFindGallery = (): GalleryModel => {
  return {
    id: faker.datatype.uuid(),
    name: faker.random.word(),
    nftId: faker.datatype.uuid(),
    ownerId: faker.datatype.uuid()
  }
}
export const mockFindGalleries = (): GalleryModel[] => [
  mockFindGallery(),
  mockFindGallery()
]

export const mockFindOneNFT = (): GalleryNFTModel => {
  return {
    id: faker.datatype.uuid(),
    galleryId: faker.datatype.uuid(),
    nft: {}
  }
}
export const mockFindAllNFTs = (): GalleryNFTModel[] => [
  mockFindOneNFT(),
  mockFindOneNFT()
]