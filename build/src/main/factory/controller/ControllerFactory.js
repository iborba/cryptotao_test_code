"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeListAllNFTsController = exports.makeListOneNFTController = exports.makeSaveNFTController = exports.makeListAllGalleriesController = exports.makeListOneGalleryController = exports.makeSaveGalleryController = exports.makeWalletController = void 0;
const controller_1 = require("../../../presentation/controller");
const SaveNFTController_1 = require("../../../presentation/controller/SaveNFTController");
const WalletController_1 = require("../../../presentation/controller/WalletController");
const WalletService_1 = require("../../services/WalletService");
const usecases_1 = require("../usecases");
const makeWalletController = () => {
    return new WalletController_1.WalletController(new WalletService_1.WalletService());
};
exports.makeWalletController = makeWalletController;
const makeSaveGalleryController = () => {
    return new controller_1.SaveGalleryController((0, usecases_1.makeDBGallery)());
};
exports.makeSaveGalleryController = makeSaveGalleryController;
const makeListOneGalleryController = () => {
    return new controller_1.ListGalleryController((0, usecases_1.makeDBGallery)());
};
exports.makeListOneGalleryController = makeListOneGalleryController;
const makeListAllGalleriesController = () => {
    return new controller_1.ListAllGalleriesController((0, usecases_1.makeDBGallery)());
};
exports.makeListAllGalleriesController = makeListAllGalleriesController;
const makeSaveNFTController = () => {
    return new SaveNFTController_1.SaveNFTController((0, usecases_1.makeDBNFT)());
};
exports.makeSaveNFTController = makeSaveNFTController;
const makeListOneNFTController = () => {
    return new controller_1.ListNFTController((0, usecases_1.makeDBNFT)());
};
exports.makeListOneNFTController = makeListOneNFTController;
const makeListAllNFTsController = () => {
    return new controller_1.ListAllNFTsController((0, usecases_1.makeDBNFT)());
};
exports.makeListAllNFTsController = makeListAllNFTsController;
