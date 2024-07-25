import { IDeleteRepository } from "../../../src/repository/data/delete/IDeleteRepository";
import { DeleteService } from "../../../src/service/delete/DeleteService";

jest.mock("../../../src/repository/data/delete/DeleteRepository");

describe("DeleteService", () => {
    let deleteService: DeleteService;
    let deleteRepository: jest.Mocked<IDeleteRepository>;

    const userCode = "::userCode::"

    beforeEach(async () => {
        // mock repository
        deleteRepository = {
            delete: jest.fn(),
            deleteById: jest.fn()
        };

        // inject mock repository
        deleteService = new DeleteService();
    });

    it("should delete all element", async () => {
        // given
        deleteRepository.delete(userCode);

        // when
        await deleteService.delete(userCode);

        // them
        expect(deleteRepository.delete).toHaveBeenCalled();
    });

    it("should delete single element by id", async () => {
        // given
        const itemId: string = "::itemId::"; 
        deleteRepository.deleteById(userCode, itemId);

        // when
        await deleteService.deleteById(userCode, itemId);

        // then
        expect(deleteRepository.deleteById).toHaveBeenCalled();
    })
})