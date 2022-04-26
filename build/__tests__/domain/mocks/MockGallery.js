"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockAddGallery = exports.mockFindGalleries = exports.mockFindGallery = void 0;
const faker_1 = __importDefault(require("@faker-js/faker"));
const mongodb_1 = require("mongodb");
const mockFindGallery = (id) => {
    return {
        _id: id,
        name: faker_1.default.random.word(),
        ownerId: new mongodb_1.ObjectId(),
    };
};
exports.mockFindGallery = mockFindGallery;
const mockFindGalleries = () => [
    (0, exports.mockFindGallery)(new mongodb_1.ObjectId()),
    (0, exports.mockFindGallery)(new mongodb_1.ObjectId()),
];
exports.mockFindGalleries = mockFindGalleries;
const mockAddGallery = () => ({
    name: faker_1.default.random.word(),
    ownerId: new mongodb_1.ObjectId(),
});
exports.mockAddGallery = mockAddGallery;
