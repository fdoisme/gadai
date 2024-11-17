package com.gadai.gadai.validators;

import com.gadai.gadai.exceptions.ClientException;
import com.gadai.gadai.repos.ProdukRepo;

public class ProdukValidator {

    public static void isUniqueId(String id, ProdukRepo produkRepo) throws ClientException {
        if (produkRepo.existsById(id)) {
            throw new ClientException("Id Sudah Terdaftar");
        }
    }

    public static void isIdExist(String id, ProdukRepo produkRepo) throws ClientException {
        if (!produkRepo.existsById(id)) {
            throw new ClientException("Id Tidak Ditemukan");
        }
    }
}
