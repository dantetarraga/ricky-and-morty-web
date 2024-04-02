import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import BackgroundSpace from "./BackgroundSpace";
import Header from "./Header";
import Skeleton from "./Skeleton";

const Layout = () => {
  return (
    <BackgroundSpace>
      <div className="w-3/4 m-auto relative">
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

export default Layout;
