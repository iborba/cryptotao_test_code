import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class WalletService {
  async getWallet(_: Request, res: Response) {
    return res.status(StatusCodes.OK).json('YOUR WALLET');
  }

  async createWallet(_: Request, res: Response) {
    return res.status(StatusCodes.CREATED).json('WALLET CREATED');
  }

  async addToWallet(_: Request, res: Response) {
    return res.status(StatusCodes.CREATED).json('OBJECT ADDED TO WALLET');
  }
}
