exports.id = 248;
exports.ids = [248];
exports.modules = {

/***/ 97892:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 94530));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95568))

/***/ }),

/***/ 93277:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 94530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95568);
/* harmony import */ var _Firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75229);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19722);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Navbar() {
    const { SignIn, SignOut, loggedIn, user, cartItems } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context_UserContext__WEBPACK_IMPORTED_MODULE_3__.CartContext);
    const len = cartItems.length;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: `flex justify-center mt-5 text-4xl text-primary-800 `,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    children: "Krrunch."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                class: " text-secondary-800 font-bold absolute -top-[0.2]  lg:ml-[47.9rem]  text-center text-[14px] leading-none ",
                children: len > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: len
                }) : null
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: " flex justify-center text-sm lg:text-xl mt-3 gap-x-20 text-primary-800 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "hover:text-secondary-800",
                        children: "Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/cookies",
                        className: "hover:text-secondary-800",
                        children: "Shop"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/Cart",
                        className: "hover:text-secondary-800 text-2xl ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__/* .AiOutlineShoppingCart */ .nxQ, {}),
                            " "
                        ]
                    }),
                    loggedIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>SignOut(_Firebase_config__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                            src: user.photo,
                            alt: "user image",
                            width: 25,
                            height: 25,
                            className: "rounded-xl  "
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: SignIn,
                        children: "log in"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 95568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CartContext: () => (/* binding */ CartContext),
  CartProvider: () => (/* binding */ CartProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 3 modules
var dist = __webpack_require__(68166);
// EXTERNAL MODULE: ./Firebase/config.js
var config = __webpack_require__(75229);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.mjs + 2 modules
var firestore_dist = __webpack_require__(76853);
;// CONCATENATED MODULE: ./app/api/page.js


async function GetDataFromFirestore() {
    const ProductRef = await getDocs(collection(db, "Products"));
    const ProductSnap = ProductRef.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id
        }));
    return ProductSnap;
}
async function GetSingleData(id) {
    const DataRef = doc(db, "Products", id);
    const DataSnap = await getDoc(DataRef);
    const FinalData = DataSnap.data();
    return FinalData;
}

;// CONCATENATED MODULE: ./Context/UserContext.js
/* __next_internal_client_entry_do_not_use__ CartContext,CartProvider auto */ 




