import { ListGalleryController } from "../../../presentation/controller/ListGallery/ListGalleryController"
import { ListAllNFTsController } from "../../../presentation/controller/ListGallery/ListAllNFTsController"
import { ListNFTController } from "../../../presentation/controller/ListGallery/ListNFTController"
import { ListAllGalleriesController } from "../../../presentation/controller/ListGallery/ListAllGalleriesController"
import { Controller } from "../../../presentation/protocols/Controller"
import { makeDBListGallery } from "../usecases/ListGallleryFactory"

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