import { atom } from "recoil";
import { localStorageEffect } from "../utils/storage";

interface CartItem extends Product {
  quantity: number;
}

const cartListState = atom({
  key: "cartListState",
  default: [] as CartItem[],
  effects: [localStorageEffect("cart_list")],
});

export { cartListState };
