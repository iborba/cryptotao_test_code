import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { adaptRoute } from '../adapters/ExpressRouteAdapter';
import {
  makeListAllGalleriesController,
  makeListAllNFTsController,
  makeListOneGalleryController,
  makeListOneNFTController,
  makeSaveGalleryController,
  makeSaveNFTController,
  makeWalletController,
} from '../factory/controller';
import { headerValidator } from '../middleware/validators/headers';

export class Routes {
  routes: Router;

  constructor() {
    this.routes = Router();
    this.routes.get('/', (_, res) => res.status(StatusCodes.OK).send('Hello World!'));
    this.routes.get('/wallet/:address', headerValidator, adaptRoute(makeWalletController()));

    this.routes.post('/gallery', headerValidator, adaptRoute(makeSaveGalleryController()));
    this.routes.post('/nft', headerValidator, adaptRoute(makeSaveNFTController()));

    this.routes.get('/galleries', headerValidator, adaptRoute(makeListAllGalleriesController()));
    this.routes.get('/gallery/:id', headerValidator, adaptRoute(makeListOneGalleryController()));
    this.routes.get('/nfts/:galleryId', headerValidator, adaptRoute(makeListAllNFTsController()));
    this.routes.get('/nft/:galleryId/:id', headerValidator, adaptRoute(makeListOneNFTController()));
  }
}
