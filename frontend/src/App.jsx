import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import AppRouter from "./Routes";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <AppRouter />
    </BrowserRouter>
  )
}

export default App
