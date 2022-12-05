<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Nest Event List App Tutorial</h1>
      <p>Built with Nest.js, Vue.js, and MongoDB</p>
      <div v-if="events.length === 0">
        <h2>No event found at the moment</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Band</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.name">
            <td>{{ event.name }}</td>
            <td>{{ event.band }}</td>
            <td>{{ event.price }}</td>
            <td>{{ event.date }}</td>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px">
                  <router-link
                    :to="{ name: 'edit', params: { id: event._id } }"
                    class="btn btn-sm btn-outline-secondary"
                    >Edit Event</router-link
                  >
                  <button
                    class="btn btn-sm btn-outline-secondary"
                    v-on:click="deleteCustomer(event.name)"
                  >
                    Delete Event
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      id: 0,
      events: [],
      name: "",
      band: "",
      price: Number,
      date: Date,
    };
  },
  mounted() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      axios
        .get(`${server.baseURL}/event/`)
        .then((data) => (this.events = data.data));
    },
    deleteCustomer(name) {
      axios.delete(`${server.baseURL}/event/${name}`).then((data) => {
        console.log(data);
        window.location.reload();
      });
    },
  },
};
</script>