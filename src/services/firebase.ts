import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/* const {
    VITE_FIREBASE_API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
} = import.meta.env; */

const firebaseConfig = {
    apiKey: "AIzaSyBcoAwSlRFMrNw8UQimOyhjU_TOT81WrLI",
    authDomain: "olx-react-f4514.firebaseapp.com",
    projectId: "olx-react-f4514",
    storageBucket: "olx-react-f4514.appspot.com",
    messagingSenderId: "1054047450999",
    appId: "1:1054047450999:web:4713f7adec201d8b6e5372",
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export default app;
export const auth: Auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

/* export async function getAds() {
    try {
        const querySnapshot = await getDocs(collection(db, "ads"));
        const dataArray: [] = [];
        console.log(querySnapshot);

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data["id"] = doc.id;
            // @ts-ignore
            dataArray.push(data);
        });
        return dataArray;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
} */
