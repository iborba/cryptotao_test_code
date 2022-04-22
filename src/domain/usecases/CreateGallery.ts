export interface CreateGallery {
  create: (gallery: CreateGallery.Params) => Promise<CreateGallery.Result>
}

export namespace CreateGallery {
  export type Params = {
    name: string,
    nftId: string,
    ownerId: string
  }

  export type Result = boolean
}