import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import { RouterProvider } from "react-router-dom";
import router from "./routers";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
