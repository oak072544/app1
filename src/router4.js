import React from "react";
import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom";
import Home from "./home";
import Products from "./products";
import Member from "./member";

export default function Router4() {
    return (
        <BrowserRouter>
            <Routes style = {{margin:'20px'}}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/member" Component={Member} />
                <Route path="/contact" element={<div style={{textAlign:'center'}}>Contact Page</div>} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}