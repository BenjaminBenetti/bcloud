import { Outlet } from "react-router";

export function PrimaryLayout() {
  return (
    <div class="bg-emerald-500 h-screen w-screen">
      <Outlet></Outlet>
    </div>
  );
}
