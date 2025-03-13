import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { PrimaryLayout } from "./layout/primary-layout.tsx";
import { DashboardOverview } from "./pages/dashboard/dashboard-overview.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<DashboardOverview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
