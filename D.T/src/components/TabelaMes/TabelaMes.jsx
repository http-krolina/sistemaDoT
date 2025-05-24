import styles from "./TabelaMes.module.css";

export default function TabelaMes() {
  return (
    <div className={styles.container}>
      <h3 className={styles.titulo}>FOLHA DE PONTO</h3>
      <table className={styles.tabelaMes}>
        <tbody>
          <tr>
            <td className={styles.nomeM}>Mês</td>
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
    </div>
  );
}
