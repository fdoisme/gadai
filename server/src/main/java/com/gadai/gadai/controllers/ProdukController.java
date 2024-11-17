package com.gadai.gadai.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gadai.gadai.entities.ProdukEntity;
import com.gadai.gadai.exceptions.ClientException;
import com.gadai.gadai.models.ProdukModel;
import com.gadai.gadai.models.ResponseModel;
import com.gadai.gadai.services.ProdukService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(value = "/produk")
public class ProdukController {

    @Autowired
    private ProdukService produkService;

    @GetMapping(value = "/allProduk")
    public ResponseEntity<ResponseModel> doGetAllproduk() {
        // request
        List<ProdukEntity> produk = produkService.doGetAllProduk();
        ResponseModel response = new ResponseModel();
        response.setMsg("Request successfully");
        response.setStatusCode(200);
        response.setData(produk);
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "/searchProduk")
    public ResponseEntity<ResponseModel> doSearchProdukController(
            @RequestParam(required = false) String id,
            @RequestParam(required = false) String tipeProduk,
            @RequestParam(required = false) String namaProduk,
            @RequestParam(required = false) String recStatus,
            @RequestParam(required = false) Double ltv,
            @RequestParam(required = false) Double ltvSampai,
            @RequestParam(required = false) Double jasaPenyimapanan,
            @RequestParam(required = false) Double jasaPenyimpananSampai) {
        // request
        ProdukModel produk = new ProdukModel();
        System.out.printf("Ini DARI CONTROLLER Line 56 %s %s %s %s %s %s %s\n", id, tipeProduk, namaProduk, recStatus, ltv, ltvSampai, jasaPenyimapanan, jasaPenyimapanan);
        produk.setId(id);
        produk.setTipeProduk(tipeProduk);
        produk.setNamaProduk(namaProduk);
        produk.setRecStatus(recStatus);
        produk.setLtv(ltv);
        produk.setLtvSampai(ltvSampai);
        produk.setJasaPenyimpanan(jasaPenyimapanan);
        produk.setJasaPenyimpananSampai(jasaPenyimpananSampai);
        List<ProdukEntity> produks = produkService.doSearchProduk(produk);
        // response
        ResponseModel response = new ResponseModel();
        response.setMsg("Request successfully");
        response.setStatusCode(200);
        response.setData(produks);
        return ResponseEntity.ok(response);

    }

    @GetMapping(value = "/detailProduk/{id}")
    public ResponseEntity<ResponseModel> doGetDetailProdukController(@PathVariable String id) {
        // request
        ProdukEntity produk = produkService.findById(id);
        // response
        ResponseModel response = new ResponseModel();
        response.setMsg("Request successfully");
        response.setStatusCode(200);
        response.setData(produk);
        return ResponseEntity.ok(response);
    }

    @PostMapping(value = "/addProduk")
    public ResponseEntity<ResponseModel> doInsertProdukController(
            @Valid @RequestBody ProdukModel produkModel) throws ClientException {
        ProdukEntity produk = produkService.doInsert(produkModel);
        // response
        ResponseModel response = new ResponseModel();
        response.setMsg("New produk is successfully added");
        response.setStatusCode(201);
        response.setData(produk);
        return ResponseEntity.ok(response);
    }

    @PutMapping(value = "/updateProduk")
    public ResponseEntity<ResponseModel> doUpdateProdukController(
            @Valid @RequestBody ProdukModel produkModel) throws ClientException {
        // request
        ProdukEntity produk = produkService.doUpdate(produkModel);

        // response
        ResponseModel response = new ResponseModel();
        response.setMsg("Produk is successfully updated");
        response.setStatusCode(201);
        response.setData(produk);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(value = "/deleteProduk")
    public ResponseEntity<ResponseModel> doDeleteProdukController(
            @RequestBody ProdukModel produkModel) throws ClientException {
        // request
        ProdukEntity produk = produkService.doDelete(produkModel);

        // response
        ResponseModel response = new ResponseModel();
        response.setMsg("Produk is successfully deleted");
        response.setStatusCode(200);
        response.setData(produk);
        return ResponseEntity.ok(response);
    }
}
