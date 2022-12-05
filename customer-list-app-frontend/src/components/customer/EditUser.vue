<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">
          View All Events
        </button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit Event</h2>
      <form id="create-post-form" @submit.prevent="editCustomer()">
        <div class="form-group col-md-12">
          <label for="first_name">name</label>
          <input
            type="text"
            id="name"
            v-model="this.event.name"
            name="title"
            class="form-control"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="last_name">band</label>
          <input
            type="text"
            id="band"
            v-model="this.event.band"
            name="title"
            class="form-control"
            placeholder="Enter band"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="email">price</label>
          <input
            type="number"
            id="price"
            v-model="this.event.price"
            name="title"
            class="form-control"
            placeholder="Enter price"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="phone_number">date</label>
          <input
            type="date"
            id="date"
            v-model="this.event.date"
            name="title"
            class="form-control"
            placeholder="Enter date"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit Event</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: "",
      event: [],
      // name: "",
      // band: "",
      // price: "",
      // date: "",
    };
  },
  mounted() {
    this.name = this.$route.params.name;
    this.getCustomer();
  },
  methods: {
    editCustomer(id) {
      let eventData = {
        id: this.event.id,
        name: this.event.name,
        band: this.event.band,
        price: this.event.price,
        date: this.event.date,
      };

      axios
        .put(`${server.baseURL}/event/${id}`, eventData)
        .then((eventData) => {
          console.log("BBBBBBBBBBBBBBBBBBBBBB", eventData);
        });
    },

    getCustomer(id) {
      axios.get(`${server.baseURL}/event/${id}`).then((data) => {
        console.log("CCCCCCCCCCCCCCCCCCCCCCCC", data);
      });
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>
