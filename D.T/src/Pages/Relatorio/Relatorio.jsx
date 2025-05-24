import { Link } from "react-router-dom";
import styles from "./Relatorio.module.css";
import Logo from "../../assets/LOGO1.png"; // Ajuste o caminho conforme necessário
import { Footer } from "../../components/Footer/Footer";
import TabelaMes from "../../components/TabelaMes/TabelaMes";

const Relatorio = () => {
  return (
    <div className={styles.containerRelatorio}>
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
          <Link to="/relatorios" className={styles.menuButtonPrincipal}>
            RELATÓRIOS
          </Link>
          <Link to="/abono" className={styles.menuButtonDesativado}>
            ABONO
          </Link>
        </nav>
      </header>

      <div className={styles.relatorio}>
        <table className={styles.tabela}>
          <tbody>
            <tr>
              <td>Faltas</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Horas extras</td>
              <td>20h</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.divisor}>
          <hr></hr>
        </div>
      </div>
      <div className={styles.tabelaMes}>
        <TabelaMes />
      </div>

      <Footer />
    </div>
  );
};

export default Relatorio;
