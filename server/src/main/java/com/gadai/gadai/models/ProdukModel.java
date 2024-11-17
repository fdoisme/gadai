package com.gadai.gadai.models;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class ProdukModel extends RecordModel {

    // @IdUnique
    @NotEmpty(message = "Produk Id tidak boleh kosong")
    private String id;

    @NotEmpty(message = "Tipe Produk tidak boleh kosong")
    @Pattern(regexp = "(Konsinyasi Cicilan Tetap|Konsinyasi Cicilan Fleksibel)",
            message = "Tipe Produk Hanya boleh Berisi Konsinyasi Cicilan Tetap atau Konsinyasi Cicilan Fleksibel")
    private String tipeProduk;

    @NotEmpty(message = "Nama Produk tidak boleh kosong")
    private String namaProduk;

    private String keterangan;

    @NotNull(message = "LTV tidak boleh kosong")
    @Max(value = 100, message = "Tidak boleh lebih dari 100")
    @Min(value = 0, message = "Tidak boleh kurang dari 0")
    private Double ltv;

    private Double ltvSampai;

    @NotNull(message = "Jangka Waktu tidak boleh kosong")
    @Max(value = 999, message = "Tidak boleh lebih dari 3 digit")
    @Min(value = 0, message = "Tidak boleh kurang dari 0")
    private Integer jangkaWaktu;

    @NotNull(message = "Admin Buka tidak boleh kosong")
    private Double adminBuka;

    @NotEmpty(message = "Tipe Admin Buka tidak boleh kosong")
    @Pattern(regexp = "(PERSEN|NOMINAL)",
            message = "Tipe Admin Buka Hanya boleh Berisi PERSEN atau NOMINAL")
    private String adminBukaType;

    @NotNull(message = "Admin Tutup tidak boleh kosong")
    private Double adminTutup;

    @NotEmpty(message = "Tipe Admin Tutup tidak boleh kosong")
    @Pattern(regexp = "(PERSEN|NOMINAL)",
            message = "Tipe Admin Tutup Hanya boleh Berisi PERSEN atau NOMINAL")
    private String adminTutupType;

    @NotNull(message = "Jasa Penyimpanan tidak boleh kosong")
    @Max(value = 100, message = "Tidak boleh lebih dari 100")
    @Min(value = 0, message = "Tidak boleh kurang dari 0")
    private Double jasaPenyimpanan;

    private Double jasaPenyimpananSampai;

    @NotNull(message = "Periode Jasa Penyimpanan Tidak boleh kosong")
    private Integer jasaPenyimpananPeriode;

    @NotNull(message = "Denda Keterlambatan tidak boleh kosong")
    @Max(value = 100, message = "Tidak boleh lebih dari 100")
    @Min(value = 0, message = "Tidak boleh kurang dari 0")
    private Double dendaKeterlambatan;

    @NotNull(message = "Periode Denda Keterlambatan tidak boleh kosong")
    private Integer dendaKeterlambatanPeriode;

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

    public Double getLtvSampai() {
        return ltvSampai;
    }

    public void setLtvSampai(Double ltvSampai) {
        this.ltvSampai = ltvSampai;
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

    public Double getJasaPenyimpananSampai() {
        return jasaPenyimpananSampai;
    }

    public void setJasaPenyimpananSampai(Double jasaPenyimpananSampai) {
        this.jasaPenyimpananSampai = jasaPenyimpananSampai;
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
}
