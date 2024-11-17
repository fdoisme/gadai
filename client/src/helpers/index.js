export function convertToForm(obj) {
    obj.ltv *= 100
    obj.jasaPenyimpanan *= 100
    obj.dendaKeterlambatan *= 100
    if (obj.adminTutupType == "PERSEN") {
        obj.adminTutup *= 100
    }
    if (obj.adminBukaType == "PERSEN") {
        obj.adminBuka *= 100
    }
    return obj
}
export function convertToAPI(obj) {
    obj.ltv /= 100
    obj.jasaPenyimpanan /= 100
    obj.dendaKeterlambatan /= 100
    if (obj.adminTutupType == "PERSEN") {
        obj.adminTutup /= 100
    }
    if (obj.adminBukaType == "PERSEN") {
        obj.adminBuka /= 100
    }
    return obj
}
export function convertToDataTable(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.ltv *= 100
        element.jasaPenyimpanan *= 100
        element.dendaKeterlambatan *= 100
        if (element.adminTutupType == "PERSEN") {
            element.adminTutup *= 100
        }
        if (element.adminBukaType == "PERSEN") {
            element.adminBuka *= 100
        }
    }
    return array
}

// export function convertSomeProduk(data, currentPage = 1) {
//     console.log("MASUK HELPERS", data);
//     obj = {
//         currentPage: currentPage,
//         maxPage: 1,
//         data: data
//     }
//     if (data.length != 0 && !data && data.length > 5) {
//         obj.maxPage = Math.ceil(data.length / 5)
//         start = currentPage * 5 - 5
//         end = currentPage * 5
//         temp = []
//         for (let i = start; i < end; i++) {
//             const element = data[i];
//             temp.push(element)
//         }
//     }
//     return obj
// }
export function createPagination(data, currentPage = 1) {
    let obj = {
        currentPage: currentPage,
        maxPage: 1,
        data: data
    }
    if (data.length != 0 && data && data.length > 5) {
        obj.maxPage = Math.ceil(data.length / 5)
        let start = currentPage * 5 - 5
        let end = currentPage == obj.maxPage ? data.length : currentPage * 5
        let temp = []
        for (let i = start; i < end; i++) {
            const element = data[i];
            temp.push(element)
        }
        obj.data = temp
    }
    // console.log("MASUK HELPERS", obj);
    return obj
}
export function generateQuerySearch(obj) {
    let query = "?"
    let arrKey = Object.getOwnPropertyNames(obj)
    for (let i = 0; i < arrKey.length; i++) {
        const key = arrKey[i];
        if (obj[key]) {
            query += key + "=" + obj[key] + "&"
        }
    }
    query = query.trim().slice(0, query.length - 1)
    if (query == "?") {
        return ""
    }
    return query
}
