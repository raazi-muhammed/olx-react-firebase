import { DocumentData, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { addType } from "@/types/modalTypes";

export async function getAds() {
    try {
        const querySnapshot = await getDocs(collection(db, "ads"));
        const dataArray: DocumentData[] = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data["id"] = doc.id;
            dataArray.push(data);
        });
        return dataArray;
    } catch (error) {
        console.error("Error fetching ads:", error);
    }
}

export async function addAddToDb(data: addType) {
    return await addDoc(collection(db, "ads"), data);
}
