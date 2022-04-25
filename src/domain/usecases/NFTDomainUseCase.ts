import { ObjectId } from 'mongodb';
import { NFTModel } from '../models';

export interface NFTDomainUseCase {
  findOne: (galleryId: ObjectId, nftId?: ObjectId) => Promise<NFTDomainUseCase.Result | null>;
  findAll: (galleryId: ObjectId) => Promise<NFTDomainUseCase.Result[]>;
  create: (nft: NFTDomainUseCase.Params) => Promise<NFTDomainUseCase.Result | false>;
}

export namespace NFTDomainUseCase {
  export type Params = {
    _id?: ObjectId;
    galleryId?: ObjectId;
    nft: object;
  };
  export type AddParams = {
    galleryId?: ObjectId;
    nft: object;
  };
  export type Result = NFTModel;
}
