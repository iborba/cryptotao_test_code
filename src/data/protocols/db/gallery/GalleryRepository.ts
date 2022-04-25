import { GalleryDomainUseCase } from '../../../../domain/usecases';

export interface GalleryRepository {
  findOne(id: string): Promise<GalleryDomainUseCase.Result | null>;
  findAll(): Promise<GalleryDomainUseCase.Result[]>;
  create(gallery: GalleryRepository.Params): Promise<GalleryRepository.Result | false>;
  delete(id: string): Promise<void>;
  update(id: string, gallery: GalleryRepository.Params): Promise<void>;
}

export namespace GalleryRepository {
  export type Params = GalleryDomainUseCase.Params;
  export type Result = GalleryDomainUseCase.Result;
}
