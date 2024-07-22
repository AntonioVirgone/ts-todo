import { TodoStatus } from "../../../src/model/TodoStatus";
import { ICreateRepository } from "../../../src/repository/create/ICreateRepository";
import { CreateService } from "../../../src/service/create/CreateService";

describe("CreateService", () => {
  let createService: CreateService;
  let createRepository: jest.Mocked<ICreateRepository>;

  beforeEach(async () => {
    // mock repository
    createRepository = {
      create: jest.fn(),
    };

    // inject mock repository
    createService = new CreateService(createRepository);
  });

  it("should create new element", async () => {
    // given
    const item = {
      _id: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
      createdAt: new Date()
    };
    createRepository.create(item);

    // when
    await createService.create(item);

    // then
    expect(createRepository.create).toHaveBeenCalled();
  });
});
