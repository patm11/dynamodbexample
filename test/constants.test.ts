import { BUILD_PUT_ITEM_INPUT, CREATE_TABLE_INPUT } from "../src/constants";

describe("Tests for functions in constants", () => {
  it("Can get create table input", () => {
    expect(CREATE_TABLE_INPUT).toBeTruthy();
  });

  it("Can get put item input created", () => {
    const id = "some-id";
    const date = new Date();
    const input = BUILD_PUT_ITEM_INPUT(id, date);
    expect(input).toBeTruthy();
  });
});
