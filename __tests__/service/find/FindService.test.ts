import { TodoElementModel } from "../../../src/model/TodoElement";
import { TodoStatus } from "../../../src/model/TodoStatus";
import { FindService } from "../../../src/service/find/FindService";

describe("FindService", () => {
  let service: FindService;

  // Mock list
  const mockList: TodoElementModel[] = [
    {
      _id: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
    },
  ];

  beforeEach(() => {
    service = new FindService();
  });

  test("should find all element", () => {
    const items = service.findAll();
    expect(items).toHaveLength(1);
    expect(items).toEqual(mockList);
  });
});
