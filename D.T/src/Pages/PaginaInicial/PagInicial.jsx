import { Link } from "react-router-dom";
import styles from "./PagInicial.module.css";
import Logo from "../../assets/LOGO1.png"; // Ajuste o caminho conforme necessário
import { Footer } from "../../components/Footer/Footer";

const PaginaInicial = () => {
  return (
    <div className={styles.containerPaginicial}>
      <header className={styles.topo}>
        <div className={styles.logoContainer}>
          <img
            src={Logo}
            alt="Logo do Sistema de Ponto"
            className={styles.logo}
          />
        </div>
        <nav className={styles.menuInicial}>
          <Link to="/pagina-inicial" className={styles.menuButtonPrincipal}>
            PÁGINA INICIAL
          </Link>
          <Link to="/relatorios" className={styles.menuButtonDesativado}>
            RELATÓRIOS
          </Link>
          <Link to="/abono" className={styles.menuButtonDesativado}>
            ABONO
          </Link>
        </nav>
      </header>

      <div className={styles.conteudo}>
        <div className={styles.perfil}>
          <div className={styles.foto}>FOTO</div>
          <div className={styles.dados}>
            <h2>ÍTALO FERREIRA COSTA</h2>

            <p>DESENVOLVEDOR FRONT-END</p>
            <p>ADMISSÃO: 01 DE MAIO DE 2024</p>
            <p>PREVISÃO DE FÉRIAS: 15 DE MAIO DE 2025</p>
          </div>
        </div>

        <div className={styles.registro}>
          <h3>REGISTRAR PONTO</h3>
          <div className={styles.infoHorario}>
            <span>8h 15h</span>
            <span>Quinta-feira, 04/05/2025</span>
          </div>
          <div className={styles.botoesRegistro}>
            <button className={styles.entrada}>REGISTRAR ENTRADA</button>
            <button className={styles.pausa}>REGISTRAR PAUSA</button>
            <button className={styles.voltaP}>RETORNO PAUSA</button>
            <button className={styles.saida}>REGISTRAR SAÍDA</button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PaginaInicial;
