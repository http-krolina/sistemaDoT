import "./Login.module.css";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <h2>FAÇA LOGIN</h2>

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite o seu E-mail" />

        <label htmlFor="senha">Senha:</label>
        <div className="senha-container">
          <input type="password" id="senha" placeholder="Digite a sua senha" />
          <span className="toggle-visibility">##</span>
        </div>

        <a href="#" className="esqueci-senha">
          Esqueceu a senha?
        </a>

        <button className="btn entrar">ENTRAR</button>

        <hr className="divider" />

        <p className="frs">
          Se esse é o seu primeiro acesso, seja bem-vindo(a)!
        </p>
        <button className="btn criar">CRIAR CONTA</button>
      </div>

      <footer className="footer">Arteiros © 2025</footer>
    </>
  );
};

export default Login;
