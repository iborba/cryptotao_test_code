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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoHelper = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongodb_1 = require("mongodb");
exports.MongoHelper = {
    client: null,
    uri: null,
    connect(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            this.uri = uri;
            this.client = yield mongodb_1.MongoClient.connect(uri);
        });
    },
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.close();
        });
    },
    getCollection(name) {
        return this.client.db().collection(name);
    },
    map(data) {
        const { _id } = data, rest = __rest(data, ["_id"]);
        return Object.assign(Object.assign({}, rest), { id: _id.toHexString() });
    },
    mapCollection(collection) {
        return collection.map((c) => exports.MongoHelper.map(c));
    },
};
