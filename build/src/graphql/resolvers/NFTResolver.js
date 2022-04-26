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
const adapters_1 = require("../../main/adapters");
const controller_1 = require("../../main/factory/controller");
exports.default = {
    Query: {
        nft: (parent, args) => __awaiter(void 0, void 0, void 0, function* () { return (0, adapters_1.adaptResolver)((0, controller_1.makeListOneNFTController)(), args); }),
        nfts: (parent, args) => __awaiter(void 0, void 0, void 0, function* () { return (0, adapters_1.adaptResolver)((0, controller_1.makeListAllNFTsController)(), args); }),
    },
    Mutation: {
        createNFT: (parent, args) => __awaiter(void 0, void 0, void 0, function* () { return (0, adapters_1.adaptResolver)((0, controller_1.makeSaveNFTController)(), args); }),
    },
};
