<template>
  <div v-if="userStatus">
    <Login @login="chatStart" />
    <span class="detail">Don't have an account? <span @click="userStatus = !userStatus">Sign up</span></span>
  </div>
  <div v-else>
    <Register @register="chatStart" />
    <span class="detail">Have an account ?  <span @click="userStatus = !userStatus">Login</span></span>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import { useRouter } from 'vue-router'
export default {
    components: { Login, Register },
    setup(){
      const userStatus = ref(true)
      const router = useRouter();

      const chatStart = ()=>{
        router.push({name:'chatroom'});
      }
      return {userStatus, chatStart}
    }
}
</script>

<style scoped>
span.detail{
  text-align: center;
  display: block;
  margin-bottom: 30px;
}
span.detail span{
  color: #48b0f7;
  cursor: pointer;
}
span.detail span:hover{
  text-decoration: underline
}
</style>