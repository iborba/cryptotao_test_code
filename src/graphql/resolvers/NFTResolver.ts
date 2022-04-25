import { adaptResolver } from '../../main/adapters';
import {
  makeListAllNFTsController,
  makeListOneNFTController,
  makeSaveNFTController,
} from '../../main/factory/controller';

export default {
  Query: {
    nft: async (parent: any, args: any) => adaptResolver(makeListOneNFTController(), args),
    nfts: async (parent: any, args: any) => adaptResolver(makeListAllNFTsController(), args),
  },
  Mutation: {
    createNFT: async (parent: any, args: any) => adaptResolver(makeSaveNFTController(), args),
  },
};
