import { GalleryRepository } from "../../../data/protocols/db/gallery/GalleryRepository";
import GalleryModel from "../../../domain/models/GalleryModel";
import { SaveGalleryDomainUseCase } from "../../../domain/usecases/SaveGalleryDomainUseCase";
import { ListGalleryUseCase } from "../../../domain/usecases/ListGalleryDomainUseCase";
import { MongoHelper } from "./MongoHelper";

export class MongoRepository implements GalleryRepository {
  async findAllNFTs(id: string): Promise<ListGalleryUseCase.NFTResult[]> {
    const collection = MongoHelper.getCollection('nft')
    const result = await collection.find().toArray()
    console.log(result)
    return []
  }
  async findOneNFT(id: string, nftId: string): Promise<ListGalleryUseCase.NFTResult | undefined> {
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
  async findAllGalleries(): Promise<ListGalleryUseCase.GalleriesResult> {
    const collection = MongoHelper.getCollection('galleries')
    const result = await collection.find().toArray()
    console.log(result)
    return []
  }

  async create(gallery: CreateGallery.Params): Promise<boolean> {
    const galleryCollection = MongoHelper.getCollection('galleries')
    const result = await galleryCollection.insertOne(gallery)

    return result.insertedId !== null
  }
}