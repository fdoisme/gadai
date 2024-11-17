import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import { useLocation, useNavigate } from "react-router-dom";
import ComboBox from "./ComboBox";

export default function ProdukForm({ produk, handleSimpan, handleHapus }) {
  const initialFormState = {
    id: produk?.id || "",
    tipeProduk: produk?.tipeProduk || "",
    namaProduk: produk?.namaProduk || "",
    keterangan: produk?.keterangan || "",
    ltv: produk?.ltv || "",
    jangkaWaktu: produk?.jangkaWaktu || "",
    adminBuka: produk?.adminBuka || "",
    adminBukaType: produk?.adminBukaType || "",
    adminTutup: produk?.adminTutup || "",
    adminTutupType: produk?.adminTutupType || "",
    jasaPenyimpanan: produk?.jasaPenyimpanan || "",
    jasaPenyimpananPeriode: produk?.jasaPenyimpananPeriode || "",
    dendaKeterlambatan: produk?.dendaKeterlambatan || "",
    dendaKeterlambatanPeriode: produk?.dendaKeterlambatanPeriode || "",
  };
  const [warning, setWarning] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [form, setForm] = useState({ ...initialFormState });
  const location = useLocation();
  const navigate = useNavigate();

  const handleKembali = () => {
    navigate(-1);
  };
  const onChange = (event, isPercent) => {
    const { name, value, type } = event?.target || {};
    setForm({
      ...form,
      [name]: value,
    });
    if (Number(value) > 100 && isPercent) {
      setWarning("Angka yang dimasukkan melebihi 100.");
    } else if (Number(value) < 0 && type == "number") {
      setWarning("Angka yang dimasukkan kurang dari 0.");
    } else {
      setWarning("");
    }
  };
  const handleUbah = () => {
    setIsDisabled(false);
  };
  const handleHapusProduk = () => {
    handleHapus(produk.id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSimpan(form);
  };
  useEffect(() => {
    if (location.pathname.includes("details")) {
      setIsDisabled(true);
    }
  }, []);
  useEffect(() => {
    setForm(initialFormState);
  }, [produk]);
  return (
    <div className="w-[100%] md:w-[70%] lg:w-[60%] mx-auto my-auto mt-[2rem] border-2 p-6 rounded-lg">
      <div className="mx-auto my-auto">
        <div>
          <h1 className="text-start font-black ml-10 mb-7 text-3xl">
            {location.pathname.includes("add")
              ? "ADD NEW PRODUK"
              : isDisabled
              ? "DETAIL PRODUK " + '"' + produk.id + '"'
              : "UPDATE PRODUK " + '"' + produk.id + '"'}
          </h1>
        </div>
        {warning && <p className="text-red-500">{warning}</p>}
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-[1rem]"
        >
          <div className="flex items-center text-start ml-3">
            <div className="flex-2">
              <label htmlFor="">Tipe Produk</label>
            </div>
            <div className="flex-3">
              <ComboBox
                id={"tipeProduk"}
                name={"tipeProduk"}
                value={form?.tipeProduk}
                option={[
                  ["", ""],
                  ["Konsinyasi Cicilan Tetap", "Konsinyasi Cicilan Tetap"],
                  [
                    "Konsinyasi Cicilan Fleksibel",
                    "Konsinyasi Cicilan Fleksibel",
                  ],
                ]}
                onChange={onChange}
                isDisabled={!location.pathname.includes("add")}
              />
            </div>
          </div>
          <div className="flex items-center text-start ml-3">
            <div className="flex-2">
              <label htmlFor="">Produk Id</label>
            </div>
            <div className="flex-3">
              <InputForm
                id={"id"}
                name={"id"}
                value={form?.id}
                onChange={onChange}
                isDisabled={!location.pathname.includes("add")}
              />
            </div>
          </div>
          <div className="flex items-center text-start ml-3">
            <div className="flex-2">
              <label htmlFor="">Nama Produk</label>
            </div>
            <div className="flex-3">
              <InputForm
                id={"namaProduk"}
                name={"namaProduk"}
                value={form?.namaProduk}
                onChange={onChange}
                isDisabled={isDisabled}
              />
            </div>
          </div>
          <div className="flex items-center text-start ml-3">
            <div className="flex-2">
              <label htmlFor="">Keterangan</label>
            </div>
            <div className="flex-3">
              <InputForm
                id={"keterangan"}
                name={"keterangan"}
                value={form?.keterangan}
                onChange={onChange}
                isDisabled={isDisabled}
              />
            </div>
          </div>
          <div className="flex items-center text-start ml-3">
            <div className="flex-2">
              <label htmlFor="">LTV ( % )</label>
            </div>
            <div className="flex-3">
              <InputForm
                id={"ltv"}
                name={"ltv"}
                type={"number"}
                value={form?.ltv}
                onChange={onChange}
                isPercent={true}
                isDisabled={isDisabled}
              />
            </div>
          </div>
          <div className="flex items-center text-start ml-3">
            <div className="flex-2">
              <label htmlFor="">Jangka Waktu</label>
            </div>
            <div className="flex flex-3 items-center">
              <div className="flex-3">
                <InputForm
                  id={"jangkaWaktu"}
                  name={"jangkaWaktu"}
                  type={"number"}
                  value={form?.jangkaWaktu}
                  onChange={onChange}
                  isDisabled={isDisabled}
                />
              </div>
              <div className="flex-6 text-start ml-5">
                <p className="inline-block">
                  <span
                    className={
                      form?.tipeProduk == "Konsinyasi Cicilan Tetap"
                        ? "line-through"
                        : ""
                    }
                  >
                    hari
                  </span>
                  /
                  <span
                    className={
                      form?.tipeProduk == "Konsinyasi Cicilan Fleksibel"
                        ? "line-through"
                        : ""
                    }
                  >
                    bulan
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row text-start ml-3">
            <div className="flex-2">
              <label htmlFor="">Biaya Admin Buka</label>
            </div>
            <div className="flex flex-3 gap-3">
              <div className="flex-3">
                <ComboBox
                  id={"adminBukaType"}
                  name={"adminBukaType"}
                  value={form.adminBukaType}
                  option={[
                    ["", ""],
                    ["NOMINAL", "NOMINAL"],
                    ["PERSEN", "PERSEN"],
                  ]}
                  onChange={onChange}
                  isDisabled={isDisabled}
                />
              </div>
              <div className="flex-6">
                <InputForm
                  id={"adminBuka"}
                  name={"adminBuka"}
                  type={"number"}
                  value={form?.adminBuka}
                  onChange={onChange}
                  isDisabled={isDisabled}
                  // isDisabled={!form?.adminBuka}
                  isPercent={form?.adminBukaType == "PERSEN" ? true : false}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row text-start ml-3">
            <div className="flex-2">
              <label htmlFor="">Biaya Admin Tutup</label>
            </div>
            <div className="flex flex-3 gap-3">
              <div className="flex-3">
                <ComboBox
                  id={"adminTutupType"}
                  name={"adminTutupType"}
                  value={form.adminTutupType}
                  option={[
                    ["", ""],
                    ["NOMINAL", "NOMINAL"],
                    ["PERSEN", "PERSEN"],
                  ]}
                  onChange={onChange}
                  isDisabled={isDisabled}
                />
                {/* <select
                  name="adminTutupType"
                  id="adminTutupType"
                  value={form?.adminTutupType}
                  onChange={onChange}
                  className={`form-control
                    ${
                      isDisabled
                        ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
                        : "bg-violet-50"
                    };`}
                >
                  <option value=""></option>
                  <option value="NOMINAL">NOMINAL</option>
                  <option value="PERSEN">PERSEN</option>
                </select> */}
              </div>
              <div className="flex-6">
                <InputForm
                  id={"adminTutup"}
                  name={"adminTutup"}
                  type={"number"}
                  value={form?.adminTutup}
                  onChange={onChange}
                  isDisabled={isDisabled}
                  // isDisabled={!form?.adminTutup}
                  isPercent={form?.adminTutupType == "PERSEN" ? true : false}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row text-start ml-3">
            <div className="flex-2">
              <label htmlFor="">Biaya Jasa Penyimpanan</label>
            </div>
            <div className="flex flex-3 items-center gap-5">
              <div className="flex items-center gap-2">
                <div>
                  <InputForm
                    id={"jasaPenyimpanan"}
                    name={"jasaPenyimpanan"}
                    type={"number"}
                    value={form?.jasaPenyimpanan}
                    onChange={onChange}
                    isPercent={true}
                    isDisabled={isDisabled}
                  />
                </div>
                <div>
                  <p className="inline-block">%</p>
                </div>
              </div>
              <p className="inline-block">Per</p>
              <div className="flex items-center gap-2">
                <div>
                  <InputForm
                    id={"jasaPenyimpananPeriode"}
                    name={"jasaPenyimpananPeriode"}
                    type={"number"}
                    value={form?.jasaPenyimpananPeriode}
                    onChange={onChange}
                    isDisabled={isDisabled}
                  />
                </div>
                <div>
                  <p className="inline-block">
                    <span
                      className={
                        form?.tipeProduk == "Konsinyasi Cicilan Tetap"
                          ? "line-through"
                          : ""
                      }
                    >
                      hari
                    </span>
                    /
                    <span
                      className={
                        form?.tipeProduk == "Konsinyasi Cicilan Fleksibel"
                          ? "line-through"
                          : ""
                      }
                    >
                      bulan
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row text-start ml-3">
            <div className="flex-2">
              <label htmlFor="">Biaya Denda Keterlambatan</label>
            </div>
            <div className="flex flex-3 items-center gap-5">
              <div className="flex items-center gap-2">
                <div>
                  <InputForm
                    id={"dendaKeterlambatan"}
                    name={"dendaKeterlambatan"}
                    type={"number"}
                    value={form?.dendaKeterlambatan}
                    onChange={onChange}
                    isPercent={true}
                    isDisabled={isDisabled}
                  />
                </div>
                <div>
                  <p className="inline-block">%</p>
                </div>
              </div>
              <p className="inline-block">Per</p>
              <div className="flex items-center gap-2">
                <div>
                  <InputForm
                    id={"dendaKeterlambatanPeriode"}
                    name={"dendaKeterlambatanPeriode"}
                    type={"number"}
                    value={form?.dendaKeterlambatanPeriode}
                    onChange={onChange}
                    isDisabled={isDisabled}
                  />
                </div>
                <div>
                  <p className="inline-block">
                    <span
                      className={
                        form?.tipeProduk == "Konsinyasi Cicilan Tetap"
                          ? "line-through"
                          : ""
                      }
                    >
                      hari
                    </span>
                    /
                    <span
                      className={
                        form?.tipeProduk == "Konsinyasi Cicilan Fleksibel"
                          ? "line-through"
                          : ""
                      }
                    >
                      bulan
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 justify-center">
            <button
              type="button"
              onClick={handleKembali}
              className="btn-primary"
            >
              Kembali
            </button>
            {location.pathname.includes("details") && isDisabled && (
              <button
                type="button"
                onClick={handleHapusProduk}
                className="btn-primary"
              >
                Hapus
              </button>
            )}
            {location.pathname.includes("details") && isDisabled && (
              <button
                type="button"
                onClick={handleUbah}
                className="btn-primary"
              >
                Ubah
              </button>
            )}
            {(location.pathname.includes("add") || !isDisabled) && (
              <button type="submit" className="btn-primary">
                Simpan
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
