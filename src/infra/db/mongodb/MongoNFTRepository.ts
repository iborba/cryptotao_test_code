import { ObjectId } from 'mongodb';
import { NFTRepository } from '../../../data/protocols/db/gallery';
import { GalleryDomainUseCase, NFTDomainUseCase } from '../../../domain/usecases';
import { MongoHelper } from './MongoHelper';

export class MongoNFTRepository implements NFTRepository {
  async findOne(id: string, nftId: string): Promise<NFTDomainUseCase.Result | null> {
    const collection = MongoHelper.getCollection('nft');
    const data = await collection.findOne<NFTDomainUseCase.Result>({ _id: new ObjectId(nftId), galleryId: id });
    if (data) {
      data.id = nftId;
    }
    return data;
  }
  async findAll(id: string): Promise<NFTDomainUseCase.Result[]> {
    const collection = MongoHelper.getCollection('nft');
    return await collection.find<NFTDomainUseCase.Result>({}).toArray();
  }

  async create(nft: NFTDomainUseCase.Params): Promise<NFTDomainUseCase.Result | false> {
    const collection = MongoHelper.getCollection('nft');
    const result = await collection.insertOne(nft);

    if (result.insertedId) {
      return {
        id: result.insertedId.toHexString(),
        ...nft,
      };
    }
    return false;
  }
  async delete(galleryId: string, nftId: string): Promise<void> {
    const collection = MongoHelper.getCollection('nft');
    await collection.deleteOne({ _id: new ObjectId(nftId) });
  }
  async update(galleryId: string, nftId: string, nft: NFTDomainUseCase.Params): Promise<void> {
    const collection = MongoHelper.getCollection('nft');
    await collection.updateOne({ _id: new ObjectId(nftId), galleryId }, nft);
  }
}
