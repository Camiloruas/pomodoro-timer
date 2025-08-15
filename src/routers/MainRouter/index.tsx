import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../../pages/Home";
import { NotFound } from "../../pages/NotFound";
import { AboutPomodoro } from "../../pages/AboutPomodoro";
import { useEffect } from "react";
import { History } from "../../pages/History";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/history/" element={<History />} />
        <Route path="/about-pomodoro/" element={<AboutPomodoro />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
