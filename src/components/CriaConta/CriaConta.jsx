import React, { useEffect } from 'react';
import styles from './CriaConta.module.css';
import logoNike from '../../assets/img/logoNike.png';
import tenis from '../../assets/img/tenis.png';
import logoNikeBranca from '../../assets/img/logoNikeBranca.png';
import { Link } from 'react-router-dom';
export default function CriaConta() {
  useEffect(() => {
    const form = document.getElementById('signup-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        if (!nome || !email) {
          alert('Por favor, preencha todos os campos obrigatórios.');
          return;
        }

        if (!isValidEmail(email)) {
          alert('Por favor, insira um email válido.');
          return;
        }

        alert('Conta criada com sucesso!');
        form.reset();
      });
    }

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const shoeImage = document.getElementById('shoe-image');
    if (shoeImage) {
      shoeImage.addEventListener('mouseover', function () {
        this.style.transform = 'rotate(-5deg) scale(1.05)';
      });

      shoeImage.addEventListener('mouseout', function () {
        this.style.transform = 'rotate(-15deg)';
      });

      let position = 0;
      const floatAnimation = () => {
        position += 0.01;
        const yOffset = Math.sin(position) * 10;
        shoeImage.style.transform = `rotate(-15deg) translateY(${yOffset}px)`;
        requestAnimationFrame(floatAnimation);
      };

      floatAnimation();
    }

    const createMobileMenu = () => {
      const header = document.querySelector('header');
      if (header) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        header.querySelector('.container').appendChild(mobileMenuBtn);
        mobileMenuBtn.addEventListener('click', () => {
          alert('Menu mobile seria aberto aqui');
        });
      }
    };

    if (window.innerWidth < 768) {
      createMobileMenu();
    }

    window.addEventListener('resize', function () {
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      if (window.innerWidth < 768 && !mobileMenuBtn) {
        createMobileMenu();
      } else if (window.innerWidth >= 768 && mobileMenuBtn) {
        mobileMenuBtn.remove();
      }
    });
  }, []);

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
              <form id="signup-form">
                <div className={styles['form-group']}>
                  <label htmlFor="nome">Nome*</label>
                  <input type="text" id="nome" placeholder="Insira seu nome" required />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" placeholder="Insira seu email" required />
                </div>
                <Link to='/formulario'><button type="submit" className={styles['btn-primary']}>Criar Conta</button></Link>
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