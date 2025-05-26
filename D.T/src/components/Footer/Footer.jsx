import React, { useState, useEffect } from 'react'; 
import styles from "./Footer.module.css"; 

export function Footer() { 
  const [isVisible, setIsVisible] = useState(false); 

 
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 5);

    setIsVisible(isAtBottom);

    
  };

  
  useEffect(() => {
    handleScroll();

    
    window.addEventListener('scroll', handleScroll);

     
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`${styles.footer} ${isVisible ? styles.visible : ''}`}> {/* <--- APLICA A CLASSE CONDICIONALMENTE */}
      <div className={styles.footerContent}>
        <p>Arteiros © 2025</p>
      </div>
    </footer>
  );
}