const CartContext = /*#__PURE__*/ (0,react_.createContext)();
const CartProvider = ({ children })=>{
    const [cartItems, setCartItems] = (0,react_.useState)([]);
    //
    //
    // Adding Product Into The Cart
    //
    //
    const HandleAddToCart = (e)=>{
        let cpyCartItems = [
            ...cartItems
        ];
        const findItemsInCart = cpyCartItems.findIndex((prod)=>prod.ProdId === e.ProdId);
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
    const HandleRemoveFromCart = (prodId)=>{
        console.log(prodId);
        let cpyCartItems = [
            ...cartItems
        ];
        cpyCartItems = cpyCartItems.filter((item)=>item.ProdId !== prodId);
        setCartItems(cpyCartItems);
        localStorage.setItem("CartProducts", JSON.stringify(cpyCartItems));
    };
    //
    //
    // Handling Local Storage
    //
    //
    (0,react_.useEffect)(()=>{
        setCartItems(JSON.parse(localStorage.getItem("CartProducts")) || []);
    }, []);
    //
    //
    // Increment and Decrement
    //
    //
    const IncrementQuantity = (prodId)=>{
        setCartItems((cartItems)=>cartItems.map((item)=>prodId === item?.ProdId ? {
                    ...item,
                    ProdQuantity: item.ProdQuantity + 1
                } : item));
        localStorage.setItem("CartProducts", JSON.stringify(cartItems));
    };
    const DecrementQuantity = (prodId)=>{
        setCartItems((cartItems)=>cartItems.map((item)=>prodId === item?.ProdId && item.ProdQuantity > 0 ? {
                    ...item,
                    ProdQuantity: item.ProdQuantity - 1
                } : item));
    };
    //
    //
    //  Handling User Sign Up
    //
    //
    const [user, setUser] = (0,react_.useState)({});
    const [loggedIn, setLoggedIn] = (0,react_.useState)(false);
    const SignIn = ()=>{
        (0,dist/* signInWithPopup */.rh)(config/* auth */.I, config/* provider */.A).then((result)=>{}).catch((err)=>{
            console.log(err);
        });
    };
    (0,react_.useEffect)(()=>{
        (0,dist/* onAuthStateChanged */.Aj)(config/* auth */.I, (users)=>{
            if (users) {
                console.log(users);
                setUser({
                    name: users.displayName,
                    photo: users.photoURL,
                    email: users.email,
                    id: users.uid
                });
                setLoggedIn(true);
            } else setLoggedIn(false);
        });
    }, []);
    const SignOut = (auth)=>{
        (0,dist/* signOut */.w7)(auth);
        setLoggedIn(false);
    };
    //
    //
    // Handling Recents
    //
    //
    const [recents, setRecents] = (0,react_.useState)([]);
    const AddRecents = (Product)=>{
        let newRecent = [
            ...recents
        ];
        const ifItemisViewed = newRecent.findIndex((e)=>e.ProdId === Product.ProdId);
        if (ifItemisViewed === -1) {
            newRecent.push(Product);
        }
        setRecents(newRecent);
        localStorage.setItem("recently_viewed", JSON.stringify(newRecent));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(CartContext.Provider, {
        value: {
            SignOut,
            AddRecents,
            user,
            loggedIn,
            SignIn,
            cartItems,
            HandleAddToCart,
            HandleRemoveFromCart,
            IncrementQuantity,
            DecrementQuantity
        },
        children: children
    });
};


/***/ }),

/***/ 75229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ provider),
/* harmony export */   I: () => (/* binding */ auth)
/* harmony export */ });
/* unused harmony export db */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31288);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76853);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68166);
// Import the functions you need from the SDKs you need



const firebaseConfig = {
    apiKey: "AIzaSyADdk9ppiFdOZz1FQJ8Ou3iRLt9ok3sBg0",
    authDomain: "krrunch-2461d.firebaseapp.com",
    projectId: "krrunch-2461d",
    storageBucket: "krrunch-2461d.appspot.com",
    messagingSenderId: "1052995900292",
    appId: "1:1052995900292:web:c6284396600f5a409d43d1"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getFirestore */ .ad)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .getAuth */ .v0)(app);
const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .GoogleAuthProvider */ .hJ();


/***/ }),

/***/ 97843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(88564);
var target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./Components/navbar.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\DELL\OneDrive\Documents\Code\Next\krrunch\Components\navbar.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navbar = (__default__);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(92817);
;// CONCATENATED MODULE: ./Components/Container.js

const Container = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "pl-8 pr-8 max-w-[1440px] mx-auto",
        children: children
    });
};
/* harmony default export */ const Components_Container = (Container);

;// CONCATENATED MODULE: ./Context/UserContext.js

const UserContext_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\DELL\OneDrive\Documents\Code\Next\krrunch\Context\UserContext.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: UserContext_esModule, $$typeof: UserContext_$$typeof } = UserContext_proxy;
const UserContext_default_ = UserContext_proxy.default;

const e0 = UserContext_proxy["CartContext"];

const e1 = UserContext_proxy["CartProvider"];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(34834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./Components/footer.js


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "text-gray-600 body-font mt-20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-3 text-xl",
                        children: "Krrunch"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",
                    children: [
                        "\xa9 2023 Next —",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://instagram.com/Ayush.404_",
                            className: "text-gray-600 ml-1",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "@Ayush"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
                    children: "Developed Using Next/React Framework"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/layout.js







const metadata = {
    title: "Krrunch",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Components_Container, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                            className: "fixed"
                        }),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 92817:
/***/ (() => {



/***/ })

};
;