import { TodoStatus } from "../../../src/model/TodoStatus";
import { ICreateRepository } from "../../../src/repository/data/create/ICreateRepository";
import { CreateService } from "../../../src/service/create/CreateService";

jest.mock("../../../src/repository/data/create/CreateRepository");

describe("CreateService", () => {
  let createService: CreateService;
  let createRepository: jest.Mocked<ICreateRepository>;
  
  const userCode = "::userCode::";
  const item = {
    _id: "abc",
    userCode: "abc",
    title: "Title 1",
    description: "lorem ipsum",
    status: TodoStatus.COMPLETED,
    createdAt: new Date(),
  };

  beforeEach(() => {
    createService = new CreateService();

    // mock repository
    createRepository = {
      create: jest.fn(),
    };
  });

  it("should create new element", async () => {
    // given
    const userCode = "::userCode::";
    const item = {
      _id: "abc",
      userCode: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
      createdAt: new Date(),
    };
    createRepository.create(userCode, item);

    // when
    await createService.create(userCode, item);

    // then
    expect(createRepository.create).toHaveBeenCalled();
  });

  it("should create multiple element", async () => {
    // given
    const items = [item, item];
    createRepository.create(userCode, items);

    // when
    await createService.create(userCode, items);

    // then
    expect(createRepository.create).toHaveBeenCalled();
  });
});
