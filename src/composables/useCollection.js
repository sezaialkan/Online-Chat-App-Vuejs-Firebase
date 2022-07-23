
import { doc, setDoc } from "firebase/firestore";
import { ref } from "vue";
import { db } from "../firebase/config";

const useCollection = (e)=>{

    const errors = ref('');

    const stmt = async (i)=>{

        const random = Math.round(Math.random()*1000000000);

        try {
            
            await setDoc(doc(db, e, 'a'+random),i);

        } catch (error) {
            errors.value = error.message;
        }

    }

    return {errors, stmt}

}

export {useCollection}