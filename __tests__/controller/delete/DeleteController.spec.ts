import { DeleteController } from "../../../src/controller/delete/DeleteController";
import { IDeleteService } from "../../../src/service/delete/IDeleteService";

jest.mock("../../../src/service/delete/DeleteService");

describe("DeleteController", () => {
  const userCode = "::userCode::";
  const itemId = "::itemId::";

  let deleteController: DeleteController;
  let deleteService: jest.Mocked<IDeleteService>;

  beforeEach(() => {
    deleteController = new DeleteController();

    // inject mock in service
    deleteService = {
      delete: jest.fn(),
      deleteById: jest.fn(),
    };
  });

  it("should delete all element", async () => {
    // given
    deleteService.delete(userCode);

    // when
    await deleteController.delete(userCode);

    // then
    expect(deleteService.delete).toHaveBeenCalled();
  });

  it("should delete element by id", async () => {
    // given
    deleteService.deleteById(userCode, itemId);

    // when
    await deleteController.deleteById(userCode, itemId);

    // then
    expect(deleteService.deleteById).toHaveBeenCalled();
  });
});
