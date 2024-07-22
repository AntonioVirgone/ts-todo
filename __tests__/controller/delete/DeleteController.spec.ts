import { DeleteController } from "../../../src/controller/delete/DeleteController";
import { DeleteService } from "../../../src/service/delete/DeleteService";
import { DeleteRepository } from "../../../src/repository/delete/DeleteRepository";

jest.mock("../../../src/service/delete/DeleteService");
jest.mock(".../../../src/repository/delete/DeleteRepository");

describe("DeleteController", () => {
    let deleteController: DeleteController;
    let deleteService: jest.Mocked<DeleteService>;

    beforeEach(() => {
        deleteController = new DeleteController();

        // mock repository
        const deleteRepository = new DeleteRepository();

        // inject mock in service
        deleteService = new DeleteService(deleteRepository) as jest.Mocked<DeleteService>;

        // override service
        (deleteController as any).deleteService = deleteService;
    });

    it("should delete all element", async () => {
        // given
        deleteService.delete.mockResolvedValue(undefined);

        // when
        await deleteController.delete();

        // then
        expect(deleteService.delete).toHaveBeenCalled()
    });

    it("should delete element by id", async () => {
        // given
        deleteService.deleteById.mockResolvedValue(undefined);

        // when
        await deleteController.deleteById("::itemId::");

        // then
        expect(deleteService.deleteById).toHaveBeenCalled();
    })
});