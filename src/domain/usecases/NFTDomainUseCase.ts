import { NFTModel } from '../models';

export interface NFTDomainUseCase {
  findOne: (galleryId: string, nftId: string) => Promise<NFTDomainUseCase.Result | null>;
  findAll: (galleryId: string) => Promise<NFTDomainUseCase.Result[]>;
  create: (nft: NFTDomainUseCase.Params) => Promise<NFTDomainUseCase.Result | false>;
}

export namespace NFTDomainUseCase {
  export type Params = {
    id: string;
    galleryId: string;
    nft: object;
  };
  export type AddParams = {
    galleryId: string;
    nft: object;
  };
  export type Result = NFTModel;
}
