import React, { useState } from 'react';
import styles from './CriaConta.module.css';
import logoNike from '../../assets/img/logoNike.png';
import tenis from '../../assets/img/tenis.png';
import logoNikeBranca from '../../assets/img/logoNikeBranca.png';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../SupabaseClient/supabaseClient';



export default function CriaConta() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (!nome || !email) {
      alert('Preencha nome e e-mail');
      return;
    }

    // Salvar temporariamente os dados no localStorage ou contexto
    localStorage.setItem('tempUserData', JSON.stringify({ nome, email }));
    navigate('/formulario');
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logoNike} alt="Logo Nike" />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles['signup-container']}>
            <div className={styles['form-container']}>
              <h2>Crie sua conta</h2>
              <p>Já possui uma conta?  <Link to="/index" >Entre aqui</Link>.</p>
              <form onSubmit={handleNext} className={styles['signup-form']}>
                <label>Nome*</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label>Email*</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" className={styles['btn-primary']}>Próximo</button>
                <p>Já possui uma conta? <Link to="/index">Entrar</Link></p>
              </form>
              <div className={styles['alternative-login']}>
                <p>Ou faça login com</p>
                <div className={styles['social-login']}>
                  <a href="#" className={styles['google-btn']}><i className="fab fa-google"></i></a>
                  <a href="#" className={styles['facebook-btn']}><i className="fab fa-facebook-f"></i></a>
                </div>
              </div>
            </div>
            <div className={styles['product-image']}>
              <img src={tenis} alt="Tênis esportivo" id="shoe-image" />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles['footer-content']}>
            <div className={styles['footer-logo']}>
              <img src={logoNikeBranca} alt="Logo Nike Branca" />
            </div>
            <div className={styles['footer-links']}>
              <div className={styles['footer-column']}>
                <h3>Informação</h3>
                <ul>
                  <li><a href="#">Sobre Digital Store</a></li>
                  <li><a href="#">Segurança</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Trabalhe conosco</a></li>
                  <li><a href="#">Meus Pedidos</a></li>
                </ul>
              </div>
              <div className={styles['footer-column']}>
                <h3>Categorias</h3>
                <ul>
                  <li><a href="#">Camisetas</a></li>
                  <li><a href="#">Calças</a></li>
                  <li><a href="#">Bonés</a></li>
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Tênis</a></li>
                </ul>
              </div>
              <div className={styles['footer-column']}>
                <h3>Contato</h3>
                <p>Av. Santos Dumont, 1510 - 1</p>
                <p>Aldeota, Fortaleza - CE</p>
                <p>CEP: 60150-161</p>
                <p>(85) 3051-3411</p>
              </div>
            </div>
          </div>
          <div className={styles['footer-bottom']}>
            <div className={styles['social-icons']}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
            <p>&copy; 2025 Digital College</p>
          </div>
        </div>
      </footer>
    </>
  );
}