import Link from "next/link";
import { GetDataFromFirestore } from "../api/page";
import Image from "next/image";

export default async function ProductPage() {
  const Products = GetDataFromFirestore();
  const [cookie] = await Promise.all([Products]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-9 mt-28 ">
      {cookie.map((e) => {
        return (
          <div
            className="border-2 border-gray-200 rounded-lg pb-4"
            key={e?.ProdId}>
            <Link href="/cookies/[id]" as={`/cookies/${e.id}`}>
              <Image
                src={e?.Product_Image}
                alt={e?.Product_Title}
                height={500}
                width={800}
                priority={true}
                className="h-64 w-84 rounded-lg rounded-b-none"
              />
              <p className="text-primary-800 text-sm mt-2 opacity-90 ml-2">
                Pack of 15 cookies
              </p>
              <div className="max-w-[22ch] text-center lg:text-start text-primary-800 flex align-middle mt-1 ml-2 font-bold">
                {e.Product_Title}
              </div>
              <span className="flex justify-center mt-2 ml-5 text-lg text-secondary-800 ">
                ${e.Product_Price}
              </span>
              <div className="flex justify-center  p-2 mt-1 bg-secondary-800 text-white font-semibold">
                <button>View Product</button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
