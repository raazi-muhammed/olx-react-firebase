import { auth } from "@/services/firebase";
import {
    GoogleAuthProvider,
    User,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

interface AuthContextProps {
    signUp: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    signInWithGoogle: () => void;
    currentUser: User | null;
}
const AuthContext = React.createContext<AuthContextProps>({
    signUp: () => Promise.resolve(),
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    signInWithGoogle: () => {},
    currentUser: null,
});

export const AuthProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    function signUp(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    function logout() {
        return signOut(auth)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider
            value={{ signUp, login, logout, signInWithGoogle, currentUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
