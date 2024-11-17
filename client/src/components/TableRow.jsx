import React from "react";
import { Link } from "react-router-dom";

export default function TableRow({ produk, idx }) {
  return (
    <tr>
      <td className="tr-style border-b-2 border-violet-100 text-left pl-[2%]">
        {produk?.tipeProduk}
      </td>
      <td className="tr-style border-b-2 border-violet-100 text-left pl-[2%]">
        {produk?.namaProduk}
      </td>
      <td className="tr-style border-b-2 border-violet-100">{produk?.ltv} %</td>
      <td className="tr-style border-b-2 border-violet-100">
        {produk?.jasaPenyimpanan} %
      </td>
      <td className="tr-style border-b-2 border-violet-100">
        {produk?.recStatus}
      </td>
      <td className="tr-style border-b-2 border-violet-100">
        <Link to={`/details/${produk.id}`} className="btn-primary py-1 px-3">
          Details
        </Link>
      </td>
    </tr>
  );
}
