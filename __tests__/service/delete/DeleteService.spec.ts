import { IDeleteRepository } from "../../../src/repository/delete/IDeleteRepository";
import { DeleteService } from "../../../src/service/delete/DeleteService";

describe("DeleteService", () => {
    let deleteService: DeleteService;
    let deleteRepository: jest.Mocked<IDeleteRepository>;

    beforeEach(async () => {
        // mock repository
        deleteRepository = {
            delete: jest.fn(),
            deleteById: jest.fn()
        };

        // inject mock repository
        deleteService = new DeleteService(deleteRepository);
    });

    it("should delete all element", async () => {
        // given
        deleteRepository.delete();

        // when
        await deleteService.delete();

        // them
        expect(deleteRepository.delete).toHaveBeenCalled();
    });

    it("should delete single element by id", async () => {
        // given
        const itemId: string = "::itemId::"; 
        deleteRepository.deleteById(itemId);

        // when
        await deleteService.deleteById(itemId);

        // then
        expect(deleteRepository.deleteById).toHaveBeenCalled();
    })
})