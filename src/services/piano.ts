// Firestore CRUD helpers
import { db } from "../firebase/firebase"
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"

const pianosCollection = collection(db, "pianos");

// CREATE
export const addPiano = async (piano: {
  position: [number, number];
  quality: number;
  inTune: boolean;
  access: string;
  notes: string;
  addedBy: string;
}) => {
  try {
    const docRef = await addDoc(pianosCollection, piano);
    console.log("Document Written with docRef.id");
    return docRef.id;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// READ
export const getAllPianos = async () => {
  try {
    const snapshot = await getDocs(pianosCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error("Error fetching pianos: ", err);
    throw err;
  }
};

// UPDATE
export const updatePiano = async (id: string, updates: Partial<{
  position: [number, number];
  quality: number;
  inTune: boolean;
  access: string;
  notes: string;
  addedBy: string;
}>) => {
  try {
    const docRef = doc(db, "pianos", id);
    await updateDoc(docRef, updates);
  } catch (err) {
    console.error("Error upating Piano: ", err);
    throw err;
  }
}

// DELETE
export const deletePiano = async (id: string) => {
  try {
    const docRef = doc(db, "pianos", id);
    await deleteDoc(docRef);
    console.log(`Piano ${id} deleted successfully.`);
  } catch (err) {
    console.error("Error deleting piano: ", err);
    throw err;
  }
};