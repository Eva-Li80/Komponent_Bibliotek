
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About";
import AEPage from "./Pages/AEPage";
import FJPage from "./Pages/FJPage";
import KOPage from "./Pages/KOPage";
import PTPage from "./Pages/PTPage";
import UZPage from "./Pages/UZPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aepage" element={<AEPage />} />
          <Route path="/fjpage" element={<FJPage />} />
          <Route path="/kopage" element={<KOPage />} />
          <Route path="/ptpage" element={<PTPage/>} />
          <Route path="/uzpage" element={<UZPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
