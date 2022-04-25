import faker from '@faker-js/faker';
import { ObjectId } from 'mongodb';
import { GalleryModel } from '../../../src/domain/models';
import { GalleryDomainUseCase } from '../../../src/domain/usecases';
export const mockFindGallery = (id?: ObjectId): GalleryModel => {
  return {
    _id: id,
    name: faker.random.word(),
    ownerId: new ObjectId(),
  };
};
export const mockFindGalleries = (): GalleryModel[] => [
  mockFindGallery(new ObjectId()),
  mockFindGallery(new ObjectId()),
];

export const mockAddGallery = (): GalleryDomainUseCase.AddParams => ({
  name: faker.random.word(),
  ownerId: new ObjectId(),
});
