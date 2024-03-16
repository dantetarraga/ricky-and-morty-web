import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import BackgroundSpace from "./BackgroundSpace";
import Header from "./Header";
import Skeleton from "./Skeleton";

const Layout = () => {
  return (
    <BackgroundSpace>
      <div className="w-3/4 m-auto">
        <Header />
        <main>
          <Suspense fallback={<Skeleton />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </BackgroundSpace>
  );
};

{
  /* <div className="w-3/4 m-auto">
        <header className="flex justify-between">
          <nav className="flex items-center text-white gap-2 my-10">
            <img src={logo} alt="" className="w-16" />
            <h1 className="font-bold text-3xl">
              Rick & Morty{" "}
              <span className="text-cyan-950 font-extrabold">WiKi</span>
            </h1>
          </nav>
          <Search />
        </header>
        <div className="flex justify-center gap-3">
          <Filters />
        </div>
      </div> */
}

export default Layout;
