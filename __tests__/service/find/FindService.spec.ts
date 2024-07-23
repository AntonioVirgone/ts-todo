import { TodoElementModel } from "../../../src/model/TodoElement";
import { IFindRepository } from "../../../src/repository/find/IFindRepository";
import { FindService } from "../../../src/service/find/FindService";

jest.mock("../../../src/repository/find/FindRepository");
jest.mock("../../../src/repository/find/FindFromFileRepository");

describe("FindService", () => {
  let findService: FindService;

  // mock repository
  let findRepository: jest.Mocked<IFindRepository>;
  let findFromFileRepository: jest.Mocked<IFindRepository>;

  beforeEach(async () => {
    findService = new FindService();

    // Mock methods
    findRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
    };

    findFromFileRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
    };
  });

  it("should find all element", async () => {
    // given
    const mockResult: TodoElementModel[] = await findRepository.findAll();

    // when
    const result = await findService.findAll();

    // then
    expect(result).toEqual(mockResult);
  });

  it("should find all element from file", async () => {
    // given
    const mockResult: TodoElementModel[] =
      await findFromFileRepository.findAll();

    // when
    const result = await findService.findFileFromFile();

    // then
    expect(result).toEqual(mockResult);
  });

  it("should find item by id", async () => {
    // given
    const itemId = "::itemId::";
    const mockResult: TodoElementModel = await findFromFileRepository.findById(itemId);

    // when
    const result = await findService.findById(itemId);

    // then
    expect(result).toEqual(mockResult);
  });
});
