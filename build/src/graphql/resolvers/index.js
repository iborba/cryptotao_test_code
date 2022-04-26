"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GalleryResolver_1 = __importDefault(require("./GalleryResolver"));
const NFTResolver_1 = __importDefault(require("./NFTResolver"));
exports.default = [GalleryResolver_1.default, NFTResolver_1.default];
