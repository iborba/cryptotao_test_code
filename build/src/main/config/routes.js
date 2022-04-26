"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const ExpressRouteAdapter_1 = require("../adapters/ExpressRouteAdapter");
const controller_1 = require("../factory/controller");
const headers_1 = require("../middleware/validators/headers");
class Routes {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.routes.get('/', (_, res) => res.status(http_status_codes_1.StatusCodes.OK).send('Hello World!'));
        this.routes.get('/wallet/:address', headers_1.headerValidator, (0, ExpressRouteAdapter_1.adaptRoute)((0, controller_1.makeWalletController)()));
        this.routes.post('/gallery', headers_1.headerValidator, (0, ExpressRouteAdapter_1.adaptRoute)((0, controller_1.makeSaveGalleryController)()));
        this.routes.post('/nft', headers_1.headerValidator, (0, ExpressRouteAdapter_1.adaptRoute)((0, controller_1.makeSaveNFTController)()));
        this.routes.get('/galleries', headers_1.headerValidator, (0, ExpressRouteAdapter_1.adaptRoute)((0, controller_1.makeListAllGalleriesController)()));
        this.routes.get('/gallery/:_id', headers_1.headerValidator, (0, ExpressRouteAdapter_1.adaptRoute)((0, controller_1.makeListOneGalleryController)()));
        this.routes.get('/nfts/:galleryId', headers_1.headerValidator, (0, ExpressRouteAdapter_1.adaptRoute)((0, controller_1.makeListAllNFTsController)()));
        this.routes.get('/nft/:galleryId/:_id', headers_1.headerValidator, (0, ExpressRouteAdapter_1.adaptRoute)((0, controller_1.makeListOneNFTController)()));
    }
}
exports.Routes = Routes;
