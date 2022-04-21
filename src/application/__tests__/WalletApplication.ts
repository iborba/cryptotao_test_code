import { WalletApplication } from '../WalletApplication';

describe('how to create a gallery of NFTS held in a particular wallet', () => {
  const address = '4FAExmztfa3SDKoquvEjB5puUsbSasZ5m2Asksegfr9K';

  it('should connect to a wallet', async () => {
    const wallet = new WalletApplication();
    const result = await wallet.connectToWallet(address);

    expect(result).not.toBeNull();
    expect(result[0]).toHaveProperty('key');
  });

  it('should create a personal gallery', () => { });

  it('should copy all elements in the wallet to the gallery', () => { });

  it('should delete one or more elements from the gallery', () => { });

  it('should not duplicate elements inside the gallery and return a warning to the user, saying NFT XXX already in the gallery', () => { });

  it("should return an error if the wallet doesn't exist, saying 'Address Wallet not found'", () => { });
});
