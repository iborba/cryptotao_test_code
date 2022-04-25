import { ObjectId } from 'mongodb';

export type NFTModel = {
  _id?: ObjectId;
  galleryId?: ObjectId;
  nft: object;
};
