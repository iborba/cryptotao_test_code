import { WalletService } from '../../main/services/WalletService';
import { badRequest, ok } from '../helpers/HttpHelper';
import { Controller, HttpResponse } from '../protocols';

export class WalletController implements Controller {
  constructor(private readonly walletService: WalletService) { }
  async handle(request: WalletController.Request): Promise<HttpResponse> {
    try {
      const result = await this.walletService.getNFTsFromWallet(request.address);
      return ok(result);
    } catch (error: any) {
      return badRequest(error);
    }
  }
}

export namespace WalletController {
  export type Request = {
    address: string;
  };
}
