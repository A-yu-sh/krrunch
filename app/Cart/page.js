"use client";

import { CartContext } from "@/Context/UserContext";
import { useContext, useMemo } from "react";
import Image from "next/image";

import Link from "next/link";
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Cart() {
  const {
    wishList,

    cartItems,
    HandleRemoveFromCart,

    IncrementQuantity,
    DecrementQuantity,
  } = useContext(CartContext);

  const Total = useMemo(() => {
    let i = 0;

    cartItems.map((item) => {
      i = Number(i + item.Product_Price);
    });
    return i;
  }, [cartItems]);

  return (
    <div>
      {cartItems.length ? (
        <div className="flex justify-center lg:justify-start text-xl lg:text-2xl text-primary-800">{`${cartItems.length} Items in the cart `}</div>
      ) : (
        <div className="flex justify-center mt-[20%] text-xl text-primary-800">
          {`Cart is Empty`} |
          <div>
            <Link href="/cookies" className="= text-sm pl-2">
              Add something from the shop
            </Link>
          </div>
        </div>
      )}
      {}
      <div>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div>
          {cartItems.map((e) => {
            return (
              <div key={e?.ProdId} className="mt-5 relative top-14">
                <div className="absolute left-72 top-6 text-2xl   font-semibold text-primary-800">
                  {e?.Product_Title}
                </div>

                <div className="absolute left-72 top-[4rem] text-lg text-primary-800">
                  Rs. {e?.Product_Price}.00
                </div>
                <button
                  onClick={() => HandleRemoveFromCart(e?.ProdId)}
                  className="absolute left-[26.8rem] top-[7.2rem] text-lg text-primary-800 ">
                  remove
                </button>
                <button onClick={() => IncrementQuantity(e?.ProdId)}>
                  <AiOutlinePlus className="absolute h-6 w-6 text-primary-800 left-[25rem] top-[7.35rem]" />
                </button>
                <div className="text-lg text-primary-800 absolute left-[19.99rem] border-2 border-primary-800 rounded-lg px-7 top-[7.2rem]">
                  {e?.ProdQuantity}
                </div>
                <button onClick={() => DecrementQuantity(e?.ProdId)}>
                  <AiOutlineMinus className="absolute h-6 w-6 text-primary-800 left-[18rem] top-[7.35rem]" />
                </button>
                <div>
                  <div className="absolute text-2xl text-primary-800 left-[85%]  top-[7.2rem]">
                    Rs. {e?.Product_Price * e?.ProdQuantity}.00
                  </div>
                  <Image
                    src={e?.Product_Image}
                    height={5000}
                    width={5000}
                    alt={e?.Product_Title}
                    className="rounded-lg w-[17rem] h-[10rem]"
                    priority={true}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="mt-32" />
      <div className="text-2xl flex justify-start font-semibold mt-4 text-primary-800">
        <p>SubTotal :</p>
        <p>{Total}</p>
      </div>
      <p className="text-sm  text-primary-800">
        All inclusive of taxes and delivery.
      </p>
      <span className="flex justify-end text-2xl font-semibold  text-primary-800"></span>
      {cartItems.length > 0 ? (
        <div className="flex justify-center text-white font-bold text-3xl bg-secondary-800 py-3 mt-6 rounded-lg">
          <button>Place Order</button>
        </div>
      ) : (
        <div className="flex justify-center text-black font-bold text-3xl bg-gray-300 py-3 mt-6 rounded-lg">
          <button disabled>Cart Empty</button>
        </div>
      )}
    </div>
  );
}
