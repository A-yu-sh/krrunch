exports.id = 649;
exports.ids = [649];
exports.modules = {

/***/ 13259:
/***/ (() => {



/***/ }),

/***/ 66310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GetDataFromFirestore: () => (/* binding */ GetDataFromFirestore),
  GetSingleData: () => (/* binding */ GetSingleData)
});

// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.mjs
var dist = __webpack_require__(41942);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.mjs + 2 modules
var firestore_dist = __webpack_require__(19147);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 3 modules
var auth_dist = __webpack_require__(75699);
;// CONCATENATED MODULE: ./Firebase/config.js
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
const app = (0,dist/* initializeApp */.ZF)(firebaseConfig);
const db = (0,firestore_dist/* getFirestore */.ad)(app);
const auth = (0,auth_dist/* getAuth */.v0)(app);
const provider = new auth_dist/* GoogleAuthProvider */.hJ();

;// CONCATENATED MODULE: ./app/api/page.js


async function GetDataFromFirestore() {
    const ProductRef = await (0,firestore_dist/* getDocs */.PL)((0,firestore_dist/* collection */.hJ)(db, "Products"));
    const ProductSnap = ProductRef.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id
        }));
    return ProductSnap;
}
async function GetSingleData(id) {
    const DataRef = (0,firestore_dist/* doc */.JU)(db, "Products", id);
    const DataSnap = await (0,firestore_dist/* getDoc */.QT)(DataRef);
    const FinalData = DataSnap.data();
    return FinalData;
}


/***/ })

};
;