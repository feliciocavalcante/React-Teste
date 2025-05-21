import React from 'react';
import styles from './index.module.css';
import tenis from '../../assets/img/tenis.png';

export default function Index() {
  return (
    <div>
      <>
        <main className={styles.container}>
          <div className={styles["login-container"]}>
            <div className={styles["login-card"]}>
              <h2>Acesse sua conta</h2>
              <p className={styles.subtitle}>
                Novo cliente?{" "}
                <a href="#" className={styles.link}>
                  Criar registro
                </a>{" "}
                se{" "}
                <a href="#" className={styles.link}>
                  aqui
                </a>
                .
              </p>
              <form>
                <div className={styles["form-group"]}>
                  <label htmlFor="email">Login*</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Digite seu login ou e-mail"
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="senha">Senha*</label>
                  <input
                    type="password"
                    id="senha"
                    placeholder="Digite sua senha"
                  />
                </div>
                <div className={styles["forgot-password"]}>
                  <a href="#" className={styles.link}>
                    Esqueci minha senha
                  </a>
                </div>
                <button type="submit" className={styles["btn-login"]}>
                  <a href="/Homeindex.html">Acessar Conta</a>
                </button>
                <div className={styles["alt-login"]}>
                  <p>Ou faça login com</p>
                  <div className={styles["social-login"]}>
                    <a href="#" className={styles["social-btn"]}>
                      <i
                        className="fa-brands fa-google"
                        style={{ color: "#f70808" }}
                      />
                    </a>
                    <a href="#" className={styles["social-btn"]}>
                      <i
                        className="fa-brands fa-facebook-f"
                        style={{ color: "#008cf7" }}
                      />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={styles["product-display"]}>
            {/* Imagem dos tênis será aplicada via CSS como background */}
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
