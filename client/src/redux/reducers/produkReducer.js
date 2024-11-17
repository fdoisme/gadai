import { addProduk, allProduk } from "../actions/produkAction";

const initialState = {
    allProduk: [],
    detailProduk: {},
    addProduk: {},
    updateProduk: {},
    deleteProduk: {},
};

export default function produkReducer(state = initialState, action) {
    switch (action.type) {
        case "produk/allProduk":
            return { ...state, allProduk: action.payload };
        case "produk/searchProduk":
            return { ...state, allProduk: action.payload };
        case "produk/detailProduk":
            return { ...state, detailProduk: action.payload };
        case "produk/addProduk":
            return { ...state, addProduk: action.payload };
        case "produk/updateProduk":
            return { ...state, updateProduk: action.payload };
        case "produk/deleteProduk":
            return { ...state, deleteProduk: action.payload };
        default:
            return state
    }
}