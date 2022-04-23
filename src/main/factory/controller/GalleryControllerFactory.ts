import { ListAllGalleriesController, ListAllNFTsController, ListGalleryController, ListNFTController, SaveGalleryController } from "../../../presentation/controller"
import { Controller } from "../../../presentation/protocols"
import { makeDBListGallery, makeDBSaveGallery } from "../usecases"

export const makeSaveGalleryController = (): Controller => {
  return new SaveGalleryController(makeDBSaveGallery())
}
export const makeListGalleryController = (routeName: string): Controller => {
  if (routeName === 'galleries') {
    return new ListAllGalleriesController(makeDBListGallery())
  } else if (routeName === 'gallery') {
    return new ListGalleryController(makeDBListGallery())
  } else if (routeName === 'nfts') {
    return new ListAllNFTsController(makeDBListGallery())
  } else {
    return new ListNFTController(makeDBListGallery())
  }
}