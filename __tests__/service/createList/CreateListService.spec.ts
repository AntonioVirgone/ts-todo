import { ICreateListRepository } from "../../../src/repository/data/createList/ICreateListRepository";
import { CreateListService } from "../../../src/service/createList/CreateListService";

jest.mock("../../../src/repository/data/createList/CreateListRepository");

describe("CreateListService", () => {
  let createListService: CreateListService;
  let createListRepository: jest.Mocked<ICreateListRepository>;

  beforeEach(() => {
    createListService = new CreateListService();

    // mock
    createListRepository = {
      create: jest.fn(),
    };
  });

  it("should call repository to create new file", async () => {
    // given
    const fileName = Math.random().toString(36);
    await createListRepository.create(fileName);

    // when
    await createListService.create(fileName);

    // then
    expect(createListRepository.create).toHaveBeenCalled();
  });
});
