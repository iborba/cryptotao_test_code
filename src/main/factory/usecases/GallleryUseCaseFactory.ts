import { GalleryDataUseCase } from '../../../data/usecases/GalleryDataUseCase';
import { NFTDataUseCase } from '../../../data/usecases/NFTDataUseCase';
import { GalleryDomainUseCase, NFTDomainUseCase } from '../../../domain/usecases';
import { MongoNFTRepository } from '../../../infra/db/mongodb';
import { MongoGalleryRepository } from '../../../infra/db/mongodb/MongoGalleryRepository';

export const makeDBGallery = (): GalleryDomainUseCase => {
  const galleryMongoRepository = new MongoGalleryRepository();
  return new GalleryDataUseCase(galleryMongoRepository);
};

export const makeDBNFT = (): NFTDomainUseCase => {
  const nftMongoRepository = new MongoNFTRepository();
  return new NFTDataUseCase(nftMongoRepository);
};
