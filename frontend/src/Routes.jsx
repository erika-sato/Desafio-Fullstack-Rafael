import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Cadastro } from "./Pages/Cadastro";
import { Catalogo } from "./Pages/Catalogo";
import { Editar } from "./Pages/Editar";



const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/editar/:id" element={<Editar />} />
            <Route path='*' element={<h1>404 - Not Found</h1>} />
        </Routes>
    )
}

export default AppRouter;