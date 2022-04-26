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
exports.MongoNFTRepository = void 0;
const mongodb_1 = require("mongodb");
const MongoHelper_1 = require("./MongoHelper");
class MongoNFTRepository {
    findOne(id, nftId) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = MongoHelper_1.MongoHelper.getCollection('nft');
            const data = yield collection.findOne({ _id: new mongodb_1.ObjectId(nftId), galleryId: id });
            if (data) {
                data._id = nftId;
            }
            return data;
        });
    }
    findAll(galleryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = MongoHelper_1.MongoHelper.getCollection('nft');
            return yield collection.find({ galleryId }).toArray();
        });
    }
    create(nft) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = MongoHelper_1.MongoHelper.getCollection('nft');
            const result = yield collection.insertOne(nft);
            if (result.insertedId) {
                return Object.assign({ _id: result.insertedId }, nft);
            }
            return false;
        });
    }
    delete(galleryId, nftId) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = MongoHelper_1.MongoHelper.getCollection('nft');
            yield collection.deleteOne({ _id: new mongodb_1.ObjectId(nftId) });
        });
    }
    update(galleryId, nftId, nft) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = MongoHelper_1.MongoHelper.getCollection('nft');
            yield collection.updateOne({ _id: new mongodb_1.ObjectId(nftId), galleryId }, nft);
        });
    }
}
exports.MongoNFTRepository = MongoNFTRepository;
