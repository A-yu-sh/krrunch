// This page is getting the data from firebase and passing the data to <OneProductPage /> as props

import { GetSingleData, GetDataFromFirestore } from "@/app/api/page";
import OneProductPage from "./OneProductPage";

export default async function OneProductPageData({ params }) {
  const id = params.id;
  const SingleData = GetSingleData(id);
  const [cookie] = await Promise.all([SingleData]);
  let boxofcookie = [cookie];

  return (
    <div>
      <OneProductPage products={boxofcookie} />
    </div>
  );
}
