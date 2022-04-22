export class GalleryApplication {
  listNFT(body: { galleryId: string; }) {
    throw new Error('Method not implemented.');
  }
  addNFT(body: { galleryId: string; NFTs: { name: string; description: string; image: string; external_url: string; origin: { name: string; symbol: string; description: string; seller_fee_basis_points: number; image: string; external_url: string; attributes: never[]; collection: { ...; }; properties: { ...; }; }; }[]; }) {
  throw new Error('Method not implemented.');
}
deleteNFT(body: { galleryId: string; nftId: string; }) {
  throw new Error('Method not implemented.');
}
deleteGallery(body: { id: string; }) {
  throw new Error('Method not implemented.');
}
createGallery(body: { name: string; owner: string; }) {
  throw new Error('Method not implemented.');
} 

}
