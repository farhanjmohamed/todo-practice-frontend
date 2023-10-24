import { Header } from "./Header";
import { Home } from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Signup } from "./Signup";

function App() {
  return (
    <div className="dark:bg-slate-700  bg-slate-50 text-black overflow-hidden">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
