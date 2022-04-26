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
const faker_1 = require("@faker-js/faker");
const HttpHelper_1 = require("../../../src/presentation/helpers/HttpHelper");
const mocks_1 = require("../mocks");
const mongodb_1 = require("mongodb");
const mockRequest = () => ({
    _id: new mongodb_1.ObjectId(),
    name: faker_1.faker.random.word(),
    ownerId: new mongodb_1.ObjectId(),
});
const makeGalleryAux = () => {
    const gallerySpy = new mocks_1.GallerySpy();
    const aux = new controller_1.SaveGalleryController(gallerySpy);
    return {
        aux,
        gallerySpy,
    };
};
describe('SaveGalleryController', () => {
    describe('How to handle with gallery creation', () => {
        it('Should create a new gallery', () => __awaiter(void 0, void 0, void 0, function* () {
            const { aux } = makeGalleryAux();
            const httpResponse = yield aux.handle(mockRequest());
            expect(httpResponse).toEqual((0, HttpHelper_1.noContent)());
        }));
        it('Should not create a gallery if name not informed', () => __awaiter(void 0, void 0, void 0, function* () {
            const { aux } = makeGalleryAux();
            const data = mockRequest();
            data.name = '';
            const httpResponse = yield aux.handle(data);
            expect(httpResponse).toEqual((0, HttpHelper_1.badRequest)(new Error('Gallery name not informed')));
        }));
        it('Should not create a gallery if ownerId not informed', () => __awaiter(void 0, void 0, void 0, function* () {
            const { aux } = makeGalleryAux();
            const data = mockRequest();
            data.ownerId = undefined;
            const httpResponse = yield aux.handle(data);
            expect(httpResponse).toEqual((0, HttpHelper_1.badRequest)(new Error('Owner not informed')));
        }));
    });
});
