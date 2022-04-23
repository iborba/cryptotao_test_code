import { badRequest, ok } from "../../helpers/HttpHelper";
import { HttpResponse } from "../../protocols";
import { BaseListGalleryController } from "./BaseListGalleryController";
import { IListGalleryController } from "./IListGalleryController";

export class ListAllNFTsController extends BaseListGalleryController implements IListGalleryController {

  async handle(request: BaseListGalleryController.Request): Promise<HttpResponse> {
    try {
      return ok(this.listGallery.findAll());
    } catch (error) {
      return badRequest(new Error('error'));
    }
  }
}
