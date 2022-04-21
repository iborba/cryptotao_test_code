import { CheckNFT } from '../checkNFT';
describe('checkNFT', () => {
  const address = '4FAExmztfa3SDKoquvEjB5puUsbSasZ5m2Asksegfr9K';

  it('should get a non-empty array as response', async () => {
    const checkNFT = new CheckNFT();
    const nftArray = await checkNFT.getNFTArray(address);

    expect(nftArray).not.toBeNull();
    expect(nftArray[0]).toHaveProperty('key');
  });
});
