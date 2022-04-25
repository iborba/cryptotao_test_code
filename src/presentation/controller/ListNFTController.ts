import { NFTDomainUseCase } from '../../domain/usecases';
import { badRequest, ok } from '../helpers/HttpHelper';
import { Controller, HttpResponse } from '../protocols';

export class ListNFTController implements Controller {
  constructor(private readonly domain: NFTDomainUseCase) { }
  async handle(request: NFTDomainUseCase.Params): Promise<HttpResponse> {
    try {
      const { galleryId, _id } = request;

      if (!galleryId) {
        return badRequest(new Error('Gallery Id not found'));
      }

      const result = await this.domain.findOne(galleryId, _id);
      return ok(result);
    } catch (error) {
      return badRequest(new Error('error listing NFT'));
    }
  }
}
