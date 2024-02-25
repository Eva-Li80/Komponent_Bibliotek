
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About";
import A_to_E_Components from "./Pages/A_to_J_Components";
import F_to_J_Components from "./Pages/F_to_J_Components";
import U_to_Z_Comonents from "./Pages/U_to_Z_Comonents";
import P_to_T_Components from "./Pages/P_to_T_Components";
import K_to_O_Components from "./Pages/K_to_O_Components";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/a_to_e_components" element={<A_to_E_Components />} />
          <Route path="/f_to_j_components" element={<F_to_J_Components />} />
          <Route path="/k_to_o_components" element={<K_to_O_Components />} />
          <Route path="/p_to_t_components" element={<P_to_T_Components/>} />
          <Route path="/u_to_z_components" element={<U_to_Z_Comonents/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
