import { badRequest, ok } from "../../helpers/HttpHelper";
import { HttpResponse } from "../../protocols";
import { BaseListGalleryController, IListGalleryController } from "./BaseListGalleryController";

export class ListAllGalleriesController extends BaseListGalleryController implements IListGalleryController {
  async handle(request: any, type?: object | undefined): Promise<HttpResponse> {
    try {
      const result = await this.listGallery.findAll();
      return ok(result);
    } catch (error) {
      return badRequest(new Error('error listing all galleries'));
    }
  }
}
