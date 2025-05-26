import { Link } from "react-router-dom";
import styles from "./BaterPonto.module.css";
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
          <div className={styles.foto}>
            <p>FOTO</p>
          </div>
          <div className={styles.dados}>
            <h2>ÍTALO FERREIRA COSTA</h2>
            <p>DESENVOLVEDOR FRONT-END</p>
            <p>ADMISSÃO: 01 DE MAIO DE 2024</p>
            <p>PREVISÃO DE FÉRIAS: 15 DE MAIO DE 2025</p>
          </div>
        </div>

        {/* <<-- REGISTRO DE PONTO COM NOVO LAYOUT -->> */}
        <div className={styles.registro}>
          <h3 className={styles.registroTitulo}>REGISTRAR PONTO</h3>{" "}
          {/* Título com classe específica */}
          <div className={styles.horarioDisplay}>
            <span className={styles.horas}>08</span>
            <span className={styles.h}>h</span>
            <span className={styles.minutos}>15</span>
            <span className={styles.min}>min</span>
            {/* Opcional: o "69" é um contador, poderia ser um span ou div com position absolute */}
            {/* <span className={styles.notificationBadge}>69</span> */}
          </div>
          <p className={styles.dataDisplay}>
            {/* <<-- Ícone de Calendário aqui (exemplo) -->> */}
            {/* Se usar react-icons: <FaRegCalendarAlt className={styles.iconeData} /> */}
            {/* Se usar imagem: <img src={IconeCalendario} alt="Calendário" className={styles.iconeData} /> */}
            <span className={styles.iconeData}></span> Segunda-feira, 12/05/2025
          </p>

          {/* NOVO TEXTO AQUI */}
          <p className={styles.infoPonto}>Ponto registrado às 08:00</p>
          {/* FIM DO NOVO TEXTO */}

          {/* O botão "SOLICITAR" original que você queria tornar navegável */}
          {/* Mantenha o Link envolvendo o botão para que ele seja clicável */}
          
        </div>

         {/* <<-- NOVA CAIXA COM O FORMULÁRIO -->> */}
                <div className={styles.outraBox}>
                  <h2 className={styles.tituloForm}>CORRIGIR PONTO</h2>
        
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="dataAjuste" className={styles.formLabel}>Data:</label>
                      <input
                        type="text"
                        id="dataAjuste"
                        placeholder="XX/XX/XXXX"
                        className={styles.formInput}
                      />
                    </div>
        
                    <div className={styles.formGroup}>
                      <label htmlFor="registroAjuste" className={styles.formLabel}>Registro a ser ajustado:</label>
                      <input
                        type="text"
                        id="registroAjuste"
                        placeholder="Entrada/Pausa/Saída"
                        className={styles.formInput}
                      />
                    </div>
        
                    <div className={styles.formGroup}>
                      <label htmlFor="horarioRegistrado" className={styles.formLabel}>Horário registrado:</label>
                      <input
                        type="text"
                        id="horarioRegistrado"
                        placeholder="XX : XX"
                        className={styles.formInput}
                      />
                    </div>
        
                    <div className={styles.formGroup}>
                      <label htmlFor="horarioCorreto" className={styles.formLabel}>Horário correto:</label>
                      <input
                        type="text"
                        id="horarioCorreto"
                        placeholder="XX : XX"
                        className={styles.formInput}
                      />
                    </div>
        
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label htmlFor="motivoAjuste" className={styles.formLabel}>Motivo do ajuste:</label>
                      <textarea
                        id="motivoAjuste"
                        className={`${styles.formInput} ${styles.textArea}`}
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
        
                  <Link to="/confirmar-correcao">
          <button className={styles.solicitarAjusteButton}>SOLICITAR</button>
        </Link>
                </div>
        
                <Footer />
              </div>
            </div>
          );
        };
        
        export default PaginaInicial;