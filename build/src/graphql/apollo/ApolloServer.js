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
exports.setupApolloServer = void 0;
const TypeDefs_1 = __importDefault(require("../apollo/TypeDefs"));
const resolvers_1 = __importDefault(require("../resolvers"));
const schema_1 = require("@graphql-tools/schema");
const apollo_server_express_1 = require("apollo-server-express");
const handleErrors = (response, errors) => {
    errors === null || errors === void 0 ? void 0 : errors.forEach((error) => {
        response.data = undefined;
        if (checkError(error, 'UserInputError')) {
            response.http.status = 400;
        }
        else if (checkError(error, 'AuthenticationError')) {
            response.http.status = 401;
        }
        else if (checkError(error, 'ForbiddenError')) {
            response.http.status = 403;
        }
        else {
            response.http.status = 500;
        }
    });
};
const checkError = (error, errorName) => {
    var _a;
    return [error.name, (_a = error.originalError) === null || _a === void 0 ? void 0 : _a.name].some((name) => name === errorName);
};
const schema = (0, schema_1.makeExecutableSchema)({ resolvers: resolvers_1.default, typeDefs: TypeDefs_1.default });
const setupApolloServer = () => new apollo_server_express_1.ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
    plugins: [
        {
            requestDidStart: () => __awaiter(void 0, void 0, void 0, function* () {
                return ({
                    willSendResponse: ({ response, errors }) => __awaiter(void 0, void 0, void 0, function* () { return handleErrors(response, errors); }),
                });
            }),
        },
    ],
});
exports.setupApolloServer = setupApolloServer;
