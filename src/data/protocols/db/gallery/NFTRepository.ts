import { NFTDomainUseCase } from '../../../../domain/usecases';

export interface NFTRepository {
  findAll(galleryId: string): Promise<NFTDomainUseCase.Result[]>;
  findOne(galleryId: string, nftId: string): Promise<NFTDomainUseCase.Result | null>;
  create(nft: NFTDomainUseCase.Params): Promise<NFTDomainUseCase.Result | false>;
  delete(galleryId: string, nftId: string): Promise<void>;
  update(galleryId: string, nftId: string, nft: NFTDomainUseCase.Params): Promise<void>;
}
