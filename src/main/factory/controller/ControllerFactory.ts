import {
  ListAllGalleriesController,
  ListAllNFTsController,
  ListGalleryController,
  ListNFTController,
  SaveGalleryController,
} from '../../../presentation/controller';
import { SaveNFTController } from '../../../presentation/controller/SaveNFTController';
import { WalletController } from '../../../presentation/controller/WalletController';
import { Controller } from '../../../presentation/protocols';
import { WalletService } from '../../services/WalletService';
import { makeDBGallery, makeDBNFT } from '../usecases';

export const makeWalletController = (): Controller => {
  return new WalletController(new WalletService());
};
export const makeSaveGalleryController = (): Controller => {
  return new SaveGalleryController(makeDBGallery());
};
export const makeListOneGalleryController = (): Controller => {
  return new ListGalleryController(makeDBGallery());
};
export const makeListAllGalleriesController = (): Controller => {
  return new ListAllGalleriesController(makeDBGallery());
};
export const makeSaveNFTController = (): Controller => {
  return new SaveNFTController(makeDBNFT());
};
export const makeListOneNFTController = (): Controller => {
  return new ListNFTController(makeDBNFT());
};
export const makeListAllNFTsController = (): Controller => {
  return new ListAllNFTsController(makeDBNFT());
};
