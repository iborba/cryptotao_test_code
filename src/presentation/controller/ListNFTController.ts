import { NFTDomainUseCase } from '../../domain/usecases';
import { badRequest, ok } from '../helpers/HttpHelper';
import { Controller, HttpResponse } from '../protocols';

export class ListNFTController implements Controller {
  constructor(private readonly domain: NFTDomainUseCase) { }
  async handle(request: NFTDomainUseCase.Params): Promise<HttpResponse> {
    try {
      const { galleryId, id } = request;
      return ok(this.domain.findOne(galleryId, id));
    } catch (error) {
      return badRequest(new Error('error'));
    }
  }
}
