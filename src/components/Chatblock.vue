<template>
    <div class="message-body" ref="drim">
        <div v-if="errors">
            {{errors}}
        </div>
        <div v-if="docu">
        <span v-show="false">{{pptwo=0 }}{{ ppone=0}}</span>
            <div v-for="docum in docu" :key="docum.id" :class="{messageReverse: docum.user == getUser.displayName, message: docum.user != getUser.displayName}"> 
            
                <div v-if="docum.user != getUser.displayName">
                   <span v-show="false">{{pptwo=0}}</span> 
                    <img v-if="ppone == 0" src="https://www.kodhocasi.com/assents/img/author/605a2cdd739b2.png" alt="Sezai Alkan">
                    <span v-show="false">{{ppone++}}</span>
                </div>
                <div v-if="docum.user == getUser.displayName">
                    <span v-show="false">{{ppone=0}}</span>
                    <img v-if="pptwo == 0" src="https://www.kodhocasi.com/assents/img/author/605a2cdd739b2.png" alt="Sezai Alkan">
                    <span v-show="false">{{pptwo++}}</span>
                </div>
                <div class="message-inner" :class="{'reverse-right': pptwo > 1, 'reverse-left': ppone > 1}">
                    <p>{{docum.message}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onUpdated, ref } from 'vue'
import { getCollection } from '../composables/getCollection'
import getUser from '../composables/getUser';
export default {
    setup(){
        const {errors,docu} = getCollection('online-chat');
        let ppone, pptwo;
        const drim = ref(null)
        onUpdated(()=>{
            drim.value.scrollTop = drim.value.scrollHeight;
        })


        return { errors, docu, drim, getUser, ppone, pptwo}
    }
}
</script>

<style scoped>
.reverse-right{
    margin-right: 60px!important;
    margin-top: -15px;
}
.reverse-left{
    margin-left: 60px!important;
    margin-top: -15px;
}

</style>