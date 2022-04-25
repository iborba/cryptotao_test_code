import { ObjectId } from 'mongodb';
import { GalleryDomainUseCase } from '../../domain/usecases';
import { GalleryRepository } from '../protocols/db/gallery/GalleryRepository';

export class GalleryDataUseCase implements GalleryDomainUseCase {
  constructor(private readonly repository: GalleryRepository) { }

  findAll(): Promise<GalleryDomainUseCase.Result[]> {
    return this.repository.findAll();
  }
  findOne(id?: ObjectId): Promise<GalleryDomainUseCase.Result | null> {
    return this.repository.findOne(id);
  }

  async create(gallery: GalleryDomainUseCase.Params): Promise<GalleryDomainUseCase.Result | false> {
    return this.repository.create(gallery);
  }
}
