import { TodoElementModel } from "../../../src/model/TodoElement";
import { TodoStatus } from "../../../src/model/TodoStatus";
import { FindRepository } from "../../../src/repository/find/FindRepository";
import { FindService } from "../../../src/service/find/FindService";

// Creiamo un mock della classe FindRepository
jest.mock("../../../src/repository/find", () => {
  return {
    FindRepository: jest.fn().mockImplementation(() => {
      return {
        findAll: jest.fn().mockResolvedValue([
          {
            _id: "abc",
            title: "Title 1",
            description: "lorem ipsum",
            status: TodoStatus.COMPLETED,
          },
        ]),
      };
    }),
  };
});

describe("FindService", () => {
  let service: FindService;
  let repository: FindRepository;

  beforeEach(() => {
    service = new FindService();
  });

  test("should find all element", async () => {
    const items = await service.findAll();
    expect(items).toHaveLength(1);
    expect(items).toEqual(repository.findAll());
  });
});
