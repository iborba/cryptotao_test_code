import { CreateGallery } from "../../../src/domain/usecases/CreateGallery";

export class SaveGallerySpy implements CreateGallery {
  params: CreateGallery.Params | undefined
  async create(gallery: CreateGallery.Params): Promise<boolean> {
    this.params = gallery
    return true
  }
}