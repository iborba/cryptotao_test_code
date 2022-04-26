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
const mongodb_1 = require("mongodb");
const makeNFTAux = () => {
    const spy = new mocks_1.NFTSpy();
    const aux = new controller_1.ListAllNFTsController(spy);
    return { aux, spy };
};
const makeBadNFTAux = () => {
    const spy = new mocks_1.BadNFTSpy();
    const aux = new controller_1.ListAllNFTsController(spy);
    return { aux, spy };
};
const params = {
    _id: new mongodb_1.ObjectId(),
    galleryId: new mongodb_1.ObjectId(),
    nft: {},
};
describe('ListAllNFTsController', () => {
    it('should list all NFTs', () => __awaiter(void 0, void 0, void 0, function* () {
        const { aux } = makeNFTAux();
        const httpResponse = yield aux.handle(params);
        expect(httpResponse.statusCode).toBe(200);
        expect(httpResponse.body).toHaveLength(2);
    }));
    it('should return error', () => __awaiter(void 0, void 0, void 0, function* () {
        const { aux } = makeBadNFTAux();
        const httpResponse = yield aux.handle(params);
        expect(httpResponse.statusCode).toEqual(400);
        expect(httpResponse.body).toEqual(new Error('error listing all NFTs'));
    }));
});
