import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Start every page at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // On the home page the whole site fits exactly one screen (see layout.css)
  return (
    <div className={isHome ? "site site--fit" : "site"}>
      <Header />
      <main className="site__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
