import { useState } from "react";
import logo from "../../assets/LOGO1.png"; 
import styles from "./Cadastro.module.css"; 
import { Footer } from "../../components/Footer/Footer";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    nomeSocial: "",
    cpf: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    aceitouTermos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className={styles.cadastropage}>
      <header className={styles.header}>
        <img src={logo} alt="Logo da Empresa" className="logo" />
      </header>

      <div className={styles.containercadastro}>
        <div className={styles.formcard}>
          <h1>Olá! Que bom ver você por aqui!</h1>

          <form onSubmit={handleSubmit}>
            <div className={styles.formgroup}>
              <label htmlFor="nome-completo">Nome completo:</label>
              <input
                type="text"
                id="nome-completo"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                placeholder="Digite o seu nome completo"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="nome-social">
                Nome social: <span className={styles.opcional}>(Opcional)</span>
              </label>
              <input
                type="text"
                id="nome-social"
                name="nomeSocial"
                value={formData.nomeSocial}
                onChange={handleChange}
                placeholder="Digite o seu nome social"
              />
            </div>

            <div className={styles.formrow}>
              <div className={styles.formgroup}>
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="Digite o seu CPF"
                  required
                />
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite o seu E-mail"
                  required
                />
              </div>
            </div>

            <div className={styles.formrow}>
              <div className={styles.formgroup}>
                <label htmlFor="senha">Senha:</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Digite a sua senha"
                  required
                />
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="confirmar-senha">Confirmação de senha:</label>
                <input
                  type="password"
                  id="confirmar-senha"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  placeholder="Confirme a sua senha"
                  required
                />
              </div>
            </div>

            <div className={styles.checkboxcontainer}>
              <input
                type="checkbox"
                id="termos"
                name="aceitouTermos"
                checked={formData.aceitouTermos}
                onChange={handleChange}
                required
              />
              <label htmlFor="termos">Eu li e aceito os termos de uso</label>
            </div>

            <button className={styles.buttoncadastro} type="submit">
              CADASTRAR
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cadastro;
