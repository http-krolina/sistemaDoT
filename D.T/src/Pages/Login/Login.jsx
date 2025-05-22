import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Login.module.css";
import Fundo from "../../assets/Fundo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={styles.appContainerLogin} // Adicionando a classe CSS
      style={{
        backgroundImage: `url(${Fundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Definindo a altura mínima da tela
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div className={styles.loginContainer}>
        <h2 className={styles.title}>FAÇA LOGIN</h2>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            className={styles.inputField}
            placeholder="Digite o seu E-mail"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">
            Senha:
          </label>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={styles.inputField}
              placeholder="Digite a sua senha"
            />
            <span
              className={styles.toggleVisibility}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </span>
          </div>
        </div>

        <a href="#" className={styles.forgotPassword}>
          Esqueceu a senha?
        </a>

        <button className={`${styles.button} ${styles.primaryButton}`}>
          ENTRAR
        </button>

        <div className={styles.divider} />

        <p className={styles.welcomeText}>
          Se esse é o seu primeiro acesso, seja bem-vinde!
        </p>
        <button className={`${styles.button} ${styles.secondaryButton}`}>
          <Link to="/Cadastro" className={styles.link}>
            CRIAR CONTA
          </Link>
        </button>
      </div>

      <footer className={styles.footer}>Arteiros © 2025</footer>
    </div>
  );
}

export default Login;
