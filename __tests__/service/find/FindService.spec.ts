import { TodoElementModel } from "../../../src/model/TodoElement";
import { IFindRepository } from "../../../src/repository/data/find/IFindRepository";
import { FindService } from "../../../src/service/find/FindService";

jest.mock("../../../src/repository/data/find/FindRepository");
jest.mock("../../../src/repository/data/find/FindFromFileRepository");

describe("FindService", () => {
  let findService: FindService;

  // mock repository
  let findRepository: jest.Mocked<IFindRepository>;
  let findFromFileRepository: jest.Mocked<IFindRepository>;

  const userCode = "::userCode::"

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
    const mockResult: TodoElementModel[] = await findRepository.findAll(userCode);

    // when
    const result = await findService.findAll();

    // then
    expect(result).toEqual(mockResult);
  });

  it("should find all element from file", async () => {
    // given
    const mockResult: TodoElementModel[] =
      await findFromFileRepository.findAll(userCode);

    // when
    const result = await findService.findFileFromFile(userCode);

    // then
    expect(result).toEqual(mockResult);
  });

  it("should find item by id", async () => {
    // given
    const itemId = "::itemId::";
    const mockResult: TodoElementModel = await findFromFileRepository.findById(userCode, itemId);

    // when
    const result = await findService.findById(userCode, itemId);

    // then
    expect(result).toEqual(mockResult);
  });
});
