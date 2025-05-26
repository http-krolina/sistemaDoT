import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro/Cadastro"; // OK, se a pasta for 'Cadastro'
import Login from "./Pages/Login/Login"; // OK, se a pasta for 'Login'
import PaginaInicial from "./Pages/PaginaInicial/PagInicial"; // OK, se a pasta for 'PaginaInicial'
import Relatorio from "./Pages/Relatorio/Relatorio"; // OK, se a pasta for 'Relatorio'
import RecSenha from "./Pages/recuperar-senha/RecSenha";
import BaterPonto from "./Pages/bater-ponto/BaterPonto";
import ConfirmarCorrecao from "./Pages/confirmar-correcao/ConfirmarCorrecao";

import styles from "./App.module.css"; // OK
import ConfirmarSenha from "./pages/confirmar-senha/ConfirmarSenha";

function App() {
  return (
    <Router>
      <div className={styles.appContainerApp}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/pagina-inicial" element={<PaginaInicial />} />
          <Route path="/relatorios" element={<Relatorio />} />
          <Route path="/recuperar-senha" element={<RecSenha />} />
          <Route path="/bater-ponto" element={<BaterPonto />} />
          <Route path="confirmar-correcao" element={<ConfirmarCorrecao />} />
          <Route
            path="/recuperar-senha/Confirmar-Senha"
            element={<ConfirmarSenha />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
