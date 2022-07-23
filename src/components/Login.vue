<template>
    <div class="pan-form">
        <h2>Login</h2>
        <div class="col-8 mx-auto">
            <form @submit.prevent="login">
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email" placeholder="example@domain.com" v-model="mail">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="*******" v-model="pass">
                </div>
                <button type="submit">Login</button>
                <span>{{errors}}</span>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { signup, errors } from '../composables/useLogin'
export default {
    setup(props, context){
        const mail = ref('')
        const pass = ref('')

        const login = async ()=>{
            await signup(mail.value,pass.value);

            if(!errors.value){
                context.emit('login')
            }
        }

        return {mail,pass,login,errors}
    }
}
</script>

<style>

</style>