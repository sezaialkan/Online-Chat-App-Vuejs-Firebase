import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config";

const getUser = ref(null);

onAuthStateChanged(auth, e=>{
    // console.log(e)
    getUser.value = e;
})

export default getUser 