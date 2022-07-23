import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { ref } from "vue";
import { db } from "../firebase/config";

const getCollection = (e)=>{

    const docu = ref(null);
    const errors = ref(null);

    const stmt = query(collection(db, e),orderBy('createDate'))

    let snap = onSnapshot(stmt, (i)=>{

        let conc = [];

        i.forEach((doc)=>{
            doc.data().createDate && conc.push({...doc.data(),id:doc.id})
            // console.log({...doc.data()})
        })

        docu.value = conc ;

    })

    return {errors, docu}

}

export {getCollection}