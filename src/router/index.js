import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home';
import Resume from "@/views/Resume";
import Portfolio from "@/views/Portfolio";
import Contact from "@/views/Contact";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/resume",
        mame: "resume",
        component: Resume
    },
    {
        path: "/portfolio",
        name: 'portfolio',
        component: Portfolio
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    }
];

const router = new VueRouter({
    routes
});

export default router;
