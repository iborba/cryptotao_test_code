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
const mongodb_1 = require("../../../../src/infra/db/mongodb");
const mocks_1 = require("../../../domain/mocks");
const env_1 = __importDefault(require("../../../../src/main/config/env"));
let galleryCollection;
let galleryId;
const mockGallery = () => __awaiter(void 0, void 0, void 0, function* () {
    const gallery = (0, mocks_1.mockAddGallery)();
    const res = yield galleryCollection.insertOne(gallery);
    galleryId = res.insertedId;
});
const mockGalleries = () => __awaiter(void 0, void 0, void 0, function* () {
    const galleries = [(0, mocks_1.mockAddGallery)(), (0, mocks_1.mockAddGallery)()];
    yield galleryCollection.insertMany(galleries);
});
const makeAux = () => {
    return new mongodb_1.MongoGalleryRepository();
};
describe('MongoRepository', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongodb_1.MongoHelper.connect(env_1.default.mongoUrl);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongodb_1.MongoHelper.disconnect();
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        galleryCollection = mongodb_1.MongoHelper.getCollection('galleries');
        yield galleryCollection.deleteMany({});
    }));
    it('should find one gallery', () => __awaiter(void 0, void 0, void 0, function* () {
        yield mockGallery();
        const aux = makeAux();
        if (galleryId) {
            const result = yield aux.findOne(galleryId);
            expect(result).not.toBeNull();
            expect(result === null || result === void 0 ? void 0 : result._id).toEqual(galleryId);
        }
    }));
    it('should find all galleries', () => __awaiter(void 0, void 0, void 0, function* () {
        yield mockGalleries();
        const aux = makeAux();
        const result = yield aux.findAll();
        expect(result).not.toBeUndefined();
        expect(result).toHaveLength(2);
    }));
});
