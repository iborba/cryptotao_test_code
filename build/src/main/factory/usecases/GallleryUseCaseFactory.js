"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDBNFT = exports.makeDBGallery = void 0;
const GalleryDataUseCase_1 = require("../../../data/usecases/GalleryDataUseCase");
const NFTDataUseCase_1 = require("../../../data/usecases/NFTDataUseCase");
const mongodb_1 = require("../../../infra/db/mongodb");
const MongoGalleryRepository_1 = require("../../../infra/db/mongodb/MongoGalleryRepository");
const makeDBGallery = () => {
    const galleryMongoRepository = new MongoGalleryRepository_1.MongoGalleryRepository();
    return new GalleryDataUseCase_1.GalleryDataUseCase(galleryMongoRepository);
};
exports.makeDBGallery = makeDBGallery;
const makeDBNFT = () => {
    const nftMongoRepository = new mongodb_1.MongoNFTRepository();
    return new NFTDataUseCase_1.NFTDataUseCase(nftMongoRepository);
};
exports.makeDBNFT = makeDBNFT;
