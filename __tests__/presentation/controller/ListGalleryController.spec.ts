import faker from '@faker-js/faker';
import { ObjectId } from 'mongodb';
import { GalleryDomainUseCase } from '../../../src/domain/usecases';
import { ListGalleryController } from '../../../src/presentation/controller';
import { BadGallerySpy, GallerySpy } from '../mocks';

type AuxTypes = {
  aux: ListGalleryController;
  spy: GallerySpy;
};
const makeGalleryAux = (): AuxTypes => {
  const spy = new GallerySpy();
  const aux = new ListGalleryController(spy);
  return { aux, spy };
};
const makeBadGalleryAux = (): AuxTypes => {
  const spy = new BadGallerySpy();
  const aux = new ListGalleryController(spy);
  return { aux, spy };
};
const params: GalleryDomainUseCase.Params = {
  _id: new ObjectId(),
  name: faker.random.word(),
  ownerId: new ObjectId(),
};

describe('ListGalleryController', () => {
  it('should list a galery', async () => {
    const { aux } = makeGalleryAux();
    const httpResponse = await aux.handle(params);

    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body).toHaveProperty('_id');
    expect(httpResponse.body._id).toEqual(params._id);
  });
  it('should return error', async () => {
    const { aux } = makeBadGalleryAux();
    const httpResponse = await aux.handle(params);
    expect(httpResponse.statusCode).toEqual(400);
    expect(httpResponse.body).toEqual(new Error('error listing gallery'));
  });
});
