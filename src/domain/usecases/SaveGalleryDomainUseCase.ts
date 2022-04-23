export interface SaveGalleryDomainUseCase {
  create: (gallery: SaveGalleryDomainUseCase.Params) => Promise<SaveGalleryDomainUseCase.Result>
}

export namespace SaveGalleryDomainUseCase {
  export type Params = {
    name: string,
    nftId: string,
    ownerId: string
  }

  export type Result = boolean
}