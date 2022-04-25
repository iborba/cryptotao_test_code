import { ListNFTController } from '../../../src/presentation/controller';
import { faker } from '@faker-js/faker';
import { BadNFTSpy, NFTSpy } from '../mocks';
import { NFTDomainUseCase } from '../../../src/domain/usecases';

type AuxTypes = {
  aux: ListNFTController;
  spy: NFTSpy;
};
const id = faker.datatype.uuid();
const makeNFTAux = (): AuxTypes => {
  const spy = new NFTSpy();
  const aux = new ListNFTController(spy);
  return { aux, spy };
};
const makeBadNFTAux = (): AuxTypes => {
  const spy = new BadNFTSpy();
  const aux = new ListNFTController(spy);
  return { aux, spy };
};
const params: NFTDomainUseCase.Params = {
  id,
  galleryId: faker.datatype.uuid(),
  nft: {},
};

describe('ListNFTController', () => {
  it('should list one NFT', async () => {
    const { aux } = makeNFTAux();
    const httpResponse = await aux.handle(params);

    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body).toHaveProperty('_id');
    expect(httpResponse.body._id).toEqual(id);
  });
  it('should return error', async () => {
    const { aux } = makeBadNFTAux();
    const httpResponse = await aux.handle(params);

    expect(httpResponse.statusCode).toEqual(400);
    expect(httpResponse.body).toEqual(new Error('error listing NFT'));
  });
});
