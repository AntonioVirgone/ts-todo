import { FindController } from "../../../src/controller/find/FindController";
import { FindService } from "../../../src/service/find/FindService";
import { TodoStatus } from "../../../src/model/TodoStatus";
import { FindRepository } from "../../../src/repository/find/FindRepository";
import { FindFromFileRepository } from "../../../src/repository/find/FindFromFileRepository";
import { TodoElementModel } from "../../../src/model/TodoElement";

jest.mock(".../../../src/repository/find/FindRepository");
jest.mock("../../../src/repository/find/FindFromFileRepository");
jest.mock("../../../src/service/find/FindService");

describe("FindController", () => {
  let findController: FindController;
  // Create mock of services
  let findService: jest.Mocked<FindService>;
  let findFromFileService: jest.Mocked<FindService>;

  beforeEach(() => {
    // load repositories
    const findRepository = new FindRepository();
    const findFromFileRepository = new FindFromFileRepository();

    // assigned to services mock new instance with repository
    findService = new FindService(findRepository) as jest.Mocked<FindService>;
    findFromFileService = new FindService(
      findFromFileRepository
    ) as jest.Mocked<FindService>;

    findController = new FindController();

    // override services in controller with mock 
    (findController as any).findService = findService;
    (findController as any).findFromFileService = findFromFileService;
  });

  it("should find all element", async () => {
    // given
    const mockResult: TodoElementModel[] = [
      {
        _id: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
      },
    ];

    findService.findAll.mockResolvedValue(mockResult);

    // when
    const items = await findController.findAll();

    // then
    expect(items).toHaveLength(mockResult.length);
    expect(items).toEqual(mockResult);
  });

  it("should return all element when read from file", async () => {
    // given
    const mockResult: TodoElementModel[] = [
      {
        _id: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
      },
    ];
    findFromFileService.findFileFromFile.mockResolvedValue(mockResult);

    // when
    const items = await findController.findFromFile();

    // then
    expect(items).toHaveLength(mockResult.length);
    expect(items).toEqual(mockResult);
  });
});
