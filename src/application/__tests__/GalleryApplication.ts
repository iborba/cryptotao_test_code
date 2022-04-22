import { GalleryApplication } from '../GalleryApplication';

describe('GalleryApplication', () => {
  it('should create a personal gallery if owner exists', async () => {
    const name = 'test gallery';
    const ownerId = '6e9b27dc-7e9d-48dd-a64b-c49f014b9fb9';

    const gallery = new GalleryApplication();
    const result = await gallery.createGallery(name, ownerId);

    expect(result.message).toEqual('Gallery succesfully created.');
  });

  it('should not allow to delete a gallery if it contains elements inside', async () => {
    const id = '7828e6cc-fc0e-4477-9625-02fedca814d8';
    const gallery = new GalleryApplication();
    const result = await gallery.deleteGallery(id);

    expect(result.message).toEqual("This gallery can't be deleted because is non-empty");
  });

  it('should delete one or more NFTs from the gallery', async () => {
    const id = '7828e6cc-fc0e-4477-9625-02fedca814d8';
    const nftId = '55aee5fb-00d6-48f0-897e-eeec36e050b9';

    const gallery = new GalleryApplication();
    const result = await gallery.deleteNFT(id, nftId);

    expect(result.message).toEqual('NFTs successfully removed from gallery.');
  });

  it('should list all NFTs in a gallery', async () => {
    const id = '7828e6cc-fc0e-4477-9625-02fedca814d8';
    const gallery = new GalleryApplication();
    const result = await gallery.listNFT(id);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toBeGreaterThan(0);
  });

  it('should list one NFT in a gallery', async () => {
    const id = '7828e6cc-fc0e-4477-9625-02fedca814d8';
    const nftId = '55aee5fb-00d6-48f0-897e-eeec36e050b9';

    const gallery = new GalleryApplication();
    const result = await gallery.listNFT(id, nftId);

    expect(result).toEqual(1);
  });

  it('should add a NFT to a gallery', async () => {
    const body = {
      id: '7828e6cc-fc0e-4477-9625-02fedca814d8',
      NFTs: [
        {
          name: 'SOL Parasite #4679',
          description: '10,000 NFT Parasites finding their hosts on the Solana Blockchain.',
          image: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
          external_url: 'https://solparasites.com',
          origin: {
            name: 'SOL Parasite #4679',
            symbol: 'PRST',
            description: '10,000 NFT Parasites finding their hosts on the Solana Blockchain.',
            seller_fee_basis_points: 1900,
            image: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
            external_url: 'https://solparasites.com',
            attributes: [],
            collection: {
              name: 'SOL Parasites',
            },
            properties: {
              files: [
                {
                  uri: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
                  type: 'image/jpeg',
                },
              ],
              category: 'image',
              creators: [
                {
                  address: '8bZXQYaU3eHQG9mzzrM7aHMkedmuNaZsHq4unYCw6VTm',
                  share: 100,
                },
              ],
            },
          },
        },
      ],
    };

    const gallery = new GalleryApplication();
    const result = await gallery.addNFT(body);

    expect(result.message).toEqual('NFTs successfully inserted to gallery.');
  });

  it('should not duplicate elements inside the gallery and return NFT XXX already in the gallery', async () => {
    const body = {
      id: '7828e6cc-fc0e-4477-9625-02fedca814d8',
      NFTs: [
        {
          name: 'SOL Parasite #4679',
          description: '10,000 NFT Parasites finding their hosts on the Solana Blockchain.',
          image: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
          external_url: 'https://solparasites.com',
          origin: {
            name: 'SOL Parasite #4679',
            symbol: 'PRST',
            description: '10,000 NFT Parasites finding their hosts on the Solana Blockchain.',
            seller_fee_basis_points: 1900,
            image: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
            external_url: 'https://solparasites.com',
            attributes: [],
            collection: {
              name: 'SOL Parasites',
            },
            properties: {
              files: [
                {
                  uri: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
                  type: 'image/jpeg',
                },
              ],
              category: 'image',
              creators: [
                {
                  address: '8bZXQYaU3eHQG9mzzrM7aHMkedmuNaZsHq4unYCw6VTm',
                  share: 100,
                },
              ],
            },
          },
        },
      ],
    };

    const gallery = new GalleryApplication();
    const result = await gallery.addNFT(body);

    expect(result.message).toEqual('One or more elements already exists in this gallery.');
  });
});
