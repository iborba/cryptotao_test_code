import { ObjectId } from 'mongodb';
import { NFTDomainUseCase } from '../../../../domain/usecases';

export interface NFTRepository {
  findAll(galleryId?: ObjectId): Promise<NFTDomainUseCase.Result[]>;
  findOne(galleryId?: ObjectId, nftId?: ObjectId): Promise<NFTDomainUseCase.Result | null>;
  create(nft: NFTDomainUseCase.Params): Promise<NFTDomainUseCase.Result | false>;
  delete(galleryId?: ObjectId, nftId?: ObjectId): Promise<void>;
  update(galleryId?: ObjectId, nftId?: ObjectId, nft?: NFTDomainUseCase.Params): Promise<void>;
}
