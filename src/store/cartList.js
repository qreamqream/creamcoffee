import { defineStore } from "pinia";

export const useCartListStore = defineStore({
  id: "cartList",
  state: () => ({
    cart: [],
  }),
  getters: {
    listCart() {
      return this.cart;
    },
    /**
     * Returns the count value times two plus one.
     *
     * @returns {number}
     */

    lengthCart() {
      return this.cart.length;
    },
    totalPrice() {
      let total = 0;
      this.cart.forEach((item) => {
        total += item.price;
      });
      return total;
    },
  },
  actions: {
    addCart(cart) {
      this.cart.push(cart);
    },
    removeCart(index) {
      this.cart.splice(index, 1);
    },
  },
});
