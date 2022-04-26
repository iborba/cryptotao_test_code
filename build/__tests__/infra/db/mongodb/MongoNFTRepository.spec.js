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
const mongodb_1 = require("mongodb");
const mongodb_2 = require("../../../../src/infra/db/mongodb");
const mocks_1 = require("../../../domain/mocks");
const env_1 = __importDefault(require("../../../../src/main/config/env"));
let nftCollection;
let galleryId;
let nftId;
const mockNFT = (pGalleryId) => __awaiter(void 0, void 0, void 0, function* () {
    const nft = (0, mocks_1.mockAddNFT)();
    if (pGalleryId) {
        nft.galleryId = pGalleryId;
    }
    const res = yield nftCollection.insertOne(nft);
    nftId = res.insertedId;
    const result = yield nftCollection.findOne({ _id: res.insertedId });
    if (result)
        galleryId = result.galleryId;
});
const mockNFTs = (galleryId) => __awaiter(void 0, void 0, void 0, function* () {
    yield mockNFT(galleryId);
    yield mockNFT(galleryId);
});
const makeAux = () => {
    return new mongodb_2.MongoNFTRepository();
};
describe('MongoNFTRepository', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongodb_2.MongoHelper.connect(env_1.default.mongoUrl);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongodb_2.MongoHelper.disconnect();
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        nftCollection = mongodb_2.MongoHelper.getCollection('nft');
        yield nftCollection.deleteMany({});
    }));
    it('should find one NFT', () => __awaiter(void 0, void 0, void 0, function* () {
        yield mockNFT();
        const aux = makeAux();
        const result = yield aux.findOne(galleryId, nftId);
        expect(result).not.toBeNull();
        expect(result === null || result === void 0 ? void 0 : result._id).toEqual(nftId);
        expect(result === null || result === void 0 ? void 0 : result.galleryId).toEqual(galleryId);
    }));
    it('should find all NFTs', () => __awaiter(void 0, void 0, void 0, function* () {
        yield mockNFTs(new mongodb_1.ObjectId());
        const aux = makeAux();
        const result = yield aux.findAll(galleryId);
        expect(result).not.toBeUndefined();
        expect(result).toHaveLength(2);
    }));
});
