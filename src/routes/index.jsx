import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./appRoutes";
import { AuthRoutes } from "./authRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
