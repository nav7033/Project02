// import { createStore} from 'redux';
// import reducers from "./reducers/index";



// export default function configureStore() {
//     const store = createStore(reducers());
//     return store;
//   }


import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/productReducers";

export default configureStore ({
    reducer: reducers
})

