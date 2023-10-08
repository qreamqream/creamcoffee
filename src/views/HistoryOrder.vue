<script setup>
import { useOrderListStore } from "../store/orderList";
const orderList = useOrderListStore();

</script>

<template>
  <p class="text-center text-3xl font-extrabold py-3 uppercase">order</p>

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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart, index) in orderList?.listOrder" :key="index">
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

