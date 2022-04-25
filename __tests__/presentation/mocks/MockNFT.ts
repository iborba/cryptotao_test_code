import { GalleryDomainUseCase, NFTDomainUseCase } from '../../../src/domain/usecases';
import { mockFindAllNFTs, mockFindOneNFT } from '../../domain/mocks/MockGallery';

export class NFTSpy implements NFTDomainUseCase {
  params: GalleryDomainUseCase.Params | undefined;
  async findOneNFT(id: string, nftId: string): Promise<NFTDomainUseCase.Result> {
    return mockFindOneNFT();
  }
  async findAllNFTs(id: string): Promise<NFTDomainUseCase.Result[]> {
    return mockFindAllNFTs();
  }

  async create(nft: NFTDomainUseCase.Params): Promise<NFTDomainUseCase.Result> { }
}
