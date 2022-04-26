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
const WalletService_1 = require("../../../src/main/services/WalletService");
describe('WalletService', () => {
    const address = '4FAExmztfa3SDKoquvEjB5puUsbSasZ5m2Asksegfr9K';
    const wallet = new WalletService_1.WalletService();
    it('should get all elements in a wallet', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield wallet.getNFTsFromWallet(address);
        expect(result).not.toBeUndefined();
        expect(Array.isArray(result)).toBe(true);
        expect(result[0]).toHaveProperty('key');
    }));
});
