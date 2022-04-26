"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadNFTSpy = exports.NFTSpy = void 0;
const HttpHelper_1 = require("../../../src/presentation/helpers/HttpHelper");
const mocks_1 = require("../../domain/mocks");
class NFTSpy {
    findOne(galleryId, nftId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, mocks_1.mockFindOneNFT)(galleryId, nftId);
        });
    }
    findAll(galleryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, mocks_1.mockFindAllNFTs)(galleryId);
        });
    }
    create(nft) {
        return __awaiter(this, void 0, void 0, function* () {
            this.params = nft;
            return Object.assign({ _id: this.params._id }, nft);
        });
    }
}
exports.NFTSpy = NFTSpy;
class BadNFTSpy {
    findOne(galleryId, nftId) {
        return __awaiter(this, void 0, void 0, function* () {
            throw (0, HttpHelper_1.badRequest)(new Error());
        });
    }
    findAll(galleryId) {
        return __awaiter(this, void 0, void 0, function* () {
            throw (0, HttpHelper_1.badRequest)(new Error());
        });
    }
    create(nft) {
        return __awaiter(this, void 0, void 0, function* () {
            throw (0, HttpHelper_1.badRequest)(new Error());
        });
    }
}
exports.BadNFTSpy = BadNFTSpy;
