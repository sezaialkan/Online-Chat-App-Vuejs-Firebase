<template>
    <div class="pan-form">
        <h2>Register</h2>
        <div class="col-8 mx-auto">
            <form @submit.prevent="register">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="ömerhalis" v-model="username">
                </div>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email" placeholder="example@domain.com" v-model="mail">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="*******" v-model="pass">
                </div>
                <button type="submit">Register</button>
                <span>{{errors}}</span>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { errors, signup } from '../composables/useRegister'
export default {
    setup(props, context){

        const username = ref('')
        const mail = ref('')
        const pass = ref('')

        const register = async ()=>{

            await signup(username.value,mail.value,pass.value);
            if(!errors.value){
                context.emit('register');
            }

        }

        return { username, mail, pass , register, errors}

    }
}
</script>

<style>

</style>