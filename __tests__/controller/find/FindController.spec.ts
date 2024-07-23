import { FindController } from "../../../src/controller/find/FindController";
import { TodoElementModel } from "../../../src/model/TodoElement";
import { IFindService } from "../../../src/service/find/IFindService";

jest.mock("../../../src/service/find/FindService");

describe("FindController", () => {
  let findController: FindController;
  // Create mock of services
  let findService: jest.Mocked<IFindService>;

  beforeEach(() => {
    findController = new FindController();

    // Mock
    findService = {
      findAll: jest.fn(),
      findFileFromFile: jest.fn(),
      findById: jest.fn(),
    };
  });

  it("should find all element", async () => {
    // given
    const mockResult: TodoElementModel[] = await findService.findAll();

    // when
    const result = await findController.findAll();

    // then
    expect(result).toEqual(mockResult);
  });

  it("should return all element when read from file", async () => {
    // given
    const mockResult: TodoElementModel[] = await findService.findFileFromFile();

    // when
    const result = await findController.findFromFile();

    // then
    expect(result).toEqual(mockResult);
  });

  it("should return item by id", async () => {
    // given
    const itemId = "::itemId::";
    const mockResult: TodoElementModel = await findService.findById(itemId);

    // when
    const result = await findController.findById(itemId);

    // then
    expect(result).toEqual(mockResult);
  });
});
