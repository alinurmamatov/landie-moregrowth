import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import { Home, About, Contact } from "../pages";
import Navbar from "../components/navbar/Navbar";
import { Footer } from "../components/footer";

const AppRoutes = () => {
  const { home, about, contact } = appRoutes;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={about} element={<About />} />
          <Route path={contact} element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
