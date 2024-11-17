import axios from "axios";
const BASE_URL = "http://localhost:8081/produk"
export async function getAllProduk() {
    try {
        const { data } = await axios.get(BASE_URL + "/allProduk");
        // console.log("APIS", data);
        return data
    } catch (error) {
        return error.response
    }
}
export async function getSearchProduk(query) {
    try {
        const { data } = await axios.get(BASE_URL + "/searchProduk" + query);
        return data
    } catch (error) {
        return error.response
    }
}
export async function getDetailProduk(idProduk) {
    try {
        const { data } = await axios.get(BASE_URL + "/detailProduk/" + idProduk);
        return data
    } catch (error) {
        return error.response
    }
}
export async function postNewProduk(form) {
    try {
        const { data } = await axios.post(BASE_URL + "/addProduk", form);
        return data
    } catch (error) {
        return error.response
    }
}
export async function putEditProduk(form) {
    try {
        const { data } = await axios.put(BASE_URL + "/updateProduk", form);
        return data
    } catch (error) {
        return error.response
    }
}
export async function deleteProdukApi(form) {
    try {
        console.log(form, "APII");
        const data = await axios.delete(BASE_URL + "/deleteProduk", {
            data: form,
        });
        return data
    } catch (error) {
        return error.response
    }
}