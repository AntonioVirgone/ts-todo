import { CreateListController } from "../../../src/controller/createList/CreateListController";
import { ICreateListService } from "../../../src/service/createList/ICreateListService";

jest.mock("../../../src/service/createList/CreateListService");

describe("CreateListController", () => {
  let createListController: CreateListController;
  let createListService: jest.Mocked<ICreateListService>;

  beforeEach(() => {
    createListController = new CreateListController();

    // mock
    createListService = {
      create: jest.fn(),
    };
  });

  it("should create new file", async () => {
    // given
    const fileName = Math.random().toString(36);
    await createListService.create(fileName);

    // when
    await createListController.create(fileName);

    // then
    expect(createListService.create).toHaveBeenCalled();
  });
});
