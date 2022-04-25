import { NFTDomainUseCase } from '../../../src/domain/usecases';
import { badRequest } from '../../../src/presentation/helpers/HttpHelper';
import { mockFindAllNFTs, mockFindOneNFT } from '../../domain/mocks';

export class NFTSpy implements NFTDomainUseCase {
  params: NFTDomainUseCase.Params | undefined;
  async findOne(galleryId: string, nftId: string): Promise<NFTDomainUseCase.Result> {
    return mockFindOneNFT(galleryId, nftId);
  }
  async findAll(galleryId: string): Promise<NFTDomainUseCase.Result[]> {
    return mockFindAllNFTs(galleryId);
  }

  async create(nft: NFTDomainUseCase.Params): Promise<NFTDomainUseCase.Result> {
    this.params = nft;
    return {
      _id: this.params.id,
      ...nft,
    };
  }
}

export class BadNFTSpy implements NFTDomainUseCase {
  params: NFTDomainUseCase.Params | undefined;
  async findOne(id: string, nftId: string): Promise<NFTDomainUseCase.Result> {
    throw badRequest(new Error());
  }
  async findAll(id: string): Promise<NFTDomainUseCase.Result[]> {
    throw badRequest(new Error());
  }

  async create(nft: NFTDomainUseCase.Params): Promise<NFTDomainUseCase.Result> {
    throw badRequest(new Error());
  }
}
