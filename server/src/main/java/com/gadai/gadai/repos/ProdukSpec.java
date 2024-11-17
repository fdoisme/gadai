package com.gadai.gadai.repos;

import org.springframework.data.jpa.domain.Specification;

import com.gadai.gadai.entities.ProdukEntity;
import com.gadai.gadai.models.ProdukModel;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public class ProdukSpec implements Specification<ProdukEntity> {

    private ProdukModel produkModel;

    public ProdukSpec(ProdukModel produkModel) {
        super();
        this.produkModel = produkModel;
    }

    @Override
    public Predicate toPredicate(Root<ProdukEntity> root, CriteriaQuery<?> cq,
            CriteriaBuilder cb) {
        Predicate p = cb.and();
        // Predicate p = cb.conjunction();

        // id produk criteria
        if (produkModel.getId() != null && produkModel.getId().length() > 0) {
            p = cb.and(p, cb.equal(cb.lower(root.get("id")), produkModel.getId().toLowerCase()));
        }

        // tipe produk criteria
        if (produkModel.getTipeProduk() != null && produkModel.getTipeProduk().length() > 0) {
            p = cb.and(p, cb.like(cb.lower(root.get("tipeProduk")),
                    "%" + produkModel.getTipeProduk().toLowerCase() + "%"));
        }

        // nama produk criteria
        if (produkModel.getNamaProduk() != null && produkModel.getNamaProduk().length() > 0) {
            p = cb.and(p, cb.like(cb.lower(root.get("namaProduk")),
                    "%" + produkModel.getNamaProduk().toLowerCase() + "%"));
        }
        // status criteria
        if (produkModel.getRecStatus() != null && produkModel.getRecStatus().length() > 0) {
            p = cb.and(p, cb.equal(root.get("recStatus"), produkModel.getRecStatus()));
        }

        // ltv criteria 
        if (produkModel.getLtv() != null) {
            p = cb.and(p, cb.between(root.get("ltv"), produkModel.getLtv(), produkModel.getLtvSampai()));
        }

        // jasa penyimpanan criteria 
        if (produkModel.getJasaPenyimpanan() != null && produkModel.getJasaPenyimpananSampai() != null) {
            p = cb.and(cb.between(root.get("jasaPenyimpanan"), produkModel.getJasaPenyimpanan(), produkModel.getJasaPenyimpananSampai())
            );
        }

        cq.orderBy(cb.asc(root.get("id")));

        return p;
    }
}
