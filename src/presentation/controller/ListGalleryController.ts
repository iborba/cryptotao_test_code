import { ListGallery } from "../../domain/usecases/ListGallery";
import { badRequest, noContent, ok } from "../helpers/HttpHelper";
import { Controller } from "../protocols/Controller";
import { HttpResponse } from "../protocols/Http";

export class ListGalleryController implements Controller {
  constructor(
    private readonly listGallery: ListGallery
  ) { }
  async handle(params: ListGalleryController.Request): Promise<HttpResponse> {
    let result: any
    if (params.type === 'findAll') {
      result = await this.handleFindAll()
    } else if (params.type === 'findOne') {
      result = await this.handleFindOne(params.id)
    } else if (params.type === 'findOneNFT') {
      result = await this.handleFindOneNFT(params.id, params.nftId)
    } else if (params.type === 'findAllNFTs') {
      result = await this.handleFindAllNFTs(params.id)
    }

    return result || noContent()
  }

  private async handleFindAll(): Promise<HttpResponse> {
    try {
      return ok(this.listGallery.findAll())
    } catch (error) {
      return badRequest(new Error('error'))
    }
  }

  private async handleFindOne(id: string): Promise<HttpResponse> {
    try {
      return ok(this.listGallery.findOne(id))
    } catch (error) {
      return badRequest(new Error('error'))
    }
  }

  private async handleFindOneNFT(id: string, nftId: string): Promise<HttpResponse> {
    try {
      return ok(this.listGallery.findOneNFT(id, nftId))
    } catch (error) {
      return badRequest(new Error('error'))
    }
  }

  private async handleFindAllNFTs(id: string): Promise<HttpResponse> {
    try {
      return ok(this.listGallery.findAllNFTs(id))
    } catch (error) {
      return badRequest(new Error('error'))
    }
  }

}

export namespace ListGalleryController {
  type Params = {
    id: string,
    nftId: string
    type: string
  }
  export type Request = Params
}