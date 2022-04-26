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
exports.BadGallerySpy = exports.GallerySpy = void 0;
const HttpHelper_1 = require("../../../src/presentation/helpers/HttpHelper");
const MockGallery_1 = require("../../domain/mocks/MockGallery");
class GallerySpy {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, MockGallery_1.mockFindGalleries)();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, MockGallery_1.mockFindGallery)(id);
        });
    }
    create(gallery) {
        return __awaiter(this, void 0, void 0, function* () {
            this.params = gallery;
            return Object.assign({}, gallery);
        });
    }
}
exports.GallerySpy = GallerySpy;
class BadGallerySpy {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            throw (0, HttpHelper_1.badRequest)(new Error());
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw (0, HttpHelper_1.badRequest)(new Error());
        });
    }
    create(gallery) {
        return __awaiter(this, void 0, void 0, function* () {
            throw (0, HttpHelper_1.badRequest)(new Error());
        });
    }
}
exports.BadGallerySpy = BadGallerySpy;
