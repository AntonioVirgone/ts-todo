import { TodoStatus } from "../../../src/model/TodoStatus";
import { FindRepository } from "../../../src/repository/find/FindRepository";
import { FindService } from "../../../src/service/find/FindService";
import { Test, TestingModule } from '@nestjs/testing';

describe("FindService", () => {
  let findService: FindService;
  let findRepository: FindRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindService],
      providers: [{
        provide: FindRepository,
        useValue: {
          findAll: jest.fn()
        }
      }]
    }).compile();

    findService = module.get<FindService>(FindService);
    findRepository = module.get<FindRepository>(FindRepository);
  });

  test("should find all element", async () => {
    const mockResult = [
      {
        _id: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
      },
    ];
    jest.spyOn(findRepository, 'findAll').mockResolvedValue(mockResult);

    const items = await findService.findAll();
    expect(items).toHaveLength(mockResult.length);
    expect(items).toEqual(mockResult);
  });
});
