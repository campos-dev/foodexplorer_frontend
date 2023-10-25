import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { AddDish } from "../pages/AddDish";
import { EditDish } from "../pages/EditDish";
import { Details } from "../pages/Details";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
