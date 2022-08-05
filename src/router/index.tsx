import { Routes, Route } from "react-router-dom";
import { Home } from "../views/index";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
