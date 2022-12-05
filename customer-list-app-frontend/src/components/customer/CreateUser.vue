<template>
  /* eslint-disable */
  <div>
    <div class="col-md-12 form-wrapper">
      <h2>Create Event</h2>
      <form id="create-post-form" @submit.prevent="createEvent">
        <div class="form-group col-md-12">
          <label for="first_name">Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            name="title"
            class="form-control"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="last_name">Band</label>
          <input
            type="text"
            id="band"
            v-model="band"
            name="title"
            class="form-control"
            placeholder="Enter Band"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="email">price</label>
          <input
            type="number"
            id="price"
            v-model="price"
            name="title"
            class="form-control"
            placeholder="Enter price"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="date">Date</label>
          <input
            type="Date"
            id="date"
            v-model="date"
            name="title"
            class="form-control"
            placeholder="Enter Phone number"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Create Event</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      name: "",
      band: "",
      price: "",
      date: "",
    };
  },
  methods: {
    createEvent() {
      let eventData = {
        name: this.name,
        band: this.band,
        price: this.price,
        date: this.date,
      };
      this.__submitToServer(eventData);
    },

    __submitToServer(data) {
      console.log("hahahahahahahahahahahahahahahahahahahahahaha");
      axios
        .post(`${server.baseURL}/event`, data)
        .then((data) => {
          this.message = data.data.message;
          this.errorCredentials = false;
          setTimeout(() => {
            this.sendAlert();
            router.push({ name: "home" });
          }, 2500);
        })
        /* eslint-disable */
        .catch((error) => {
          this.errorCredentials = true;
        });

      console.log("hahahahahahahahahahahahahahahah", data);
    },
  },
};
</script>
