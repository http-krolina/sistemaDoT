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
          <button className={styles.menuButton}>PAGINA INICIAL</button>
          <button className={styles.menuButton}>RELATÓRIOS</button>
          <button className={styles.menuButton}>ABONO</button>
        </nav>
      </header>

      <main className={styles.conteudo}>
        <section className={styles.perfil}>
          <div className={styles.foto}>FOTO</div>
          <div className={styles.dados}>
            <h2>ÍTALO FERREIRA COSTA</h2>
            <p>DESENVOLVEDOR FRONT-END</p>
            <p>ADMISSÃO: 01 DE MAIO DE 2024</p>
            <p>PREVISÃO DE FÉRIAS: 15 DE MAIO DE 2025</p>
          </div>
        </section>

        <section className={styles.registro}>
          <h3>REGISTRAR PONTO</h3>
          <div className={styles.infoHorario}>
            <span>QUINTA 04/05/2025</span>
            <span>08:15</span>
          </div>
          <div className={styles.botoesRegistro}>
            <button className={styles.entrada}>REGISTRAR ENTRADA</button>
            <button className={styles.saida}>REGISTRAR SAÍDA</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PaginaInicial;
