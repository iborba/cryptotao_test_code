import faker from '@faker-js/faker'
import { GalleryModel, GalleryNFTModel } from '../../../src/domain/models'
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