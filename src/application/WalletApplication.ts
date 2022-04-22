import { resolveToWalletAddress, getParsedNftAccountsByOwner } from '@nfteyez/sol-rayz';
export class WalletApplication {
  async connectToWallet(addres: string) {
    try {
      return await resolveToWalletAddress({ text: addres });
    } catch (error) {
      console.log(error);
    }
  }

  async getNFTsFromWallet(publicAddress: string) {
    return await getParsedNftAccountsByOwner({ publicAddress });
  }
}
