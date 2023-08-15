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
                    name: null,
                    email: email,
                    pic: null,
                    bday: null,
                    phone: null,
                    goal: 0,
                    cons: 0,

                    doctors: {
                        l_1: "Doctors",
                        l_2: "Specialty",
                        l_3: "Contact Number",
                        content: [],
                    },

                    symp: {
                        l_1: "Symptom",
                        l_2: "Description",
                        l_3: "Track on",
                        content: [],
                    },
                    med: {
                        l_1: "Name",
                        l_2: "Instruction",
                        l_3: "Period",
                        content: [],
                    },
                    app: {
                        l_1: "Physician",
                        l_2: "Date",
                        l_3: "Preparation",
                        content: [],
                    },
                    diet: {
                        l_1: "Nutrition",
                        l_2: "This Week (g)",
                        l_3: "Lifetime (g)",
                        content: [
                            {
                                name: "Vitamins",
                                week: 0,
                                total: 0,
                            },
                            {
                                name: "Carbohydrate",
                                week: 0,
                                total: 0,
                            },
                            {
                                name: "Protein",
                                week: 0,
                                total: 0,
                            },
                            {
                                name: "Fiber",
                                week: 0,
                                total: 0,
                            },
                            
                            
                    ]},

                    fit: {
                        l_1: "Exercise",
                        l_2: "This Week (h)",
                        l_3: "Lifetime (h)",
                        content: [
                        {
                            name: "Back",
                            week: 0,
                            total: 0,
                        },
                        {
                            name: "Abdominal",
                            week: 0,
                            total: 0,
                        },
                        {
                            name: "Legs",
                            week: 0,
                            total: 0,
                        },
                        {
                            name: "Arms",
                            week: 0,
                            total: 0,
                        },
                    ]},

                    record: []

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