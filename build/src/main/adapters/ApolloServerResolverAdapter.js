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
exports.adaptResolver = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const adaptResolver = (controller, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const request = Object.assign({}, (args || {}));
    const httpResponse = yield controller.handle(request);
    switch (httpResponse.statusCode) {
        case 200:
        case 204:
            return httpResponse.body;
        case 400:
            throw new apollo_server_express_1.UserInputError(httpResponse.body.message);
        case 401:
            throw new apollo_server_express_1.AuthenticationError(httpResponse.body.message);
        case 403:
            throw new apollo_server_express_1.ForbiddenError(httpResponse.body.message);
        default:
            throw new apollo_server_express_1.ApolloError(httpResponse.body.message);
    }
});
exports.adaptResolver = adaptResolver;
