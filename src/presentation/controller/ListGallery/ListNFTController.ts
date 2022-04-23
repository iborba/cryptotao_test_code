import { badRequest, ok } from "../../helpers/HttpHelper";
import { HttpResponse } from "../../protocols";
import { BaseListGalleryController } from "./BaseListGalleryController";
import { IListGalleryController } from "./IListGalleryController";

export class ListNFTController extends BaseListGalleryController implements IListGalleryController {
  async handle(request: BaseListGalleryController.Request): Promise<HttpResponse> {
    try {
      const { id, nftId } = request;
      return ok(this.listGallery.findOneNFT(id, nftId));
    } catch (error) {
      return badRequest(new Error('error'));
    }
  }
}
