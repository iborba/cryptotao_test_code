import { badRequest, ok } from "../../helpers/HttpHelper";
import { HttpResponse } from "../../protocols";
import { BaseListGalleryController, IListGalleryController } from "./BaseListGalleryController";

export class ListGalleryController extends BaseListGalleryController implements IListGalleryController {
  async handle(request: BaseListGalleryController.Request): Promise<HttpResponse> {
    try {
      const { id } = request
      return ok(this.listGallery.findOne(id))
    } catch (error) {
      return badRequest(new Error('error listing gallery'))
    }
  }
}
