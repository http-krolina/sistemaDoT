// src/components/Header/Header.jsx
import styles from "./Header.module.css";
import Logo from "../Logo/Logo"; // Importe o componente Logo

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo /> {/* Adicione o Logo aqui */}
      {/* Outros elementos do header se necessário */}
    </header>
  );
};

export default Header;
