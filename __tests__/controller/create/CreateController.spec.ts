import { CreateController } from "../../../src/controller/create/CreateController";
import { TodoElementModel } from "../../../src/model/TodoElement";
import { TodoStatus } from "../../../src/model/TodoStatus";

describe("CreateController", () => {
  let createController: CreateController;

  beforeEach(() => {
    createController = new CreateController();
  });

  it("should create new element", async () => {
    // given
    let newItem: TodoElementModel = {
      _id: "abc",
      title: "Title 1",
      description: "lorem ipsum",
      status: TodoStatus.COMPLETED,
    };

    // when
    const result = await createController.create(newItem);

    // then
    expect(result).toEqual(newItem);
  });
});
