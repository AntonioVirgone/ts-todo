import { CreateController } from "../../../src/controller/create/CreateController";
import { TodoElementModel } from "../../../src/model/TodoElement";
import { TodoStatus } from "../../../src/model/TodoStatus";
import { ICreateService } from "../../../src/service/create/ICreateService";

jest.mock("../../../src/service/create/CreateService");

describe("CreateController", () => {
  let createController: CreateController;
  let createService: jest.Mocked<ICreateService>;

  const userCode = "::userCode::"
  const newItem: TodoElementModel = {
    _id: "abc",
    userCode: "abc",
    title: "Title 1",
    description: "lorem ipsum",
    status: TodoStatus.COMPLETED,
    createdAt: new Date()
  };
  const items = [
    {
      _id: "abc",
      userCode: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
      createdAt: new Date()
    },
    {
      _id: "abc",
      userCode: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
      createdAt: new Date()
    }
  ];

  beforeEach(() => {
    createController = new CreateController();

    // Mock
    createService = {
      create: jest.fn(),
    };
  });

  it("should create new element", async () => {
    // given
    await createService.create(userCode, newItem);

    // when
    await createController.create(userCode, newItem);

    // then
    expect(createService.create).toHaveBeenCalled();
  });

  it("should create multiple element", async () => {
    // given
    createService.create(userCode, items);

    // when
    await createController.create(userCode, items);

    // then
    expect(createService.create).toHaveBeenCalled();
  })
});
