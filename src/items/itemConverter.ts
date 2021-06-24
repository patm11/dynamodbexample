import { ItemList } from "aws-sdk/clients/dynamodb";
import { Item } from "./item";

export const convert = (itemList: ItemList): Item[] => {
  const items: Item[] = [];

  itemList.forEach((attrMap) => {
    items.push(new Item(attrMap.id.S, new Date(Number.parseInt(attrMap.date.N))));
  });

  return items;
};
