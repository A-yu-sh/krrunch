"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "@/Context/UserContext";
import HeadChefNote from "@/Components/HeadChefNote";
export default function OneProductPage({ products }) {
  const { cartItems, HandleAddToCart, isInCart } = useContext(CartContext);

  return (
    <div>
      <div>
        {products.map((e) => {
          return (
            <div key={e?.ProdId}>
              <div className="lg:grid lg:grid-cols-2 mt-24">
                <div className="flex justify-center">
                  {
                    <Image
                      src={e.Product_Image}
                      height={500}
                      width={500}
                      alt={e?.Product_Title}
                      priority={true}
                      className="w-[28rem] h-[32rem] rounded-lg"
                    />
                  }
                </div>
                <div>
                  <div className=" text-4xl max-w-[23ch] font-bold text-center lg:text-start md:text-start text-primary-800">
                    {e?.Product_Title}
                  </div>
                  <div className="flex justify-center lg:justify-start md:justify-start mt-7 text-2xl font-semibold text-primary-800">
                    $ {e?.Product_Price}
                  </div>
                  <p className="text-sm text-primary-800 my-8">
                    Our {e?.Product_Title} is 100% eggless
                  </p>
                  <div className="max-w-[44ch] text-primary-800 opacity-90 mt-5 text-center lg:text-start md:justify-center md:text-start leading-8">
                    {e?.Product_Desc}
                  </div>

                  <div className=" flex justify-center lg:justify-start md:justify-start">
                    <button
                      disabled={
                        cartItems.findIndex(
                          (item) => item?.ProdId === e?.ProdId
                        ) !== -1
                      }
                      className=" p-5 px-32 mt-8 bg-secondary-800 opacity-100 hover:opacity-100 text-white font-bold rounded-lg disabled:bg-gray-400"
                      onClick={() => {
                        HandleAddToCart(e);
                      }}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="border-2 border-gray-300 mt-32">
          {" "}
          <div>
            <section className="text-gray-600 body-font">
              <div className="container px-5 mt-14  mx-auto flex flex-wrap">
                <h2 className="sm:text-3xl text-2xl  text-primary-800 font-medium title-font mt-7 md:w-2/5">
                  Our Product Highlights |
                </h2>
                <div className="md:w-3/5 md:pl-6">
                  <p className="leading-relaxed text-base text-primary-800 opacity-90">
                    100% eggless cookies. A single order of this would contain
                    10 cookies (~52 gms, 9-10 cm dia each), all of which would
                    be individually wrapped. Price mentioned is inclusive of all
                    taxes. No other hidden charges.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <hr className="mt-16" />
          {/* 
       
       //  */}
          <div>
            <section className="text-gray-600 body-font">
              <div className="container px-5 mt-14 mb-14  mx-auto flex flex-wrap">
                <div className="md:w-3/5 md:pl-6">
                  <p className="leading-relaxed text-base text-primary-800 opacity-90">
                    Orders placed before 2 PM are shipped the same day except on
                    Sunday via Bluedart or Delhivery. All our orders get
                    dispatched within 24 hours and reach to you within 3-5 days.
                    Orders to metros reach even faster. Reach out to us know the
                    exact timeline for your location.
                  </p>
                </div>
                <h2 className="sm:text-3xl text-2xl flex justify-end text-primary-800 font-medium title-font mt-7 md:w-2/5">
                  | Our Global Shipping Policy
                </h2>
              </div>
            </section>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////// */}
        <HeadChefNote />
      </div>
    </div>
  );
}
