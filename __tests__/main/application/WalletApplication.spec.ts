import { WalletApplication } from '../../../src/main/application/WalletApplication';

describe('WalletApplication', () => {
  const address = '4FAExmztfa3SDKoquvEjB5puUsbSasZ5m2Asksegfr9K';
  const wallet = new WalletApplication();
  let publicAddress: string;

  beforeAll(async () => {
    const result = await wallet.connectToWallet(address);
    if (result) {
      publicAddress = result;
    }
  });

  it('should connect to a wallet', async () => {
    expect(publicAddress).not.toBeNull();
  });

  it('should get all elements in a wallet', async () => {
    const result = await wallet.getNFTsFromWallet(publicAddress);
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty('key');
  });

  it("should return an error if the wallet doesn't exist, saying 'Can't resolve provided name into valid Solana address =('", async () => {
    const address = await wallet.connectToWallet('invalid_address_format');
    expect(address).toEqual("Can't resolve provided name into valid Solana address =(");
  });

  it('should get an empty array if publicaddres is invalid for getting NFTs from wallet', async () => {
    const invalidPublicAddress = 'invalid public address';
    const result = await wallet.getNFTsFromWallet(invalidPublicAddress);
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(0);
  });
});
