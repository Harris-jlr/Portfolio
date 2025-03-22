import { createRouter , createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import services from '../views/services.vue'
import schedule from '../views/schedule.vue'
import history from '../views/history.vue'
import contact from '../views/contact.vue'
import promo from '../views/promo.vue'
import graphics from '../views/graphics.vue'
import websites from '../views/websites.vue'
import journey from '../views/journey.vue'
import skills from '../views/skills.vue'
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
