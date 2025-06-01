import React from 'react';
import logo from '../assets/img/logoNike.png';
import cartIcon from '../assets/img/carrinho.png';
import tenistopo from '../assets/img/tenistopo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="Nike Store" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar produto..." />
          <button className="search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="header-actions">
          
          <Link to="/criar-conta" className="header-link" >Cadastre-se</Link>
         <Link to='/index'> <button className="primary-button">Entrar</button></Link>
          <a href="#" className="cart-icon">
            <img src={cartIcon} alt="Carrinho" />
          </a>
        </div>

        <div className="cart-dropdown" id="cartDropdown">
          <h3 className="cart-title">Meu Carrinho</h3>
          <div className="cart-divider"></div>

          <div className="cart-items">
            <div className="cart-item">
              <div className="item-image">
                <img src={tenistopo} alt="Tênis Nike" />
              </div>
              <div className="item-details">
                <h4 className="item-name">Tênis Nike Revolution 6 Next Nature Masculino</h4>
                <div className="item-price">
                  <span className="current-price">R$ 219,00</span>
                  <span className="original-price">R$ 219,00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-divider"></div>

          <div className="cart-total">
            <span className="total-label">Valor total:</span>
            <span className="total-price">R$ 219,00</span>
          </div>

          <div className="cart-actions">
            <a href="#" className="empty-cart-btn">Esvaziar</a>
            <a href="#" className="view-cart-btn">Ver Carrinho</a>
          </div>
        </div>

        <div className="cart-overlay" id="cartOverlay"></div>
      </div>

      <nav className="main-nav">
        <div className="container">
          <button className="menu-toggle" id="menu-toggle">
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul className="nav-list" id="nav-list">
            <li><a href="" className="nav-link">Home</a></li>
            <li> <Link to="/produto/:id" className="nav-link">Produtos</Link></li>
            <li><Link to="/Error404" className="nav-link">Categorias</Link></li>
            <li><Link to="/meus-pedidos" className="nav-link">Meus Pedidos</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
