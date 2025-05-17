// src/App.jsx
import { useState } from "react";
import styles from "./App.module.css";
import Fundo from "./assets/Fundo.png";
import Login from "./components/Login"; // Verifique se o caminho está correto

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={styles.appContainer} // Correto: usando className com CSS Modules
      style={{
        backgroundImage: `url(${Fundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
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
