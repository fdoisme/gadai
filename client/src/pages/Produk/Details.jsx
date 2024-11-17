import React, { useEffect } from "react";
import ProdukForm from "../../components/ProdukForm";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProdukAction,
  fetchDetailProduk,
  putUpdateProduk,
} from "../../redux/actions/produkAction";
import { useNavigate, useParams } from "react-router-dom";
import { alertDelete, alertFailed, alertSucces } from "../../alerts";

export default function Details() {
  const produkDetail = useSelector((state) => state.produk.detailProduk);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitEditProduk = async (form) => {
    try {
      await dispatch(putUpdateProduk(form));
      navigate("/");
      console.log(`${form.id} Success`);
      alertSucces(`${form.id} berhasil diupdate`);
    } catch (error) {
      alertFailed(error);
    }
  };
  const submitDeleteProduk = async (id) => {
    try {
      let cb = async () => {
        await dispatch(deleteProdukAction(id));
        navigate("/");
      };
      alertDelete(id, cb);
    } catch (error) {
      alertFailed("Data tidak ditemukan");
    }
  };
  useEffect(() => {
    dispatch(fetchDetailProduk(id));
  }, [dispatch]);
  useEffect(() => {}, [produkDetail]);
  return (
    <ProdukForm
      produk={produkDetail}
      handleSimpan={submitEditProduk}
      handleHapus={submitDeleteProduk}
    ></ProdukForm>
  );
}
