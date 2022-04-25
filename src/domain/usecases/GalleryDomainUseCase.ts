import { GalleryModel } from '../models';
export interface GalleryDomainUseCase {
  findAll: () => Promise<GalleryDomainUseCase.Result[]>;
  findOne: (id: string) => Promise<GalleryDomainUseCase.Result | null>;
  create: (gallery: GalleryDomainUseCase.Params) => Promise<GalleryDomainUseCase.Result | false>;
}

export namespace GalleryDomainUseCase {
  export type Params = {
    id: string;
    name: string;
    nftId: string;
    ownerId: string;
  };

  export type AddParams = {
    name: string;
    nftId: string;
    ownerId: string;
  };
  export type Result = GalleryModel;
}
