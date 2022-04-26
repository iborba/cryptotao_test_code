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
exports.MongoGalleryRepository = void 0;
const mongodb_1 = require("mongodb");
const MongoHelper_1 = require("./MongoHelper");
class MongoGalleryRepository {
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = MongoHelper_1.MongoHelper.getCollection('galleries');
            const data = yield collection.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (data) {
                data._id = id;
            }
            return data;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = MongoHelper_1.MongoHelper.getCollection('galleries');
            return yield collection.find({}).toArray();
        });
    }
    create(gallery) {
        return __awaiter(this, void 0, void 0, function* () {
            const galleryCollection = MongoHelper_1.MongoHelper.getCollection('galleries');
            const result = yield galleryCollection.insertOne(gallery);
            if (result.insertedId) {
                gallery._id = result.insertedId;
                return Object.assign({}, gallery);
            }
            return false;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = MongoHelper_1.MongoHelper.getCollection('galleries');
            yield collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
        });
    }
    update(id, gallery) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = MongoHelper_1.MongoHelper.getCollection('galleries');
            yield collection.updateOne({ _id: new mongodb_1.ObjectId(id) }, gallery);
        });
    }
}
exports.MongoGalleryRepository = MongoGalleryRepository;
