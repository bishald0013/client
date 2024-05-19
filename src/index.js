import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ReactDOM from "react-dom/client";
import { Bounce, Flip, Slide, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer transition={Zoom} />
    </Provider>
  </React.StrictMode>
);
