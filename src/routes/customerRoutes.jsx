import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

import { SearchProvider } from "../hooks/useSearch";
import { AmountProvider } from "../hooks/useAmount";

export function CustomerRoutes() {
  return (
    <SearchProvider>
      <AmountProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </AmountProvider>
    </SearchProvider>
  );
}
