// src/components/PasswordRecovery/Step1.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecSenha.module.css";

function RecSenha() {
  const [cpf, setCpf] = useState("");
  const [matricula, setMatricula] = useState("");
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
    
    if (cpf && matricula) {
     
      navigate("./Confirmar-Senha"); 
    } else {
      alert("Por favor, preencha o CPF e a Matrícula.");
    }
  };

  return (
    
    <section className={styles.section2}>
      <div className={styles.div1sec2}>
        <h2>Recupere a sua senha:</h2>
      </div>

      <div className={styles.divscentrais}>
        <label htmlFor="cpf">CPF:</label>
        <br />
        <div className={styles.inputContainer}>
          <input
            placeholder="Digite Seu CPF"
            className={styles.inputstyle}
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.divscentrais}>
        <label htmlFor="matricula">Matricula:</label>
        <br />
        <div className={styles.inputContainer}>
          <input
            placeholder="Digite Sua Matricula"
            className={styles.inputstyle}
            type="text"
            id="matricula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
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
          RECUPERAR SENHA
        </button>
      </div>
    </section>
  );
}

export default RecSenha;
