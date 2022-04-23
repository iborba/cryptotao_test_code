import { ListGalleryDomainUseCase } from "../../../domain/usecases";
import { noContent } from "../../helpers/HttpHelper";
import { Controller, HttpResponse } from "../../protocols";

export interface IListGalleryController extends Controller {
}

export class BaseListGalleryController implements IListGalleryController {
  constructor(
    protected readonly listGallery: ListGalleryDomainUseCase
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