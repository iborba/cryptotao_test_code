import { WalletService } from '../../../src/main/services/WalletService';

describe('WalletService', () => {
  const address = '4FAExmztfa3SDKoquvEjB5puUsbSasZ5m2Asksegfr9K';
  const wallet = new WalletService();

  it('should get all elements in a wallet', async () => {
    const result = await wallet.getNFTsFromWallet(address);
    expect(result).not.toBeUndefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty('key');
  });
});
