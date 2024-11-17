import React from "react";
import ProdukForm from "../../components/ProdukForm";
import { useDispatch } from "react-redux";
import { postAddProduk } from "../../redux/actions/produkAction";
import { useNavigate } from "react-router-dom";
import { alertFailed, alertSucces } from "../../alerts";

export default function NewProduk() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const AddProduk = async (form) => {
    try {
      await dispatch(postAddProduk(form));
      alertSucces(`${form.id} berhasil ditambahkan`);
      navigate("/");
    } catch (error) {
      alertFailed(error);
    }
  };
  return <ProdukForm handleSimpan={AddProduk}></ProdukForm>;
}
