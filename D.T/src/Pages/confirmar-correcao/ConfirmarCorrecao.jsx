import { Link } from "react-router-dom";
import styles from "./ConfirmarCorrecao.module.css";
import Logo from "../../assets/LOGO1.png";
import { Footer } from "../../components/Footer/Footer";
import IconeEntrada from "../../assets/entrada.png";
import IconePausa from "../../assets/Pausa.png";
import IconeRetorno from "../../assets/retorno.png";
import IconeSaida from "../../assets/Saida.png";
import IconeData from "../../assets/data.png";
import IconeLocalizacao from "../../assets/Local.png";
import IconeTelefone from "../../assets/Contato.png";
import IconePermitido from "../../assets/Verificação.png";
import IconeHorario from "../../assets/Horario.png";
import ImagemMapa from "../../assets/Recife.png";

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

        
        <div className={styles.registro}>
          <h3 className={styles.registroTitulo}>REGISTRAR PONTO</h3>{" "}
          <div className={styles.horarioDisplay}>
            <span className={styles.horas}>08</span>
            <span className={styles.h}>h</span>
            <span className={styles.minutos}>15</span>
            <span className={styles.min}>min</span>
          </div>
          <p className={styles.dataDisplay}>
            <img
              src={IconeData}
              alt="Ícone de Data"
              className={styles.iconeData}
            />{" "}
            Segunda-feira, 12/05/2025
          </p>
          <div className={styles.botoesGrid}>
            <Link to="/bater-ponto" className={styles.registroButton}>
              <img
                src={IconeEntrada}
                alt="Ícone de Entrada"
                className={styles.buttonIcon}
              />
              REGISTRAR ENTRADA
            </Link>
            <button className={styles.registroButton}>
              <img
                src={IconePausa}
                alt="Ícone de Pausa"
                className={styles.buttonIcon}
              />
              REGISTRAR PAUSA
            </button>
            <button className={styles.registroButton}>
              <img
                src={IconeRetorno}
                alt="Ícone de Retorno de Pausa"
                className={styles.buttonIcon}
              />
              RETORNO PAUSA
            </button>
            <button className={styles.registroButton}>
              <img
                src={IconeSaida}
                alt="Ícone de Saída"
                className={styles.buttonIcon}
              />
              REGISTRAR SAÍDA
            </button>
          </div>
        </div>

        
        <div className={styles.outraBox}>
          <h2 className={styles.tituloForm}>CORRIGIR PONTO</h2>
          <p className={styles.mensagemCorrecao}>
            SOLICITAÇÃO DE AJUSTE ENVIADA PARA ANALISE!
          </p>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}></div>
          </div>
        </div>

        
        <div className={styles.localizacaoBox}>
          <div className={styles.localizacaoDetalhes}>
            <p>
              <img
                src={IconeLocalizacao}
                alt="Endereço"
                className={styles.localizacaoIcone}
              />{" "}
              Rua do Apólo 181, Recife, PE, 50030-220
            </p>
            <p className={styles.local}>Local: Porto Digital</p>
            <p>
              <img
                src={IconeTelefone}
                alt="Telefone"
                className={styles.localizacaoIcone}
              />{" "}
              (81) 3419-8000
            </p>
            <p>
              <img
                src={IconePermitido}
                alt="Área Permitida"
                className={styles.localizacaoIcone}
              />{" "}
              Dentro da área permitida.
            </p>
            <p>
              <img
                src={IconeHorario}
                alt="Horário Atual"
                className={styles.localizacaoIcone}
              />{" "}
              08 : 15
            </p>
          </div>
          <div className={styles.mapaContainer}>
            <img
              src={ImagemMapa}
              alt="Mapa da Localização"
              className={styles.mapaImagem}
            />
          </div>
        </div>
      </div>{" "}
      
      <Footer />
    </div>
  );
};

export default PaginaInicial;