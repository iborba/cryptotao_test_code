export class GalleryApplication implements IGalleryApplication {
  listNFT(id: string, nftId?: string) {
    throw new Error('Method not implemented.');
  }
  //   addNFT(id: string; NFTs: { name: string; description: string; image: string; external_url: string; origin: { name: string; symbol: string; description: string; seller_fee_basis_points: number; image: string; external_url: string; attributes: never[]; collection: { ...; }; properties: { ...; }; }; }[]; }) {
  //   throw new Error('Method not implemented.');
  // }
  deleteNFT(id: string, nftId: string) {
    throw new Error('Method not implemented.');
  }
  deleteGallery(id: string) {
    throw new Error('Method not implemented.');
  }
  createGallery(name: string, ownerId: string) {
    throw new Error('Method not implemented.');
  }
}

export interface IGalleryApplication {
  id: string;
  nftId: string;
  ownerId: string;
  name: string;
}
