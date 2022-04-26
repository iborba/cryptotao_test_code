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
exports.WalletService = void 0;
const sol_rayz_1 = require("@nfteyez/sol-rayz");
class WalletService {
    getNFTsFromWallet(address) {
        return __awaiter(this, void 0, void 0, function* () {
            let publicAddress = '';
            try {
                publicAddress = yield (0, sol_rayz_1.resolveToWalletAddress)({ text: address });
            }
            catch (error) {
                return [];
            }
            return yield (0, sol_rayz_1.getParsedNftAccountsByOwner)({ publicAddress });
        });
    }
}
exports.WalletService = WalletService;
