import React, { useEffect, useState } from "react";
import TableRow from "../../components/TableRow";
import {
  fetchAllProduk,
  fetchSearchProduk,
} from "../../redux/actions/produkAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ComboBox from "../../components/ComboBox";
import InputForm from "../../components/InputForm";
import { createPagination } from "../../helpers";

export default function HomeProduk() {
  const initialFormState = {
    id: "",
    tipeProduk: "",
    namaProduk: "",
    recStatus: "",
    ltvStart: "",
    ltvEnd: "",
    jasaPenyimpananStart: "",
    jasaPenyimpananEnd: "",
  };
  const allProduk = useSelector((state) => state.produk.allProduk);
  const [form, setForm] = useState(initialFormState);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    maxPage: 1,
    data: [],
  });
  const dispatch = useDispatch();
  const onChange = (event) => {
    const { name, value } = event?.target || {};
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleChevronLeft = () => {
    const obj = createPagination(allProduk, pagination.currentPage - 1);
    setPagination(obj);
  };
  const handleChevronRight = () => {
    const obj = createPagination(allProduk, pagination.currentPage + 1);
    setPagination(obj);
  };
  const handleSearch = () => {
    dispatch(fetchSearchProduk(form));
  };
  const handleReset = () => {
    setForm(initialFormState);
  };
  useEffect(() => {
    dispatch(fetchAllProduk());
  }, [dispatch]);

  useEffect(() => {
    if (allProduk) {
      const obj = createPagination(allProduk);
      setPagination(obj);
    }
  }, [allProduk]);
  return (
    <div className="container mx-auto mt-3">
      <div className="flex flex-wrap">
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold">VIEW PRODUK</h2>
          <div className="card m-0 shadow-md w-full border rounded-md">
            <div className="card-header h-14 bg-gray-200 p-2 border rounded-md">
              <div className="float-left p-2">
                <b>Cari Data Produk</b>
              </div>
            </div>
            <div className="card-body p-4">
              <div className="flex flex-col gap-7">
                <div className="flex flex-wrap">
                  <div className="flex flex-1 flex-col gap-7 my-auto">
                    <div className="flex items-center">
                      <div className="flex-1 text-start">
                        <label className="ml-5">Tipe Produk</label>
                      </div>
                      <div className="flex-1 mr-5">
                        <ComboBox
                          name="tipeProduk"
                          value={form.tipeProduk}
                          onChange={onChange}
                          option={[
                            ["", ""],
                            [
                              "Konsinyasi Cicilan Tetap",
                              "Konsinyasi Cicilan Tetap",
                            ],
                            [
                              "Konsinyasi Cicilan Fleksibel",
                              "Konsinyasi Cicilan Fleksibel",
                            ],
                          ]}
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 text-start">
                        <label className="ml-5">Kode Produk</label>
                      </div>
                      <div className="flex-1 mr-5">
                        <InputForm
                          type="text"
                          name="id"
                          onChange={onChange}
                          value={form.id}
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 text-start">
                        <label className="ml-5">Nama Produk</label>
                      </div>
                      <div className="flex-1 mr-5">
                        <InputForm
                          type="text"
                          name="namaProduk"
                          value={form.namaProduk}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-7 my-auto">
                    <div className="flex items-center">
                      <div className="flex-1 text-start">
                        <label className="ml-5">Status</label>
                      </div>
                      <div className="flex-2">
                        <ComboBox
                          id={"recStatus"}
                          name={"recStatus"}
                          value={form.recStatus}
                          onChange={onChange}
                          option={[
                            ["", ""],
                            ["A", "ACTIVE"],
                            ["N", "NON ACTIVE"],
                          ]}
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 items-center text-start">
                        <label className="ml-5">LTV</label>
                      </div>
                      <div className="flex flex-2 items-center">
                        <div className="flex-1">
                          <InputForm
                            id={"ltvStart"}
                            name={"ltvStart"}
                            type="number"
                            value={form.ltvStart}
                            onChange={onChange}
                          />
                        </div>
                        <div className="flex-1">
                          <label className="py-1">sampai</label>
                        </div>
                        <div className="flex-1">
                          <InputForm
                            id={"ltvEnd"}
                            name={"ltvEnd"}
                            type="number"
                            value={form.ltvEnd}
                            onChange={onChange}
                          />
                        </div>
                        <div className="flex-1 pl-0">
                          <label className="py-1">%</label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 items-center text-start">
                        <label className="ml-5">Biaya Jasa Penyimpanan</label>
                      </div>
                      <div className="flex flex-2 items-center">
                        <div className="flex-1">
                          <InputForm
                            id={"jasaPenyimpananStart"}
                            name={"jasaPenyimpananStart"}
                            type="number"
                            value={form.jasaPenyimpananStart}
                            onChange={onChange}
                          />
                        </div>
                        <div className="flex-1">
                          <label className="py-1">sampai</label>
                        </div>
                        <div className="flex-1">
                          <InputForm
                            id={"jasaPenyimpananEnd"}
                            name={"jasaPenyimpananEnd"}
                            type="number"
                            value={form.jasaPenyimpananEnd}
                            onChange={onChange}
                          />
                        </div>
                        <div className="flex-1 pl-0">
                          <label className="py-1">%</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full pt-2 flex justify-end">
                  <button
                    onClick={handleSearch}
                    className="btn btn-primary mr-3"
                  >
                    Cari
                  </button>
                  <button
                    onClick={handleReset}
                    className="btn btn-primary mx-3"
                  >
                    Kosongkan
                  </button>
                  <Link to="/add" className="btn btn-primary mx-3">
                    Produk Baru
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-3">
            <table className="table table-striped w-full" id="data-produk">
              <thead>
                <tr className=" bg-violet-700 text-white text-center ">
                  <th className="tr-style">Tipe Produk</th>
                  <th className="tr-style">Nama Produk</th>
                  <th className="tr-style">LTV</th>
                  <th className="tr-style">Biaya Jasa Penyimpanan</th>
                  <th className="tr-style">Status</th>
                  <th className="tr-style"></th>
                </tr>
              </thead>
              <tbody>
                {pagination?.data?.map((produk, idx) => {
                  return (
                    <TableRow key={idx} produk={produk} idx={idx}></TableRow>
                  );
                })}
              </tbody>
            </table>
          </div>
          {pagination?.maxPage != 1 && (
            <div className="flex gap-3 items-center my-5 justify-center">
              <button
                onClick={handleChevronLeft}
                disabled={pagination.currentPage == 1}
              >
                ◀
              </button>
              <p>{pagination?.currentPage}</p>
              <p>/</p>
              <p>{pagination?.maxPage}</p>
              <button
                onClick={handleChevronRight}
                disabled={pagination.maxPage == pagination.currentPage}
              >
                ▶
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
