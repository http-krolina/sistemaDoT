// src/components/PasswordRecovery/Step1.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConfirmarSenha.module.css";

function ConfirmarSenha() {
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

  const navigate = useNavigate();

  const togglePassword = (id) => {
    const input = document.getElementById(id);
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleRecover = () => {
    navigate("/pagina-inicial");
  };

  return (
    <section className={styles.section2}>
      <div className={styles.div1sec2}>
        <h2>Recupere a sua senha</h2>
      </div>

      <div className={styles.divscentrais}>
        <label htmlFor="Nova-Senha">Nova Senha:</label>
        <br />
        <div className={styles.inputContainer}>
          <input
            placeholder="Digite sua senha"
            className={styles.inputstyle}
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <img
            className={styles.olho}
            src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
            onClick={() => togglePassword("senha")}
            alt="Mostrar senha"
          />
        </div>
      </div>

      <div className={styles.divscentrais}>
        <label htmlFor="Repita a senha">Confirme sua senha:</label>
        <br />
        <div className={styles.inputContainer}>
          <input
            placeholder="Digite novamente sua senha"
            className={styles.inputstyle}
            type="password"
            id="senhaConfirmacao"
            value={senhaConfirmacao}
            onChange={(e) => setSenhaConfirmacao(e.target.value)}
          />
          <img
            className={styles.olho}
            src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
            onClick={() => togglePassword("senhaConfirmacao")}
            alt="Mostrar senha"
          />
        </div>
      </div>

      <div className={styles.botoesContainer}>
        <button
          className={`${styles.botoes} ${styles.botaocan}`}
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          className={`${styles.botoes} ${styles.botaorec}`}
          onClick={handleRecover}
        >
          Confirmar
        </button>
      </div>
    </section>
  );
}

export default ConfirmarSenha;
