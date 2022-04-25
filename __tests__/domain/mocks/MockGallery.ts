import faker from '@faker-js/faker';
import { GalleryModel } from '../../../src/domain/models';
import { GalleryDomainUseCase } from '../../../src/domain/usecases';
export const mockFindGallery = (id: string): GalleryModel => {
  return {
    id: id,
    name: faker.random.word(),
    nftId: faker.datatype.uuid(),
    ownerId: faker.datatype.uuid(),
  };
};
export const mockFindGalleries = (): GalleryModel[] => [
  mockFindGallery(faker.datatype.uuid()),
  mockFindGallery(faker.datatype.uuid()),
];

export const mockAddGallery = (): GalleryDomainUseCase.AddParams => ({
  name: faker.random.word(),
  nftId: faker.datatype.uuid(),
  ownerId: faker.datatype.uuid(),
});
