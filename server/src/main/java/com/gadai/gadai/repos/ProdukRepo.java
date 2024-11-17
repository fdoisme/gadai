package com.gadai.gadai.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gadai.gadai.entities.ProdukEntity;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface ProdukRepo extends JpaRepository<ProdukEntity, String>, JpaSpecificationExecutor<ProdukEntity> {

    // @Query(value = "SELECT COUNT(*) FROM ms_produk WHERE LOWER(id) = LOWER(:id)", nativeQuery = true)
    // long countById(@Param("id") String id);
    @Modifying
    @Query(value = "UPDATE ms_produk SET rec_status = '"
            + "N"
            + "', deleter_id = ?2 , deleted_date = NOW() "
            + "WHERE id = ?1", nativeQuery = true)
    Integer doDelete(String id, Integer deleterId);
}
