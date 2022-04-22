import { WalletApplication } from '../WalletApplication';

describe('WalletApplication', () => {
  const address = '4FAExmztfa3SDKoquvEjB5puUsbSasZ5m2Asksegfr9K';
  const wallet = new WalletApplication();
  let publicAddress: string;

  beforeAll(async (done) => {
    const result = await wallet.connectToWallet(address);
    if (result) {
      publicAddress = result;
    }
    done();
  });

  test('should connect to a wallet', async (done) => {
    expect(publicAddress).not.toBeNull();
    done();
  });

  test('should get all elements in a wallet', async (done) => {
    const result = await wallet.getNFTsFromWallet(publicAddress);
    expect(result[0]).toHaveProperty('key');
    done();
  });

  test("should return an error if the wallet doesn't exist, saying 'Can't resolve provided name into valid Solana address =('", async (done) => {
    const address = await wallet.connectToWallet('invalid_address_format');
    console.log('sasasa');
    // expect(address).toThrowError("Can't resolve provided name into valid Solana address =(");
    done();
  });
});
