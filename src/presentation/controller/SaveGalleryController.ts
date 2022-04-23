import { SaveGalleryDomainUseCase } from "../../domain/usecases/SaveGalleryDomainUseCase";
import { badRequest, noContent } from "../helpers/HttpHelper";
import { Controller } from "../protocols/Controller";
import { HttpResponse } from "../protocols/Http";

export class SaveGalleryController implements Controller {
  constructor(
    private readonly createGallery: SaveGalleryDomainUseCase
  ) { }
  async handle(request: SaveGalleryController.Request): Promise<HttpResponse> {
    const { name, nftId, ownerId } = request
    if (!name) {
      return badRequest(new Error('Gallery name not informed'))
    }
    if (!nftId) {
      return badRequest(new Error('NFT not informed'))
    }
    if (!ownerId) {
      return badRequest(new Error('Owner not informed'))
    }

    await this.createGallery.create(request)

    return noContent()
  }

}

export namespace SaveGalleryController {
  export type Request = SaveGalleryDomainUseCase.Params
}