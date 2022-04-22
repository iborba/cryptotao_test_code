import { SaveGalleryController } from "../../../presentation/controller/SaveGalleryController"
import { Controller } from "../../../presentation/protocols/Controller"
import { makeDBSaveGallery } from "../usecases/SaveGallleryFactory"

export const makeSaveGalleryController = (): Controller => {
  const controller = new SaveGalleryController(makeDBSaveGallery())
  return controller

}