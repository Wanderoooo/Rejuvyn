'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Admin() {
    const {user} = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) {
         router.push("/signin")
        } else {
          router.push("/dashboard")
        }

    }, [user])
}

export default Admin;