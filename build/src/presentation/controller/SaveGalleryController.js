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
exports.SaveGalleryController = void 0;
const HttpHelper_1 = require("../helpers/HttpHelper");
class SaveGalleryController {
    constructor(createGallery) {
        this.createGallery = createGallery;
    }
    handle(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, ownerId } = request;
            if (!name) {
                return (0, HttpHelper_1.badRequest)(new Error('Gallery name not informed'));
            }
            if (!ownerId) {
                return (0, HttpHelper_1.badRequest)(new Error('Owner not informed'));
            }
            yield this.createGallery.create(request);
            return (0, HttpHelper_1.noContent)();
        });
    }
}
exports.SaveGalleryController = SaveGalleryController;
