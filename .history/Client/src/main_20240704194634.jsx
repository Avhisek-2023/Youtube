import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "./app/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="1059792498452-t380boq441qtdfchk08hd210aue4ffhl.apps.googleusercontent.com">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </GoogleOAuthProvider>
  </Provider>
);
