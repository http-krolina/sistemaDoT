// src/App.jsx
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"; // Importe o Footer

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>
        {/* Seu conteúdo principal aqui */}
      </main>
      <Footer /> {/* Adicione o Footer aqui */}
    </div>
  );
}

export default App;
