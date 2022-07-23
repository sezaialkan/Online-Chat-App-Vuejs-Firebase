import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '../firebase/config'
import HomeView from '../views/HomeView.vue'
import ChatView from '../views/ChatView.vue'


const controlAuth = (to,from,next)=>{

  const user = auth.currentUser;

  if(!user){
    next({name:'home'})
  }else{
    next()
  }

}

const controlAuthTwo = (to,from,next)=>{

  const user = auth.currentUser;

  if(user){
    next({name:'chatroom'})
  }else{
    next()
  }

}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: controlAuthTwo
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component : ChatView,
      beforeEnter : controlAuth
    }
  ]
})

export default router
