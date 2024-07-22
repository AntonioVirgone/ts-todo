import { TodoStatus } from "../../../src/model/TodoStatus";
import { IFindRepository } from "../../../src/repository/find/IFindRepository";
import { FindService } from "../../../src/service/find/FindService";

describe("FindService", () => {
  let findService: FindService;
  let findRepository: jest.Mocked<IFindRepository>;

  beforeEach(async () => {
    // Create mock repository
    findRepository = {
      findAll: jest.fn(),
    };

    // Inject mock in service
    findService = new FindService(findRepository);
  });

  it("should find all element", async () => {
    // given
    const mockResult = [
      {
        _id: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
      },
    ];
    findRepository.findAll.mockResolvedValue(mockResult);

    // when
    const items = await findService.findAll();

    // then
    expect(items).toHaveLength(mockResult.length);
    expect(items).toEqual(mockResult);
  });
});
