import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue"
import { auth } from "../firebase/config";

const errors = ref(null);

const signup = async (mail,pass)=>{

    try{

        const stmt = await signInWithEmailAndPassword(auth, mail, pass);

        if(!stmt){
            throw new Error('Failed to login');
        }

        errors.value = null

        return stmt;

    }catch(error){

        errors.value = error.message;

    }

}

export {signup, errors}