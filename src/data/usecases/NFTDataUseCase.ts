import { NFTDomainUseCase } from '../../domain/usecases';
import { NFTRepository } from '../protocols/db/gallery';

export class NFTDataUseCase implements NFTDomainUseCase {
  constructor(private readonly repository: NFTRepository) { }
  findAll(galleryId: string): Promise<NFTDomainUseCase.Result[]> {
    return this.repository.findAll(galleryId);
  }
  findOne(galleryId: string, nftId: string): Promise<NFTDomainUseCase.Result | null> {
    return this.repository.findOne(galleryId, nftId);
  }
  create(nft: NFTDomainUseCase.Params): Promise<NFTDomainUseCase.Result | false> {
    return this.repository.create(nft);
  }
}
