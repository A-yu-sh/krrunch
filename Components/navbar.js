"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/Context/UserContext";
import { auth } from "@/Firebase/config";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  const { SignIn, SignOut, loggedIn, user, cartItems } =
    useContext(CartContext);
  const len = cartItems.length;
  return (
    <div className="">
      <h1 className={`flex justify-center mt-5 text-4xl text-primary-800 `}>
        <Link href="/">Krrunch.</Link>
      </h1>
      <span className=" text-secondary-800 font-bold absolute -top-[0.2]  lg:ml-[47.9rem]  text-center text-[14px] leading-none ">
        {len > 0 ? <div>{len}</div> : null}
      </span>
      <nav className=" flex justify-center text-sm lg:text-xl mt-3 gap-x-20 text-primary-800 ">
        <Link href="/" className="hover:text-secondary-800">
          Home
        </Link>
        <Link href="/cookies" className="hover:text-secondary-800">
          Shop
        </Link>

        <Link href="/Cart" className="hover:text-secondary-800 text-2xl ">
          <AiOutlineShoppingCart />{" "}
        </Link>

        {loggedIn ? (
          <button onClick={() => SignOut(auth)}>
            <Image
              src={user.photo}
              alt="user image"
              width={25}
              height={25}
              className="rounded-xl  "
            />
          </button>
        ) : (
          <button onClick={SignIn}>log in</button>
        )}
      </nav>
    </div>
  );
}
