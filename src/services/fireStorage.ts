import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

export async function uploadImage(file: any) {
    if (!file) return;

    const fileRef = ref(storage, `image/${v4()}`);
    const snapshot = await uploadBytes(fileRef, file);
    console.log(snapshot);

    return await getDownloadURL(snapshot.ref);
}
