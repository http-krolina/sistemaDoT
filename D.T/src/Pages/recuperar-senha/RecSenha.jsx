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
    navigate("/"); // Volta para a página de login
  };

  const handleRecover = () => {
    // Adicione aqui qualquer lógica de validação necessária para CPF e Matrícula
    if (cpf && matricula) {
      // Exemplo de validação simples
      navigate("./Confirmar-Senha"); // Use o caminho de rota definido!
    } else {
      alert("Por favor, preencha o CPF e a Matrícula.");
    }
  };

  return (
    // Agora o CenteredLayout envolve toda a sua seção de recuperação de senha
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
