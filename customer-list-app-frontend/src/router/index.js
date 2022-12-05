// eslint-disable-next-line
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateUser from "../components/customer/CreateUser.vue";
import EditUser from "../components/customer/EditUser.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateUser,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
