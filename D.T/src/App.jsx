// src/App.jsx
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
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
              type="password"
              id="password"
              className={styles.inputField}
              placeholder="Digite a sua senha"
            />
            <span className={styles.toggleVisibility}>##</span>
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
          Se esse é o seu primeiro acesso, seja bem-vindo(a)!
        </p>
        <button className={`${styles.button} ${styles.secondaryButton}`}>
          CRIAR CONTA
        </button>
      </div>
    </div>
  );
}

export default App;
