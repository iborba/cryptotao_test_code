import { ListGalleryController } from "../../../src/presentation/controller/ListGalleryController";
import { faker } from "@faker-js/faker"
import { badRequest, noContent } from "../../../src/presentation/helpers/HttpHelper";
import { ListGallerySpy } from "../mocks/MockGallery";

const mockRequest = (): ListGalleryController.Request => ({
  id: faker.random.word(),
  nftId: faker.datatype.uuid(),
  type: faker.random.word()
})

type AuxTypes = {
  aux: ListGalleryController
  listGallerySpy: ListGallerySpy
}

const makeGalleryAux = (): AuxTypes => {
  const listGallerySpy = new ListGallerySpy()
  const aux = new ListGalleryController(listGallerySpy)
  return {
    aux,
    listGallerySpy
  }
}

describe('ListGalleryController', () => {
  describe('How to list a gallery and its contents', () => {
    it('should list a gallery by id', async () => {
      const { aux } = makeGalleryAux()
      const httpResponse = await aux.handle(mockRequest())
      expect(httpResponse).toEqual(noContent())
    })
    it('should list all galeries', async () => { })
    it('should list all NFTs in a gallery', async () => { })
    it('should list one NFT in a gallery', async () => { })
  })
})