import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import Products from "../pages/Products/Products";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar/Sidebar";
import Billing from "../pages/Billing";
import Invoice from "../pages/Invoice";
import Notification from "../pages/Notification";
import Ecommerce from "../pages/Ecommerce";
import SingleProduct from "../pages/Products/SingleProduct";
import RQProducts from "../pages/RQ/RQProducts";
import ClickData from "../pages/RQ/ClickData";
import AllProducts from "../pages/RQ/Products/AllProducts";
import SingleProductRQ from "../pages/RQ/Products/SingleProductRQ";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/users" element={<RQProducts />} /> */}
        <Route path="/users" element={<ClickData />} />
        <Route path="/all-product" element={<AllProducts />} />
        <Route path="/all-product/:productId" element={<SingleProductRQ />} />

        <Route path="/login" element={<Login />} />
        <Route path="/e-commerce/billing" element={<Billing />} />
        <Route path="/e-commerce/invoice" element={<Invoice />} />
        <Route path="/e-commerce/products" element={<Products />} />
        <Route path="/e-commerce/products/:id" element={<SingleProduct />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="*" element={<h1>Page Not FOund</h1>} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
