import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PorqueContratar from "./pages/PorqueContratar";
import SalesTalksManifesto from "./pages/SalesTalksManifesto";
import SalesTalksOqueE from "./pages/SalesTalksOqueE";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/porquecontratar" element={<PorqueContratar />} />
            <Route path="/salestalksoque" element={<SalesTalksOqueE />} />
            <Route path="/salestalksmanifesto" element={<SalesTalksManifesto />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
