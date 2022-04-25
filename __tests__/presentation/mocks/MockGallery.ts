import faker from '@faker-js/faker';
import { GalleryModel } from '../../../src/domain/models';
import { GalleryDomainUseCase } from '../../../src/domain/usecases';
import { mockFindAllNFTs, mockFindGalleries, mockFindGallery, mockFindOneNFT } from '../../domain/mocks/MockGallery';

export class GallerySpy implements GalleryDomainUseCase {
  params: GalleryDomainUseCase.Params | undefined;
  async findAll(): Promise<GalleryDomainUseCase.Result[]> {
    return mockFindGalleries();
  }
  async findOne(id: string): Promise<GalleryDomainUseCase.Result> {
    return mockFindGallery();
  }
  async create(gallery: GalleryDomainUseCase.Params): Promise<GalleryDomainUseCase.Result | null> {
    this.params = gallery;
    return {
      id: faker.datatype.uuid(),
      ...gallery,
    };
  }
}
