import { convert } from "../../src/items/itemConverter";

const exampleIdValue = "someId";
const exampleDateValue = "1624500247106";
const exampleItemList = [{ date: { N: exampleDateValue }, id: { S: exampleIdValue } }];

describe("Item converter tests", () => {
  it("Can convert an item list to an item array", () => {
    const result = convert(exampleItemList)[0];

    expect(result.id).toEqual(exampleIdValue);
    expect(result.date).toEqual(new Date(Number.parseInt(exampleDateValue)));
  });
});
