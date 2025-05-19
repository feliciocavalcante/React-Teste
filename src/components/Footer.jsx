import React from 'react';
import logoFooter from '../assets/img/tenis4.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logoFooter} alt="Digital Store" />
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-title">Informações</h3>
              <ul className="footer-menu">
                <li><a href="#">Sobre Digital Store</a></li>
                <li><a href="#">Segurança</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
                <li><a href="#">Meus Pedidos</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Categorias</h3>
              <ul className="footer-menu">
                <li><a href="#">Camisetas</a></li>
                <li><a href="#">Calças</a></li>
                <li><a href="#">Bonés</a></li>
                <li><a href="#">Headphones</a></li>
                <li><a href="#">Tênis</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Contato</h3>
              <address className="footer-contact">
                <p>Av. Santos Dumont, 1510 - 1 andar</p>
                <p>Aldeota, Fortaleza - CE</p>
                <p>CEP: 60150-161</p>
                <p>+55 85 3051-3411</p>
              </address>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">@ 2022 Digital Store</p>
          <div className="payment-methods">
            <i className="fa-brands fa-instagram" style={{ color: '#cf2a64' }}></i>
            <i className="fa-brands fa-facebook-f" style={{ color: '#025cf7' }}></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
