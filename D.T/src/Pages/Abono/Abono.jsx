import { Link } from "react-router-dom";
import styles from "./Abono.module.css";
import Logo from "../../assets/LOGO1.png"; // Ajuste o caminho conforme necessário
import { Footer } from "../../components/Footer/Footer";

const Abono = () => {
  return (
    <div className={styles.containerAbono}>
      <header className={styles.topo}>
        <div className={styles.logoContainer}>
          <img
            src={Logo}
            alt="Logo do Sistema de Ponto"
            className={styles.logo}
          />
        </div>
        <nav className={styles.menuInicial}>
          <Link to="/pagina-inicial" className={styles.menuButtonDesativado}>
            PÁGINA INICIAL
          </Link>
          <Link to="/relatorios" className={styles.menuButtonDesativado}>
            RELATÓRIOS
          </Link>
          <Link to="/abono" className={styles.menuButtonPrincipal}>
            ABONO
          </Link>
        </nav>
      </header>

      <Footer />
    </div>
  );
};

export default Abono;
