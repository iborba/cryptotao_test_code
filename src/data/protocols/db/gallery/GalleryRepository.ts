import { ObjectId } from 'mongodb';
import { GalleryDomainUseCase } from '../../../../domain/usecases';

export interface GalleryRepository {
  findOne(id?: ObjectId): Promise<GalleryDomainUseCase.Result | null>;
  findAll(): Promise<GalleryDomainUseCase.Result[]>;
  create(gallery: GalleryRepository.Params): Promise<GalleryRepository.Result | false>;
  delete(id?: ObjectId): Promise<void>;
  update(id: ObjectId, gallery: GalleryRepository.Params): Promise<void>;
}

export namespace GalleryRepository {
  export type Params = GalleryDomainUseCase.Params;
  export type Result = GalleryDomainUseCase.Result;
}
