import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {  FavoritesProvider } from "./context/Favoritecontext"
import toast, { Toaster } from 'react-hot-toast';





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <FavoritesProvider>
      <App />
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      </FavoritesProvider> 
    </Router>
  </React.StrictMode>
);
