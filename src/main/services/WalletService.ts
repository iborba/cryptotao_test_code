import { resolveToWalletAddress, getParsedNftAccountsByOwner } from '@nfteyez/sol-rayz';
export class WalletService {
  async getNFTsFromWallet(address: string) {
    let publicAddress = '';
    try {
      publicAddress = await resolveToWalletAddress({ text: address });
    } catch (error) {
      return [];
    }

    return await getParsedNftAccountsByOwner({ publicAddress });
  }
}
