import {
  ListAllGalleriesController,
  ListAllNFTsController,
  ListGalleryController,
  ListNFTController,
  SaveGalleryController,
} from '../../../presentation/controller';
import { Controller } from '../../../presentation/protocols';
import { makeDBGallery, makeDBNFT } from '../usecases';

export const makeSaveGalleryController = (): Controller => {
  return new SaveGalleryController(makeDBGallery());
};
export const makeListOneGalleryController = (): Controller => {
  return new ListGalleryController(makeDBGallery());
};
export const makeListAllGalleriesController = (): Controller => {
  return new ListAllGalleriesController(makeDBGallery());
};
export const makeListOneNFTController = (): Controller => {
  return new ListNFTController(makeDBNFT());
};
export const makeListAllNFTsController = (): Controller => {
  return new ListAllNFTsController(makeDBNFT());
};
