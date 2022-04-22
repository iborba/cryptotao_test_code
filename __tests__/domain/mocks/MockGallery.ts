import faker from '@faker-js/faker'
import { GalleryModel } from '../../../src/domain/models/GalleryModel'
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