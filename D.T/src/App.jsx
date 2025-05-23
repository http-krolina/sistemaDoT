import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import PaginaInicial from "./Pages/PaginaInicial/PagInicial";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.appContainerApp}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/pagina-inicial" element={<PaginaInicial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
