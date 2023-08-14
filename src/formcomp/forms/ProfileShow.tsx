import { doc, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase/config"
import { useState } from "react";

export default function ProfileShow() {
  interface Profile {
    name: string,
    email: string,
    bday: string,
    goal: number
  }
  const auth = getAuth();
  const user = auth.currentUser;

  const [profile, setProfile] = useState<Profile>({name: "", email: "", bday: "", goal: 0})

  if (user) {
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      setProfile({
        name: doc.data()?.name,
        email: doc.data()?.email,
        bday: doc.data()?.bday,
        goal: doc.data()?.goal,

      })
    });
  }

  return (
    <div>
      <h1>Your Profile Info</h1>
      <h1>Name: {profile.name}</h1>
      <h1>Email: {profile.email}</h1>
      <h1>Birthday: {profile.bday}</h1>
      <h1>Weekly Fitness Goal: {profile.goal}h</h1>
    </div>
  )
}