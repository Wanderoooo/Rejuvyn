import firebase_app from '../config';
import React from 'react';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}


export const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({user: null});
export const useAuthContext = () => React.useContext(AuthContext);


export const AuthContextProvider = ({
    children,
} : Props) => {
    const [user, setUser] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};