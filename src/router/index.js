import Vue from "vue";
import VueRouter from "vue-router";
import Registration from '../components/registration/Registration';
import Project from '../components/project/Project';


Vue.use(VueRouter);

const routes = [
  {
    path: "/registration",
    name: "registration",
    component: Registration
  },
  {
    path: "/project",
    name: "project",
    component: Project
  },

];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
