import { combineReducers, applyMiddleware, legacy_createStore as createStore } from "redux";
import produkReducer from "./reducers/produkReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    produk: produkReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store