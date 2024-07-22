import { Test, TestingModule } from "@nestjs/testing";
import { FindRepository } from "../../../src/repository/find/FindRepository";
import { TodoStatus } from "../../../src/model/TodoStatus";

describe("FindRepository", () => {
  let findRepository: FindRepository;

  beforeEach(async () => {
    findRepository = new FindRepository();
  });

  it("should find all element from repository", async () => {
    // given
    const mockResult = [
      {
        _id: "abc",
        title: "Title 1",
        description: "lorem ipsum",
        status: TodoStatus.COMPLETED,
      },
    ];

    // when
    const items = await findRepository.findAll();

    // then
    expect(items).toHaveLength(mockResult.length);
    expect(items).toEqual(mockResult);
  });
});
