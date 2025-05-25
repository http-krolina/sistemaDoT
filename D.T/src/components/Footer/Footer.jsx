// src/components/Footer/index.jsx (ou onde seu componente Footer está localizado)
import React, { useState, useEffect } from 'react'; // <--- IMPORTE useState e useEffect
import styles from "./Footer.module.css"; // Certifique-se de que este caminho está correto

export function Footer() { // Mantenha a exportação como 'export function' se você importa como { Footer }
  const [isVisible, setIsVisible] = useState(false); // <--- ESTADO PARA CONTROLAR A VISIBILIDADE

  // FUNÇÃO PARA LIDAR COM A ROLAGEM
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Lógica para detectar se o usuário está no final da página
    // Adicione uma pequena margem (ex: 5px) para compensar arredondamentos.
    const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 5);

    // Atualiza o estado de visibilidade
    setIsVisible(isAtBottom);

    // --- LOGS PARA DEPURACAO (REMOVER QUANDO FUNCIONAR) ---
    // console.log("--- Scroll Event ---");
    // console.log("scrollTop:", scrollTop);
    // console.log("clientHeight:", clientHeight);
    // console.log("scrollHeight:", scrollHeight);
    // console.log("isAtBottom:", isAtBottom);
    // console.log("--------------------");
  };

  // useEffect para adicionar e remover o event listener de rolagem
  useEffect(() => {
    // Chama handleScroll uma vez na montagem inicial.
    // Isso é útil se a página for muito curta e já estiver no final.
    handleScroll();

    // Adiciona o event listener de rolagem à janela
    window.addEventListener('scroll', handleScroll);

    // Função de limpeza: Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array de dependências vazio: o efeito roda apenas uma vez na montagem/desmontagem

  return (
    <footer className={`${styles.footer} ${isVisible ? styles.visible : ''}`}> {/* <--- APLICA A CLASSE CONDICIONALMENTE */}
      <div className={styles.footerContent}>
        <p>Arteiros © 2025</p>
      </div>
    </footer>
  );
}