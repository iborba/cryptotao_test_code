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
const controller_1 = require("../../../src/presentation/controller");
const mocks_1 = require("../mocks");
const makeGalleryAux = () => {
    const spy = new mocks_1.GallerySpy();
    const aux = new controller_1.ListAllGalleriesController(spy);
    return { aux, spy };
};
const makeBadGalleryAux = () => {
    const spy = new mocks_1.BadGallerySpy();
    const aux = new controller_1.ListAllGalleriesController(spy);
    return { aux, spy };
};
describe('ListAllGalleriesController', () => {
    it('should list all galeries', () => __awaiter(void 0, void 0, void 0, function* () {
        const { aux } = makeGalleryAux();
        const httpResponse = yield aux.handle();
        expect(httpResponse.statusCode).toBe(200);
        expect(httpResponse.body).toHaveLength(2);
    }));
    it('should return error', () => __awaiter(void 0, void 0, void 0, function* () {
        const { aux } = makeBadGalleryAux();
        const httpResponse = yield aux.handle();
        expect(httpResponse.statusCode).toEqual(400);
        expect(httpResponse.body).toEqual(new Error('error listing all galleries'));
    }));
});
