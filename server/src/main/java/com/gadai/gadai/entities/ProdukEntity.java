package com.gadai.gadai.entities;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ms_produk")
public class ProdukEntity {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "tipe_produk")
    private String tipeProduk;

    @Column(name = "nama_produk")
    private String namaProduk;

    @Column(name = "keterangan")
    private String keterangan;

    @Column(name = "ltv")
    private Double ltv;

    @Column(name = "jangka_waktu")
    private Integer jangkaWaktu;

    @Column(name = "admin_buka")
    private Double adminBuka;

    @Column(name = "admin_buka_type")
    private String adminBukaType;

    @Column(name = "admin_tutup")
    private Double adminTutup;

    @Column(name = "admin_tutup_type")
    private String adminTutupType;

    @Column(name = "jasa_penyimpanan")
    private Double jasaPenyimpanan;

    @Column(name = "jasa_penyimpanan_periode")
    private Integer jasaPenyimpananPeriode;

    @Column(name = "denda_keterlambatan")
    private Double dendaKeterlambatan;

    @Column(name = "denda_keterlambatan_periode")
    private Integer dendaKeterlambatanPeriode;

    @Column(name = "created_date")
    private Timestamp createdDate;

    @Column(name = "updated_date")
    private Timestamp updatedDate;

    @Column(name = "deleted_date")
    private Timestamp deletedDate;

    @Column(name = "creator_id")
    private Integer creatorId;

    @Column(name = "updater_id")
    private Integer updaterId;

    @Column(name = "deleter_id")
    private Integer deleterId;

    @Column(name = "rec_status")
    private String recStatus;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTipeProduk() {
        return tipeProduk;
    }

    public void setTipeProduk(String tipeProduk) {
        this.tipeProduk = tipeProduk;
    }

    public String getNamaProduk() {
        return namaProduk;
    }

    public void setNamaProduk(String namaProduk) {
        this.namaProduk = namaProduk;
    }

    public String getKeterangan() {
        return keterangan;
    }

    public void setKeterangan(String keterangan) {
        this.keterangan = keterangan;
    }

    public Double getLtv() {
        return ltv;
    }

    public void setLtv(Double ltv) {
        this.ltv = ltv;
    }

    public Integer getJangkaWaktu() {
        return jangkaWaktu;
    }

    public void setJangkaWaktu(Integer jangkaWaktu) {
        this.jangkaWaktu = jangkaWaktu;
    }

    public Double getAdminBuka() {
        return adminBuka;
    }

    public void setAdminBuka(Double adminBuka) {
        this.adminBuka = adminBuka;
    }

    public String getAdminBukaType() {
        return adminBukaType;
    }

    public void setAdminBukaType(String adminBukaType) {
        this.adminBukaType = adminBukaType;
    }

    public Double getAdminTutup() {
        return adminTutup;
    }

    public void setAdminTutup(Double adminTutup) {
        this.adminTutup = adminTutup;
    }

    public String getAdminTutupType() {
        return adminTutupType;
    }

    public void setAdminTutupType(String adminTutupType) {
        this.adminTutupType = adminTutupType;
    }

    public Double getJasaPenyimpanan() {
        return jasaPenyimpanan;
    }

    public void setJasaPenyimpanan(Double jasaPenyimpanan) {
        this.jasaPenyimpanan = jasaPenyimpanan;
    }

    public Integer getJasaPenyimpananPeriode() {
        return jasaPenyimpananPeriode;
    }

    public void setJasaPenyimpananPeriode(Integer jasaPenyimpananPeriode) {
        this.jasaPenyimpananPeriode = jasaPenyimpananPeriode;
    }

    public Double getDendaKeterlambatan() {
        return dendaKeterlambatan;
    }

    public void setDendaKeterlambatan(Double dendaKeterlambatan) {
        this.dendaKeterlambatan = dendaKeterlambatan;
    }

    public Integer getDendaKeterlambatanPeriode() {
        return dendaKeterlambatanPeriode;
    }

    public void setDendaKeterlambatanPeriode(Integer dendaKeterlambatanPeriode) {
        this.dendaKeterlambatanPeriode = dendaKeterlambatanPeriode;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    public Timestamp getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Timestamp updatedDate) {
        this.updatedDate = updatedDate;
    }

    public Timestamp getDeletedDate() {
        return deletedDate;
    }

    public void setDeletedDate(Timestamp deletedDate) {
        this.deletedDate = deletedDate;
    }

    public Integer getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(Integer creatorId) {
        this.creatorId = creatorId;
    }

    public Integer getUpdaterId() {
        return updaterId;
    }

    public void setUpdaterId(Integer updaterId) {
        this.updaterId = updaterId;
    }

    public Integer getDeleterId() {
        return deleterId;
    }

    public void setDeleterId(Integer deleterId) {
        this.deleterId = deleterId;
    }

    public String getRecStatus() {
        return recStatus;
    }

    public void setRecStatus(String recStatus) {
        this.recStatus = recStatus;
    }
}
