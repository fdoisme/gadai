package com.gadai.gadai.services;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ControllerAdvice;

import com.gadai.gadai.entities.ProdukEntity;
import com.gadai.gadai.exceptions.ClientException;
import com.gadai.gadai.models.ProdukModel;
import com.gadai.gadai.repos.ProdukRepo;
import com.gadai.gadai.repos.ProdukSpec;
import com.gadai.gadai.validators.ProdukValidator;

@Service
@ControllerAdvice
public class ProdukService {

    @Autowired
    private ProdukRepo produkRepo;

    public List<ProdukEntity> doGetAllProduk() {
        List<ProdukEntity> produk = new ArrayList<>();
        produkRepo.findAll().forEach(produk::add);
        return produk;
    }

    public List<ProdukEntity> doSearchProduk(ProdukModel produkModel) {
        List<ProdukEntity> produk = new ArrayList<>();
        ProdukSpec specs = new ProdukSpec(produkModel);
        produkRepo.findAll(specs).forEach(produk::add);
        return produk;
    }

    public ProdukEntity doInsert(ProdukModel produkModel) throws ClientException {
        ProdukEntity produk = new ProdukEntity();
        ProdukValidator.isUniqueId(produkModel.getId(), produkRepo);
        produk.setId(produkModel.getId());
        produk.setTipeProduk(produkModel.getTipeProduk());
        produk.setNamaProduk(produkModel.getNamaProduk());
        produk.setKeterangan(produkModel.getKeterangan());
        produk.setLtv(produkModel.getLtv());
        produk.setJangkaWaktu(produkModel.getJangkaWaktu());
        produk.setAdminBuka(produkModel.getAdminBuka());
        produk.setAdminBukaType(produkModel.getAdminBukaType());
        produk.setAdminTutup(produkModel.getAdminTutup());
        produk.setAdminTutupType(produkModel.getAdminTutupType());
        produk.setJasaPenyimpanan(produkModel.getJasaPenyimpanan());
        produk.setJasaPenyimpananPeriode(produkModel.getJasaPenyimpananPeriode());
        produk.setDendaKeterlambatan(produkModel.getDendaKeterlambatan());
        produk.setDendaKeterlambatanPeriode(produkModel.getDendaKeterlambatanPeriode());
        produk.setRecStatus("A");
        produk.setCreatedDate(new Timestamp(System.currentTimeMillis()));
        produk.setCreatorId(
                produkModel.getActorId() == null ? 0 : produkModel.getActorId());
        return produkRepo.save(produk);
    }

    public ProdukEntity findById(String id) {
        ProdukEntity produk = produkRepo.findById(id).orElse(null);
        return produk;
    }

    public ProdukEntity doUpdate(ProdukModel produkModel) throws ClientException {

        ProdukEntity produk = new ProdukEntity();
        ProdukValidator.isIdExist(produkModel.getId(), produkRepo);
        produk = findById(produkModel.getId());
        produk.setNamaProduk(produkModel.getNamaProduk());
        produk.setKeterangan(produkModel.getKeterangan());
        produk.setLtv(produkModel.getLtv());
        produk.setJangkaWaktu(produkModel.getJangkaWaktu());
        produk.setAdminBuka(produkModel.getAdminBuka());
        produk.setAdminBukaType(produkModel.getAdminBukaType());
        produk.setAdminTutup(produkModel.getAdminTutup());
        produk.setAdminTutupType(produkModel.getAdminTutupType());
        produk.setJasaPenyimpanan(produkModel.getJasaPenyimpanan());
        produk.setJasaPenyimpananPeriode(produkModel.getJasaPenyimpananPeriode());
        produk.setDendaKeterlambatan(produkModel.getDendaKeterlambatan());
        produk.setDendaKeterlambatanPeriode(produkModel.getDendaKeterlambatanPeriode());
        produk.setRecStatus("A");
        produk.setUpdatedDate(new Timestamp(System.currentTimeMillis()));
        produk.setUpdaterId(
                produkModel.getActorId() == null ? 0 : produkModel.getActorId());
        return produkRepo.save(produk);
    }

    public ProdukEntity doDelete(ProdukModel produkModel) throws ClientException {
        ProdukEntity produk = new ProdukEntity();
        ProdukValidator.isIdExist(produkModel.getId(), produkRepo);
        produk = findById(produkModel.getId());
        produk.setRecStatus("N");
        produk.setDeletedDate(new Timestamp(System.currentTimeMillis()));
        produk.setDeleterId(
                produkModel.getActorId() == null ? 0 : produkModel.getActorId());
        produkRepo.doDelete(produk.getId(), produk.getDeleterId());
        return produk;
    }
}
