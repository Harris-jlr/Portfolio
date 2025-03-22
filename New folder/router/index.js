import { createRouter , createWebHistory } from 'vue-router'
import home from '/src/views/home.vue'
import about from '/src/views/about.vue'
import services from '/src/views/services.vue'
import schedule from '/src/views/schedule.vue'
import history from '/src/views/history.vue'
import contact from '/src/views/contact.vue'
import promo from '/src/views/promo.vue'
import graphics from '/src/views/graphics.vue'
import websites from '/src/views/websites.vue'
import journey from '/src/views/journey.vue'
import skills from '/src/views/skills.vue'
const routes = [
    {
        path: '/',
        name: '/',
        component: home,
     },
     {
        path: '/about',
        name: 'about',
        component: about,
     },
   {
      path: '/services',
      name: 'services',
      component: services,
   },
   {
      path: '/schedule',
      name: 'schedule',
      component: schedule,
   },
   {
      path: '/history',
      name: 'history',
      component: history,
   },
   {
      path: '/contact',
      name: 'contact',
      component: contact,
   },
   {
      path: '/promo',
      name: 'promo',
      component: promo,
   },
   {
    path: '/graphics',
    name: 'graphics',
    component: graphics,
    },
    {
    path: '/skills',
    name: 'skills',
    component: skills,
    },
    {
      path: '/journey',
      name: 'journey',
      component: journey,
      },
    {
    path: '/websites',
    name: 'websites',
    component: websites,
    },
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router