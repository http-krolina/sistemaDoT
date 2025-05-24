import React from 'react';
import styles from './TabelaPonto.module.css'; // <--- Importando o CSS principal aqui

const TabelaPontoDetalhada = () => {
  return (
    // Reutilizando as classes do seu Relatorio.module.css
    <div className={styles.blocoCartaoPonto}>
      {/* Tabela de Ponto Detalhada (Card de Ponto) */}
      <div className={styles.cardPontoDetalhes}>
        <div className={styles.cardPontoHeader}>
          <p>EMISSÃO: 12/05/2025</p>
          <p>19:03:05</p>
        </div>
        <p className={styles.cardPontoTitle}>CARTÃO DE PONTO</p>
        <p className={styles.cardPontoInfo}>
          Empresa: XXXX Ltda (XXXX-XX-XX), Endereço: Rua do teste, 101, Recife - PE
        </p>
        <p className={styles.cardPontoInfo}>
          Registro: XXXX (XXXX-XX-XX), NOME: XXXXX, CPF: XXX.XXX.XXX-XX, RG: XXXXXXX
        </p>
        <p className={styles.cardPontoInfo}>
          Entrada: 08:00 Saída: 18:00 (Intervalo: 12:00 às 13:00)
        </p>
        <p className={styles.cardPontoInfo}>Funcionário: ITALO FERREIRA COSTA</p>
        <p className={styles.cardPontoInfo}>Matrícula: XXXXXX</p>
        <div className={styles.cardPontoObservacoes}>
          <p>Observações complementares: NOME: XXXX</p>
          <p>CNPJ: XX.XXX.XXX/0001-XX</p>
        </div>
      </div>

      {/* Tabela de Ponto Detalhada sem scroll interno */}
      <div className={styles.tabelaPontoContainer}>
        <table>
          <thead>
            <tr>
              <th>Dia</th>
              <th>Data</th>
              <th>Entrada</th>
              <th>Pausa Início</th>
              <th>Pausa Fim</th>
              <th>Saída</th>
              <th>Horas Extras</th>
              <th>Irregularidade</th>
              <th>QTDE</th>
              <th>Justificativa</th>
            </tr>
          </thead>
          <tbody>
            {/* Gerando algumas linhas de exemplo para forçar o scroll da PÁGINA */}
            {Array.from({ length: 30 }).map((_, index) => (
              <tr key={index}>
                <td>{`Dia ${index + 1}`}</td>
                <td>DD/MM</td>
                <td>08:00</td>
                <td>12:00</td>
                <td>13:00</td>
                <td>17:00</td>
                <td>01:00</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaPontoDetalhada;