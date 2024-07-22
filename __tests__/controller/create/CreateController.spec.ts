import { CreateController } from "../../../src/controller/create/CreateController";
import { TodoElementModel } from "../../../src/model/TodoElement";
import { TodoStatus } from "../../../src/model/TodoStatus";
import { CreateService } from "../../../src/service/create/CreateService";

jest.mock("../../../src/service/create/CreateService");

describe("CreateController", () => {
  let createController: CreateController;
  let createService: jest.Mocked<CreateService>;

  beforeEach(() => {
    createController = new CreateController();

    // Mock
    createService = new CreateService() as jest.Mocked<CreateService>;

    // Override service
    (createController as any).createService = createService;
  });

  it("should create new element", async () => {
    // given
    let newItem: TodoElementModel = {
      _id: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
    };

    createService.create.mockResolvedValue(undefined);

    // when
    await createController.create(newItem);

    // then
    expect(createService.create).toHaveBeenCalled();
  });
});
