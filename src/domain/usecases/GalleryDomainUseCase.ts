import { ObjectId } from 'mongodb';
import { GalleryModel } from '../models';
export interface GalleryDomainUseCase {
  findAll: () => Promise<GalleryDomainUseCase.Result[]>;
  findOne: (id?: ObjectId) => Promise<GalleryDomainUseCase.Result | null>;
  create: (gallery: GalleryDomainUseCase.Params) => Promise<GalleryDomainUseCase.Result | false>;
}

export namespace GalleryDomainUseCase {
  export type Params = {
    _id: ObjectId | undefined;
    name: string;
    ownerId: ObjectId | undefined;
  };

  export type AddParams = {
    name: string;
    ownerId: ObjectId | undefined;
  };
  export type Result = GalleryModel;
}
