import { ObjectId } from 'mongodb';
import { GalleryDomainUseCase } from '../../../src/domain/usecases';
import { badRequest } from '../../../src/presentation/helpers/HttpHelper';
import { mockFindGalleries, mockFindGallery } from '../../domain/mocks/MockGallery';

export class GallerySpy implements GalleryDomainUseCase {
  params: GalleryDomainUseCase.Params | undefined;
  async findAll(): Promise<GalleryDomainUseCase.Result[]> {
    return mockFindGalleries();
  }
  async findOne(id?: ObjectId): Promise<GalleryDomainUseCase.Result> {
    return mockFindGallery(id);
  }
  async create(gallery: GalleryDomainUseCase.Params): Promise<GalleryDomainUseCase.Result | false> {
    this.params = gallery;
    return {
      ...gallery,
    };
  }
}
export class BadGallerySpy implements GalleryDomainUseCase {
  params: GalleryDomainUseCase.Params | undefined;
  async findAll(): Promise<GalleryDomainUseCase.Result[]> {
    throw badRequest(new Error());
  }
  async findOne(id?: ObjectId): Promise<GalleryDomainUseCase.Result> {
    throw badRequest(new Error());
  }
  async create(gallery: GalleryDomainUseCase.Params): Promise<GalleryDomainUseCase.Result | false> {
    throw badRequest(new Error());
  }
}
