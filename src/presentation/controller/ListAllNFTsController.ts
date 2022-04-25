import { NFTDomainUseCase } from '../../domain/usecases';
import { badRequest, ok } from '../helpers/HttpHelper';
import { Controller, HttpResponse } from '../protocols';

export class ListAllNFTsController implements Controller {
  constructor(private readonly domain: NFTDomainUseCase) { }
  async handle(request: NFTDomainUseCase.Params): Promise<HttpResponse> {
    try {
      const { galleryId } = request;
      return ok(this.domain.findAll(galleryId));
    } catch (error) {
      return badRequest(new Error('error listing all nfts'));
    }
  }
}
