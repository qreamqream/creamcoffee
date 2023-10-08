import { defineStore } from "pinia";

export const useOrderListStore = defineStore({
  id: "orderList",
  state: () => ({
    order: [],
  }),
  getters: {
    listOrder() {
      return this.order;
    },
    lengthOrder() {
      return this.order.length;
    },
  },
  actions: {
    addOrder(order) {
      this.order.push(...order);
    },
  },
});
