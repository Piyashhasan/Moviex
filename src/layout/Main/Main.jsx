import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="bg-[#0A1628]">
      <Outlet />
    </main>
  );
};

export default Main;
