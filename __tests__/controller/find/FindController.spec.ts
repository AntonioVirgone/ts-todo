import { mock } from 'jest-mock-extended';
import { FindController } from "../../../src/controller/find/FindController";
import { TodoElementModel } from "../../../src/model/TodoElement";
import { IFindService } from "../../../src/service/find/IFindService";
import { Request, Response, NextFunction } from "express";

jest.mock("../../../src/service/find/FindService");

describe("FindController", () => {
  let findController: FindController;
  // Create mock of services
  let findService: jest.Mocked<IFindService>;

  const userCode = "::userCode::"
  const req = mock<Request>();
  const res = mock<Response>();
  const next = mock<NextFunction>();

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
    const mockResult: TodoElementModel[] = await findService.findFileFromFile(userCode);
    req.headers = { "x-service-token" : "aaa" }

    // when
    const result = await findController.findFromFile(req, res, next);

    // then
    expect(result).toEqual(mockResult);
  });

  it("should return item by id", async () => {
    // given
    const itemId = "::itemId::";
    const mockResult: TodoElementModel = await findService.findById(userCode, itemId);

    // when
    const result = await findController.findById(userCode, itemId);

    // then
    expect(result).toEqual(mockResult);
  });
});

