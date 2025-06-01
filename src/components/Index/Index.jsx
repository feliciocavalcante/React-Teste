import React, { useState } from 'react';
import styles from './index.module.css';
import tenis from '../../assets/img/tenis.png';
import { Link } from 'react-router-dom';
import { supabase } from '../SupabaseClient/supabaseClient';
import { useNavigate } from 'react-router-dom';



export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha });

    if (error) {
      alert('Login falhou: ' + error.message);
    } else {
      alert('Login realizado!');
      navigate('/'); // Página principal
    }
  };
  return (
    <div >
      <>
        <main className={styles.container}>

          <div className={styles["login-container"]}>
            <div className={styles["login-card"]}>
              <h2>Acesse sua conta</h2>
              <p className={styles.subtitle}>
                Novo cliente? <Link to="/criar-conta" className={styles.link}>Criar conta</Link>
              </p>
              <form onSubmit={handleLogin}>
                <div className={styles["form-group"]}>
                  <label htmlFor="email">Login*</label>
                  <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="senha">Senha*</label>
                  <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                </div>
                <div className={styles["forgot-password"]}>
                  <a href="#" className={styles.link}>Esqueci minha senha</a>
                </div>
                <button type="submit" className={styles["btn-login"]}>
                  Acessar Conta
                </button>
              </form>
            </div>
          </div>
           
           <div className={styles["image-container"]}>
            <img src={tenis} alt="Tenis Nike" />
           </div>
          
        </main>
        <footer>
          <div className={styles["footer-content"]}>
            <div className={`${styles["footer-column"]} ${styles.brand}`}>
              <h3>
                <i className="fas fa-shopping-bag" /> Digital Store
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div className={styles["social-icons"]}>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
            <div className={styles["footer-column"]}>
              <h4>Informação</h4>
              <ul>
                <li>
                  <a href="#">Sobre Digital Store</a>
                </li>
                <li>
                  <a href="#">Segurança</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Trabalhe conosco</a>
                </li>
                <li>
                  <a href="#">Meus Pedidos</a>
                </li>
              </ul>
            </div>
            <div className={styles["footer-column"]}>
              <h4>Categorias</h4>
              <ul>
                <li>
                  <a href="#">Camisetas</a>
                </li>
                <li>
                  <a href="#">Calças</a>
                </li>
                <li>
                  <a href="#">Bonés</a>
                </li>
                <li>
                  <a href="#">Headphones</a>
                </li>
                <li>
                  <a href="#">Tênis</a>
                </li>
              </ul>
            </div>
            <div className={styles["footer-column"]}>
              <h4>Contato</h4>
              <p>
                Av. Santos Dumont, 1510 - 1<br />
                andar - Aldeota, Fortaleza -<br />
                CE, 60150-161
              </p>
              <p>(85) 3051-3411</p>
            </div>
          </div>
          <div className={styles["footer-bottom"]}>
            <p>© 2023 Digital College</p>
          </div>
        </footer>
      </>
    </div>
  );
}
