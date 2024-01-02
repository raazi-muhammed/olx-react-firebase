import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { addType } from "@/types/modalTypes";

export async function getAds() {
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
        console.error("Error fetching ads:", error);
    }
}

export async function addAddToDb(data: addType) {
    const docRef = await addDoc(collection(db, "ads"), data);
}
