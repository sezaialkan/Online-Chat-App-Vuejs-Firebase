<template>
    <div class="nav-bar">
        <h1>Online Chat</h1>
        <span v-show="status">
            <i @click="logout" class="fas fa-power-off"></i>
        </span>
    </div>
</template>

<script>
import { auth } from '../firebase/config'
import { useRouter } from 'vue-router'
import { signOut } from '@firebase/auth'
import { ref } from 'vue'
export default {
    setup(){
        const router = useRouter();
        const status = ref(true)

        if(!auth.currentUser){
            status.value = false
        }

        const logout = async ()=>{
            await signOut(auth).then(()=>{
                status.value = false
                router.push('/');
            }).catch((err)=>console.log(err));
        }

        return {logout, status}
    }
}
</script>

<style>

</style>