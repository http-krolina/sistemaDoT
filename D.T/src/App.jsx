// src/App.jsx
import Fundo from "./assets/Fundo.png";
import Login from "./components/Login/Login"; // Importando o componente Login
import styles from "./App.module.css"; // Importando o CSS

function App() {
  return (
    <div
      className={styles.appContainer} // Adicionando a classe CSS
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
      <Login />
    </div>
  );
}

export default App;
