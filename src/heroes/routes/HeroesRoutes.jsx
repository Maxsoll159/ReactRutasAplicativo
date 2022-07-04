import { Navbar } from "../../ui/components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPages } from "../../heroes/pages/MavelPages";
import { DcPages } from "../../heroes/pages/DcPages";
import { SeachPage } from "../pages/SearchPage";
import { Heroe } from "../pages/Heroe";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="search" element={<SeachPage />}/>
          <Route path="heroe/:heroId" element={<Heroe/>}/>
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
