import { ListGalleryUseCase } from "../../../domain/usecases/ListGalleryDomainUseCase";
import { noContent } from "../../helpers/HttpHelper";
import { HttpResponse } from "../../protocols/Http";
import { IListGalleryController } from "./IListGalleryController";

export class BaseListGalleryController implements IListGalleryController {
  constructor(
    protected readonly listGallery: ListGalleryUseCase
  ) { }

  async handle(request: BaseListGalleryController.Request): Promise<HttpResponse> {
    return noContent();
  }
}
export namespace BaseListGalleryController {
  type Params = {
    id: string,
    nftId: string
  }
  export type Request = Params
}