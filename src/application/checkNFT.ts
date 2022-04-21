import { resolveToWalletAddress, getParsedNftAccountsByOwner } from '@nfteyez/sol-rayz';
export class CheckNFT {
  async getNFTArray(addres: string) {
    const publicAddress = await resolveToWalletAddress({ text: addres });
    const nftArray = await getParsedNftAccountsByOwner({ publicAddress });

    return nftArray;
  }
}
