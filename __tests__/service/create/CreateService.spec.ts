import { TodoStatus } from "../../../src/model/TodoStatus";
import { ICreateRepository } from "../../../src/repository/create/ICreateRepository";
import { CreateService } from "../../../src/service/create/CreateService";

jest.mock("../../../src/repository/create/CreateRepository");

describe("CreateService", () => {
  let createService: CreateService;
  let createRepository: jest.Mocked<ICreateRepository>;

  beforeEach(() => {
    createService = new CreateService();

    // mock repository
    createRepository = {
      create: jest.fn(),
    };
  });

  it("should create new element", async () => {
    // given
    const item = {
      _id: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
      createdAt: new Date(),
    };
    createRepository.create(item);

    // when
    await createService.create(item);

    // then
    expect(createRepository.create).toHaveBeenCalled();
  });

  it("should create multiple element", async () => {
    // given
    const items = [
      {
        _id: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
        createdAt: new Date(),
      },
      {
        _id: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
        createdAt: new Date(),
      },
    ];
    createRepository.create(items);

    // when
    await createService.create(items);

    // then
    expect(createRepository.create).toHaveBeenCalled();
  });
});
