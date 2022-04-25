import { ListAllNFTsController } from '../../../src/presentation/controller';
import { BadNFTSpy, NFTSpy } from '../mocks';
import { NFTDomainUseCase } from '../../../src/domain/usecases';
import { ObjectId } from 'mongodb';

type AuxTypes = {
  aux: ListAllNFTsController;
  spy: NFTSpy;
};
const makeNFTAux = (): AuxTypes => {
  const spy = new NFTSpy();
  const aux = new ListAllNFTsController(spy);
  return { aux, spy };
};
const makeBadNFTAux = (): AuxTypes => {
  const spy = new BadNFTSpy();
  const aux = new ListAllNFTsController(spy);
  return { aux, spy };
};
const params: NFTDomainUseCase.Params = {
  _id: new ObjectId(),
  galleryId: new ObjectId(),
  nft: {},
};

describe('ListAllNFTsController', () => {
  it('should list all NFTs', async () => {
    const { aux } = makeNFTAux();
    const httpResponse = await aux.handle(params);

    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body).toHaveLength(2);
  });
  it('should return error', async () => {
    const { aux } = makeBadNFTAux();
    const httpResponse = await aux.handle(params);

    expect(httpResponse.statusCode).toEqual(400);
    expect(httpResponse.body).toEqual(new Error('error listing all NFTs'));
  });
});
