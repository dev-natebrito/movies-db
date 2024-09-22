import { Header } from "./components/Header";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

import { Home } from "./views/Home";
import { About } from "./views/About";
import { MovieDetail } from "./views/MovieDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
