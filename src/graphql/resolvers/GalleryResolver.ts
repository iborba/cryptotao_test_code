import { adaptResolver } from '../../main/adapters';
import {
  makeListAllGalleriesController,
  makeListOneGalleryController,
  makeSaveGalleryController,
} from '../../main/factory/controller';

export default {
  Query: {
    gallery: async (parent: any, args: any) => adaptResolver(makeListOneGalleryController(), args),
    galleries: async (parent: any, args: any) => adaptResolver(makeListAllGalleriesController(), args),
  },

  Mutation: {
    createGallery: async (parent: any, args: any) => adaptResolver(makeSaveGalleryController(), args),
  },
};
