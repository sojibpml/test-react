import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      <main className="bg-[#E8EDF2] h-screen">
        <Outlet />
      </main>
    </>
  );
}
