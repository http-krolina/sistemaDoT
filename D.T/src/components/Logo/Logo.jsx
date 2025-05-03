// src/components/Logo/Logo.jsx
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <p className={styles.topText}>Sua jornada de trabalho começa com</p>
      <h1 className={styles.mainTitle}>SEU PONTO SEGURO!</h1>
      <div className={styles.divider}></div>
      <p className={styles.subtitle}>
        Registro e gestão de jornada sem complicação.
        <br />
        Controle para a empresa, autonomia para o time.
      </p>
    </div>
  );
};

export default Logo;
