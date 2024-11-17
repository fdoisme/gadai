import { deleteProdukApi, getAllProduk, getDetailProduk, getSearchProduk, putEditProduk, postNewProduk } from "../../apis/produkApi";
import { convertToAPI, convertToDataTable, convertToForm, generateQuerySearch } from "../../helpers";

export function allProduk(payload) {
    return { type: "produk/allProduk", payload: payload }
}

export function fetchAllProduk() {
    return async function (dispatch) {
        try {
            const data = await getAllProduk()
            data.data = convertToDataTable(data.data)
            dispatch(allProduk(data.data));
        } catch (error) {
            throw error;
        }
    }
}
export function searchProduk(payload) {
    return { type: "produk/searchProduk", payload: payload }
}

export function fetchSearchProduk(form) {
    return async function (dispatch) {
        try {
            console.log(form);
            const query = generateQuerySearch(form)
            const data = await getSearchProduk(query)
            data.data = convertToDataTable(data.data)
            dispatch(searchProduk(data.data));
        } catch (error) {
            throw error;
        }
    }
}
export function detailProduk(payload) {
    return { type: "produk/detailProduk", payload: payload }
}

export function fetchDetailProduk(idProduk) {
    return async function (dispatch) {
        try {
            const data = await getDetailProduk(idProduk)
            data.data = convertToForm(data.data)
            dispatch(detailProduk(data.data));
        } catch (error) {
            throw error;
        }
    }
}
export function addProduk(payload) {
    return { type: "produk/addProduk", payload: payload }
}

export function postAddProduk(form) {
    return async function (dispatch) {
        try {
            form = convertToAPI(form)
            const data = await postNewProduk(form)
            if (data.statusCode != 201) {
                convertToForm(form);
                throw data.data.msg
            }
            dispatch(addProduk(data));
            console.log(data.data);
        } catch (error) {
            throw error;
        }
    }
}
export function updateProduk(payload) {
    return { type: "produk/updateProduk", payload: payload }
}

export function putUpdateProduk(form) {
    return async function (dispatch) {
        try {
            form = convertToAPI(form)
            const data = await putEditProduk(form)
            if (data.statusCode != 201) {
                convertToForm(form);
                throw data.data.msg
            }
            dispatch(updateProduk(data));
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
export function deleteProduk(payload) {
    return { type: "produk/deleteProduk", payload: payload }
}

export function deleteProdukAction(form) {
    return async function (dispatch) {
        try {
            const data = await deleteProdukApi({ id: form })
            console.log(data);
            if (data.status != 200) {
                throw data
            }
            dispatch(deleteProduk(data));
        } catch (error) {
            throw error;
        }
    }
}
