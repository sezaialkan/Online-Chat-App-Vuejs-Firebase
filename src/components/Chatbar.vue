<template>
    <div class="message-send">
        <img src="https://www.kodhocasi.com/assents/img/author/605a2cdd739b2.png" alt="Sezai Alkan">
        <input type="text" placeholder="Enter your message" @keypress.enter.prevent="send" v-model="message">
        <span>
            <i @click="send" class="fas fa-paper-plane"></i>
        </span>
    </div>
</template>

<script>
import { ref } from 'vue'
import  getUser  from '../composables/getUser'
import { date } from '../firebase/config'
import { useCollection } from '../composables/useCollection'
export default {
    setup(){
        const user = getUser;
        const message = ref('');
        const {stmt, errors} = useCollection('online-chat');
        

        const send = async()=>{

            const chat = {
                user : user.value.displayName,
                message:message.value,
                createDate: date
            }

            await stmt(chat);

            if(!errors.value){
                message.value = '';
            }else{
                message.value = errors.value;
            }

        }

        return {getUser, send, message}
    }
}
</script>

<style>

</style>