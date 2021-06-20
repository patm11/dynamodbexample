import { exampleApp } from "../../src/exampleApp";
import { mocked } from "ts-jest/utils";
import { setupEndpoints } from "../../src/controller/controller";
import { requestHandlers } from "../../src/controller/requestHandlers";

jest.mock("../../src/exampleApp");
jest.mock("../../src/controller/requestHandlers");
const exampleAppMock = mocked(exampleApp);
const reqHandlersMock = mocked(requestHandlers);

describe("Controller tests", () => {
  beforeEach(() => {
    exampleAppMock.mockClear();
    reqHandlersMock.getItemGET.mockClear();
    reqHandlersMock.createItemPOST.mockClear();
    reqHandlersMock.getItemGET.mockClear();
  });

  it("Expected endpoints are setup", () => {
    setupEndpoints();

    console.log(JSON.stringify(new Date().getDate()));

    expect(exampleAppMock.get).toBeCalledWith(
      "/",
      expect(reqHandlersMock.appHeartBeatGET).toBeCalled()
    );

    expect(exampleAppMock.post).toBeCalledWith(
      "/item",
      expect(reqHandlersMock.createItemPOST).toBeCalled()
    );
  });
});
