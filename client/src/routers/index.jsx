import { createBrowserRouter } from "react-router-dom";
import HomeProduk from "../pages/Produk/HomeProduk";
import Details from "../pages/Produk/Details";
import React from "react";
import NewProduk from "../pages/Produk/NewProduk";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeProduk />,
  },
  {
    path: "/add",
    element: <NewProduk />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

export default router;
