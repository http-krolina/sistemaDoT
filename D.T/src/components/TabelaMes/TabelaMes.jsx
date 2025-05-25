// src/components/TabelaMes/TabelaMes.jsx

import React from 'react'; // Importe React se ainda não estiver
import styles from "./TabelaMes.module.css";

export default function TabelaMes() {
  const handleOkClick = () => {
    console.log("Botão OK clicado na Tabela Mês!");
    // Se você precisar pegar o valor do input do mês aqui, você pode:
    // const mesDigitado = document.querySelector(`.${styles.inputMes}`).value;
    // console.log("Mês digitado:", mesDigitado);
  };

  return (
    // Certifique-se de que todos os elementos estão dentro deste .container
    // Este container não terá estilos de "box" no CSS, apenas agrupa e ajuda na centralização.
    <div className={styles.container}>
      <h3 className={styles.titulo}>FOLHA DE PONTO</h3>
      <table className={styles.tabelaMes}>
        <tbody>
          <tr>
            <td className={styles.nomeM}>Mês |</td>
            <td>
              <input
                type="text"
                className={styles.inputMes}
                placeholder="Digite o mês"
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* ============================================================================== */}
      {/* NOVO: DIV PARA ENVOLVER E CENTRALIZAR APENAS O BOTÃO OK */}
      <div className={styles.okButtonWrapper}>
        <button className={styles.okButton} onClick={handleOkClick}>
          OK
        </button>
      </div>
      {/* ============================================================================== */}

    </div>
  );
}