import "./App.css";
import Footer from "./component/footer/Footer";
import Navba from "./component/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./pages/index/Index";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import GetaQuote from "./pages/GetaQuote/GetaQuote";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navba />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/GetaQuote" element={<GetaQuote />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
