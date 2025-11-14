import React from "react";
import MainLayout from "./layouts/MainLayout";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router";

function App() {
  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
