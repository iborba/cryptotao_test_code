import { NFTDomainUseCase } from '../../domain/usecases';
import { badRequest, noContent } from '../helpers/HttpHelper';
import { Controller, HttpResponse } from '../protocols';

export class SaveNFTController implements Controller {
  constructor(private readonly createNFT: NFTDomainUseCase) { }
  async handle(request: SaveNFTController.Request): Promise<HttpResponse> {
    const { galleryId, nft } = request;
    if (!galleryId) {
      return badRequest(new Error('Gallery Id cannot be null'));
    }
    if (!nft) {
      return badRequest(new Error('NFT cannot be null'));
    }

    await this.createNFT.create(request);

    return noContent();
  }
}

export namespace SaveNFTController {
  export type Request = NFTDomainUseCase.Params;
}
