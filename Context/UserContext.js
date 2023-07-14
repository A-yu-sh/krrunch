"use client";

import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "@/Firebase/config";
import { GetSingleData } from "@/app/api/page";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //
  //
  // Adding Product Into The Cart
  //
  //

  const HandleAddToCart = (e) => {
    let cpyCartItems = [...cartItems];
    const findItemsInCart = cpyCartItems.findIndex(
      (prod) => prod.ProdId === e.ProdId
    );
    if (findItemsInCart === -1) {
      cpyCartItems.push(e);
    }

    setCartItems(cpyCartItems);

    localStorage.setItem("CartProducts", JSON.stringify(cpyCartItems));
  };

  //
  //
  // Removing Product From The Cart
  //
  //

  const HandleRemoveFromCart = (prodId) => {
    console.log(prodId);
    let cpyCartItems = [...cartItems];
    cpyCartItems = cpyCartItems.filter((item) => item.ProdId !== prodId);
    setCartItems(cpyCartItems);

    localStorage.setItem("CartProducts", JSON.stringify(cpyCartItems));
  };

  //
  //
  // Handling Local Storage
  //
  //
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("CartProducts")) || []);
  }, []);

  //
  //
  // Increment and Decrement
  //
  //

  const IncrementQuantity = (prodId) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        prodId === item?.ProdId
          ? { ...item, ProdQuantity: item.ProdQuantity + 1 }
          : item
      )
    );
    localStorage.setItem("CartProducts", JSON.stringify(cartItems));
  };

  const DecrementQuantity = (prodId) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        prodId === item?.ProdId && item.ProdQuantity > 0
          ? { ...item, ProdQuantity: item.ProdQuantity - 1 }
          : item
      )
    );
  };
  //
  //
  //  Handling User Sign Up
  //
  //
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const SignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        console.log(users);
        setUser({
          name: users.displayName,
          photo: users.photoURL,
          email: users.email,
          id: users.uid,
        });
        setLoggedIn(true);
      } else setLoggedIn(false);
    });
  }, []);

  const SignOut = (auth) => {
    signOut(auth);
    setLoggedIn(false);
  };

  //
  //
  // Handling Recents
  //
  //
  const [recents, setRecents] = useState([]);
  const AddRecents = (Product) => {
    let newRecent = [...recents];
    const ifItemisViewed = newRecent.findIndex(
      (e) => e.ProdId === Product.ProdId
    );
    if (ifItemisViewed === -1) {
      newRecent.push(Product);
    }
    setRecents(newRecent);
    localStorage.setItem("recently_viewed", JSON.stringify(newRecent));
  };

  return (
    <CartContext.Provider
      value={{
        SignOut,
        AddRecents,
        user,
        loggedIn,
        SignIn,
        cartItems,
        HandleAddToCart,
        HandleRemoveFromCart,
        IncrementQuantity,
        DecrementQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};
