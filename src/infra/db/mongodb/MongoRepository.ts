import { GalleryRepository } from "../../../data/protocols/db/gallery/GalleryRepository";
import { GalleryModel } from "../../../domain/models";
import { SaveGalleryDomainUseCase, ListGalleryDomainUseCase } from "../../../domain/usecases";
import { MongoHelper } from "./MongoHelper";

export class MongoRepository implements GalleryRepository {
  async findAllNFTs(id: string): Promise<ListGalleryDomainUseCase.NFTResult[]> {
    const collection = MongoHelper.getCollection('nft')
    const result = await collection.find().toArray()
    console.log(result)
    return []
  }
  async findOneNFT(id: string, nftId: string): Promise<ListGalleryDomainUseCase.NFTResult | undefined> {
    const collection = MongoHelper.getCollection('nft')
    const result = await collection.findOne({ id, nftId })
    console.log(result)
    return undefined
  }
  async findOneGallery(id: string): Promise<GalleryModel | undefined> {
    const collection = MongoHelper.getCollection('galleries')
    const result = await collection.findOne({ id })
    console.log(result)
    return undefined
  }
  async findAllGalleries(): Promise<ListGalleryDomainUseCase.GalleriesResult> {
    const collection = MongoHelper.getCollection('galleries')
    const result = await collection.find().toArray()
    console.log(result)
    return []
  }

  async create(gallery: SaveGalleryDomainUseCase.Params): Promise<boolean> {
    const galleryCollection = MongoHelper.getCollection('galleries')
    const result = await galleryCollection.insertOne(gallery)

    return result.insertedId !== null
  }
}