import AddJob from "@/views/AddJob.vue";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import NotFound from "@/views/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/jobs",
            name: "jobs",
            component: JobsView,
        },
        {
            path: "/jobs/add",
            name: "addJob",
            component: AddJob,
        },
        {
            path: '/job/:id',
            name: 'jobDetails',
            component: JobView,
        },
        {
            path: "/:catchAll(.*)", 
            name: "NotFound",
            component: NotFound,
        },
    ],
});

export default router;