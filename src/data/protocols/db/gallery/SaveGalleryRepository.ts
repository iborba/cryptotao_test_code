import { CreateGallery } from "../../../../domain/usecases/CreateGallery"

export interface SaveGalleryRepository {
  create: (gallery: SaveGalleryRepository.Params) => Promise<SaveGalleryRepository.Result>
}

export namespace SaveGalleryRepository {
  export type Params = CreateGallery.Params

  export type Result = CreateGallery.Result
}