import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import { NotFound } from "../../pages/NotFound";
import { AboutPomodoro } from "../../pages/AboutPomodoro";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/about-pomodoro/" element={<AboutPomodoro />} />
      </Routes>
    </BrowserRouter>
  );
}
