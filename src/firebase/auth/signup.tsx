import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../config";

const auth = getAuth();


export default async function signUp(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password).then(async cred => {
            return await setDoc(doc(db, "users", cred.user.uid), {
                id: cred.user.uid,
                profile: {
                    name: null,
                    email: email,
                    pic: null,
                    bday: null,
                    phone: null,
                    goal: 0,
                    cons: 0,

                    symp: [],
                    med: [],
                    diet: [],
                    fit: [],
                    app: [],
                }
            })
        })
    } catch (e) {
        error = e;
    }

    return { result, error };
}

async function createUser(auth :any, email : string, password : string) {
   let result = await createUserWithEmailAndPassword(auth, email, password);
}