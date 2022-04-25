import { GalleryDomainUseCase } from '../../domain/usecases';
import { badRequest, ok } from '../helpers/HttpHelper';
import { Controller, HttpResponse } from '../protocols';

export class ListGalleryController implements Controller {
  constructor(private readonly domain: GalleryDomainUseCase) { }
  async handle(request: GalleryDomainUseCase.Params): Promise<HttpResponse> {
    try {
      const { _id } = request;
      const result = await this.domain.findOne(_id);
      return ok(result);
    } catch (error) {
      return badRequest(new Error('error listing gallery'));
    }
  }
}
