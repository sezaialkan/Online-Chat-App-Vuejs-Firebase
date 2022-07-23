import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '../firebase/config';

const errors = ref(null)

const signup = async (username,mail,pass)=>{

    try{

        if(username.trim() === ''){
            throw new Error ('Username cannot be empty')
        }

        const stmt = await createUserWithEmailAndPassword(auth, mail, pass);

        if(!stmt){
            throw new Error ('An error occurred while signing up');
        }

        await updateProfile(auth.currentUser, {displayName:username});

        return stmt;

    }catch(error){
        errors.value = error.message ;
    }

}

export {signup, errors}