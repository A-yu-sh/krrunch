import { db } from "@/Firebase/config";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";

export async function GetDataFromFirestore() {
  const ProductRef = await getDocs(collection(db, "Products"));
  const ProductSnap = ProductRef.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return ProductSnap;
}

export async function GetSingleData(id) {
  const DataRef = doc(db, "Products", id);
  const DataSnap = await getDoc(DataRef);
  const FinalData = DataSnap.data();
  return FinalData;
}
