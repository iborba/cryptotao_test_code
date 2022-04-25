import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { adaptRoute } from '../adapters/ExpressRouteAdapter';
import {
  makeListAllGalleriesController,
  makeListAllNFTsController,
  makeListOneGalleryController,
  makeListOneNFTController,
  makeSaveGalleryController,
} from '../factory/controller';
import { headerValidator } from '../middleware/validators/headers';
import { WalletService } from '../services/WalletService';

export class Routes {
  routes: Router;

  constructor() {
    this.routes = Router();
    const walletService = new WalletService();

    this.routes.get('/', (_, res) => res.status(StatusCodes.OK).send('Hello World!'));
    this.routes.get('/wallet', headerValidator, walletService.getWallet);
    this.routes.post('/wallet', headerValidator, walletService.createWallet);
    this.routes.post('/gallery', headerValidator, adaptRoute(makeSaveGalleryController()));

    this.routes.get('/gallery', headerValidator, adaptRoute(makeListOneGalleryController()));
    this.routes.get('/galleries', headerValidator, adaptRoute(makeListAllGalleriesController()));
    this.routes.get('/nft', headerValidator, adaptRoute(makeListOneNFTController()));
    this.routes.get('/nfts', headerValidator, adaptRoute(makeListAllNFTsController()));
  }
}
