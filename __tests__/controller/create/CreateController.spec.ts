import { CreateController } from "../../../src/controller/create/CreateController";
import { TodoElementModel } from "../../../src/model/TodoElement";
import { TodoStatus } from "../../../src/model/TodoStatus";
import { ICreateService } from "../../../src/service/create/ICreateService";

jest.mock("../../../src/service/create/CreateService");

describe("CreateController", () => {
  let createController: CreateController;
  let createService: jest.Mocked<ICreateService>;

  beforeEach(() => {
    createController = new CreateController();

    // Mock
    createService = {
      create: jest.fn(),
    };
  });

  it("should create new element", async () => {
    // given
    let newItem: TodoElementModel = {
      _id: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
      createdAt: new Date()
    };

    createService.create(newItem);

    // when
    await createController.create(newItem);

    // then
    expect(createService.create).toHaveBeenCalled();
  });

  it("should create multiple element", async () => {
    // given
    const items = [
      {
        _id: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
        createdAt: new Date()
      },
      {
        _id: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
        createdAt: new Date()
      }
    ];
    createService.create(items);

    // when
    await createController.create(items);

    // then
    expect(createService.create).toHaveBeenCalled();
  })
});
