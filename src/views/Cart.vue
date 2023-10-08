<script setup>
import { useCartListStore } from "../store/cartList";
import { useOrderListStore } from "../store/orderList";


const cartList = useCartListStore();
const orderList = useOrderListStore();

const submit = () => {
  orderList.addOrder(cartList.listCart);
  cartList.$reset();
};
</script>
<template>
  <h1 class="text-center py-2 px-4">Cart</h1>

  <div class="container mb-2 mx-auto">
    <div class="table-card">
      <table
        class="w-full bg-coffee text-white table-auto"
        aria-describedby="listBooking"
      >
        <thead>
          <tr>
            <th class="px-4 py-2">#</th>
            <th class="px-4 py-2">Picture</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Booker's Name</th>
            <th class="px-4 py-2">Booking Date</th>
            <th class="px-4 py-2">Phone Number</th>
            <th class="px-4 py-2">Booking Time</th>
            <th class="px-4 py-2">Bookings</th>
            <th class="px-4 py-2">Price</th>
            <th class="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart, index) in cartList.listCart" :key="index">
            <td class="px-4 py-2">{{ index + 1 }}</td>
            <td class="px-4 py-2">
              <img
                :src="cart?.img"
                class="w-full fixed-image-height rounded-t-lg"
                alt="..."
              />
            </td>
            <td class="px-4 py-2">{{ cart?.name }}</td>
            <td class="px-4 py-2">{{ cart?.bookerName }}</td>
            <td class="px-4 py-2">{{ cart?.bookingDate }}</td>
            <td class="px-4 py-2">{{ cart?.phoneNumber }}</td>
            <td class="px-4 py-2">{{ cart?.bookingTime }}</td>
            <td class="px-4 py-2">{{ cart?.numBookings }}</td>
            <td class="px-4 py-2">{{ cart?.price }}</td>
            <td class="px-4 py-2">
              <button
                type="button"
                class="rounded-lg"
                @click="cartList.removeCart(index)"
              >
                remove
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="8" class="text-right px-4 py-2">Total</td>
            <td class="px-4 py-2">{{ cartList.totalPrice }}</td>
            <td class="px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
      <div class="my-3 mx-2" v-if="cartList.lengthCart">
        <button type="button" class="block w-full bg-[#cca783]" @click="submit()">submit</button>
      </div>
    </div>
  </div>
</template>
