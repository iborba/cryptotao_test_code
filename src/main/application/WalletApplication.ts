import { resolveToWalletAddress, getParsedNftAccountsByOwner } from '@nfteyez/sol-rayz';
export class WalletApplication {
  async connectToWallet(addres: string) {
    try {
      return await resolveToWalletAddress({ text: addres });
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }

      return '';
    }
  }

  async getNFTsFromWallet(publicAddress: string) {
    return await getParsedNftAccountsByOwner({ publicAddress });
  }
}
