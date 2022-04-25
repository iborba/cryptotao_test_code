import { ObjectId } from 'mongodb';

export type GalleryModel = {
  _id?: ObjectId;
  name: string;
  ownerId?: ObjectId;
};

export default GalleryModel;
