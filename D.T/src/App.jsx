import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import PaginaInicial from "./Pages/PaginaInicial/PagInicial";
import Relatorio from "./Pages/Relatorio/Relatorio";
import Abono from "./Pages/Abono/Abono";
import RecSenha from "./Pages/Recuperar Senha/RecSenha";
import ConfSenha from "./Pages/Confirmar Senha/ConfSenha";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.appContainerApp}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/pagina-inicial" element={<PaginaInicial />} />
          <Route path="/relatorios" element={<Relatorio />} />
          <Route path="/abono" element={<Abono />} />
          <Route path="/recuperar-senha" element={<RecSenha />} />
          <Route path="/Confirmar-Senha" element={<ConfSenha />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
