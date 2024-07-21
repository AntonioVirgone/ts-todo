import { Test, TestingModule } from "@nestjs/testing";
import { FindRepository } from "../../../src/repository/find/FindRepository";
import { TodoStatus } from "../../../src/model/TodoStatus";

describe("FindRepository", () => {
  let findRepository: FindRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindRepository],
    }).compile();

    findRepository = module.get<FindRepository>(FindRepository);
  });

  test("should find all element from repository", async () => {
    const mockResult = [
      {
        _id: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
      },
    ];

    const items = await findRepository.findAll();
    expect(items).toHaveLength(mockResult.length);
    expect(items).toEqual(mockResult);
  });
});
