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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("@faker-js/faker"));
const mongodb_1 = require("mongodb");
const controller_1 = require("../../../src/presentation/controller");
const mocks_1 = require("../mocks");
const makeGalleryAux = () => {
    const spy = new mocks_1.GallerySpy();
    const aux = new controller_1.ListGalleryController(spy);
    return { aux, spy };
};
const makeBadGalleryAux = () => {
    const spy = new mocks_1.BadGallerySpy();
    const aux = new controller_1.ListGalleryController(spy);
    return { aux, spy };
};
const params = {
    _id: new mongodb_1.ObjectId(),
    name: faker_1.default.random.word(),
    ownerId: new mongodb_1.ObjectId(),
};
describe('ListGalleryController', () => {
    it('should list a galery', () => __awaiter(void 0, void 0, void 0, function* () {
        const { aux } = makeGalleryAux();
        const httpResponse = yield aux.handle(params);
        expect(httpResponse.statusCode).toBe(200);
        expect(httpResponse.body).toHaveProperty('_id');
        expect(httpResponse.body._id).toEqual(params._id);
    }));
    it('should return error', () => __awaiter(void 0, void 0, void 0, function* () {
        const { aux } = makeBadGalleryAux();
        const httpResponse = yield aux.handle(params);
        expect(httpResponse.statusCode).toEqual(400);
        expect(httpResponse.body).toEqual(new Error('error listing gallery'));
    }));
});
