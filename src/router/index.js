import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Skill from "../views/Skill.vue";
import Experience from "../views/Experience.vue";
import Projects from "../views/Projects.vue";
import Blog from "../views/Blog.vue";
import BlogPage from "../views/BlogPage.vue";
import BlogDetails from "../views/BlogDetails.vue";
import Contact from "../views/Contact.vue";
Vue.use(VueRouter);
/* eslint-disable */
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/Skill",
        name: "Skill",
        component: Skill,
    },
    {
        path: "/Experience",
        name: "Experience",
        component: Experience,
    },
    {
        path: "/Projects",
        name: "Projects",
        component: Projects,
    },
    {
        path: "/Blog",
        name: "Blog",
        component: Blog,
    },
    {
        path: "/BlogPage",
        name: "BlogPage",
        component: BlogPage,
    },
    {
        path: "/BlogDetails",
        name: "BlogDetails",
        component: BlogDetails,
    },
    {
        path: "/Contact",
        name: "Contact",
        component: Contact,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;