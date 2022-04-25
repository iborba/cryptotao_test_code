import { GalleryDomainUseCase } from '../../domain/usecases';
import { badRequest, ok } from '../helpers/HttpHelper';
import { Controller, HttpResponse } from '../protocols';

export class ListAllGalleriesController implements Controller {
  constructor(private readonly domain: GalleryDomainUseCase) { }
  async handle(): Promise<HttpResponse> {
    try {
      const result = await this.domain.findAll();
      return ok(result);
    } catch (error) {
      return badRequest(new Error('error listing all galleries'));
    }
  }
}
