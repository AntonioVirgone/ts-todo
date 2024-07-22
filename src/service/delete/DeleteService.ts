import { IDeleteRepository } from "../../repository/delete/IDeleteRepository";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  private deleteRepository: IDeleteRepository;

  constructor(deleteRepository: IDeleteRepository) {
    this.deleteRepository = deleteRepository;
  }

  delete(): Promise<void> {
    return this.deleteRepository.delete();
  }

  deleteById(itemId: string): Promise<void> {
    return this.deleteRepository.deleteById(itemId);
  }
}
