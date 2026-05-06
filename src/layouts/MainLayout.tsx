import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <hr className="border-gray-600" />
      <Footer />
    </div>
  );
};
