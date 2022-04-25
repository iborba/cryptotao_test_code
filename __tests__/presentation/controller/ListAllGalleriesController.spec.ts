import { ListAllGalleriesController } from '../../../src/presentation/controller';
import { BadGallerySpy, GallerySpy } from '../mocks';

type AuxTypes = {
  aux: ListAllGalleriesController;
  spy: GallerySpy;
};
const makeGalleryAux = (): AuxTypes => {
  const spy = new GallerySpy();
  const aux = new ListAllGalleriesController(spy);
  return { aux, spy };
};
const makeBadGalleryAux = (): AuxTypes => {
  const spy = new BadGallerySpy();
  const aux = new ListAllGalleriesController(spy);
  return { aux, spy };
};

describe('ListAllGalleriesController', () => {
  it('should list all galeries', async () => {
    const { aux } = makeGalleryAux();
    const httpResponse = await aux.handle();

    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body).toHaveLength(2);
  });

  it('should return error', async () => {
    const { aux } = makeBadGalleryAux();
    const httpResponse = await aux.handle();
    expect(httpResponse.statusCode).toEqual(400);
    expect(httpResponse.body).toEqual(new Error('error listing all galleries'));
  });
});
