import { SaveGalleryController } from '../../../src/presentation/controller';
import { faker } from '@faker-js/faker';
import { badRequest, noContent } from '../../../src/presentation/helpers/HttpHelper';
import { SaveGallerySpy } from '../mocks/MockGallery';

const mockRequest = (): SaveGalleryController.Request => ({
  name: faker.random.word(),
  nftId: faker.datatype.uuid(),
  ownerId: faker.datatype.uuid(),
});

type AuxTypes = {
  aux: SaveGalleryController;
  saveGallerySpy: SaveGallerySpy;
};

const makeGalleryAux = (): AuxTypes => {
  const saveGallerySpy = new SaveGallerySpy();
  const aux = new SaveGalleryController(saveGallerySpy);
  return {
    aux,
    saveGallerySpy,
  };
};

describe('SaveGalleryController', () => {
  describe('How to handle with gallery creation', () => {
    it('Should create a new gallery', async () => {
      const { aux } = makeGalleryAux();
      const httpResponse = await aux.handle(mockRequest());

      expect(httpResponse).toEqual(noContent());
    });

    it('Should not create a gallery if name not informed', async () => {
      const { aux } = makeGalleryAux();
      const data = mockRequest();
      data.name = '';
      const httpResponse = await aux.handle(data);

      expect(httpResponse).toEqual(badRequest(new Error('Gallery name not informed')));
    });

    it('Should not create a gallery if ownerId not informed', async () => {
      const { aux } = makeGalleryAux();
      const data = mockRequest();
      data.ownerId = '';
      const httpResponse = await aux.handle(data);

      expect(httpResponse).toEqual(badRequest(new Error('Owner not informed')));
    });

    it('Should not create a gallery if nftId not informed', async () => {
      const { aux } = makeGalleryAux();
      const data = mockRequest();
      data.nftId = '';
      const httpResponse = await aux.handle(data);

      expect(httpResponse).toEqual(badRequest(new Error('NFT not informed')));
    });
  });
});
