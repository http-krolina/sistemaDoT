import styles from "./Cadastro.module.css";

function Cadastro() {
  return (
    <div className={styles.appContainerCadastro}>
      <h2 className={styles.title}>FAÇA SEU CADASTRO</h2>

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
        <input
          type="password"
          id="password"
          className={styles.inputField}
          placeholder="Digite a sua senha"
        />
      </div>

      <button className={styles.button}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;
