import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingCart,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import tenisTopo from '../../assets/img/tenistopo.png';

import styles from './Compra.module.css';
import logo from '../../assets/img/logoNike.png';
import logoBranca from '../../assets/img/logoNikeBranca.png';
import tenis2 from '../../assets/img/tenis2.png';
import { Link } from 'react-router-dom';

const Compra = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(2);
  const [cartRemoved, setCartRemoved] = useState(false);

  const productPrice = 219.00;
  const shippingPrice = 19.90;
  const discountPrice = 21.90;

  const subtotal = productPrice * quantity;
  const total = subtotal + shippingPrice - discountPrice;
  const installment = total / 10;

  const toggleMenu = () => setMenuActive(!menuActive);
  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => Math.max(1, q - 1));
  const removeItem = () => {
    setCartRemoved(true);
    setCartCount(c => Math.max(0, c - 1));
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.logoContainer}>
              <button className={styles.menuToggle} onClick={toggleMenu}>
                {menuActive ? <FaTimes /> : <FaBars />}
              </button>
              <a href="#" className={styles.logo}>
                <div className={styles.logoIcon}>
                  <img src={logo} alt="Logo" />
                </div>
              </a>
            </div>

            <nav className={`${styles.mainNav} ${menuActive ? styles.active : ''}`}>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produto/:id'>Produtos</Link></li>
                <li><Link to='/Error404'>Categoria</Link></li>
                <li><Link to='/meus-pedidos'>Meus Pedidos</Link></li>
              </ul>
            </nav>

            <div className={styles.headerActions}>
              <div className={styles.searchContainer}>
                <input type="text" placeholder="Buscar..." />
                <button className={styles.searchBtn}><FaSearch /></button>
              </div>
              <a href="#" className={styles.cartBtn}>
                <FaShoppingCart />
                <span className={styles.cartCount}>{cartCount}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>MEU CARRINHO</h1>
          <div className={styles.cartContainer}>
            <div className={styles.cartItems}>
              <div className={styles.cartTable}>
                <div className={styles.cartTableHeader}>
                  <div>PRODUTO</div>
                  <div className={styles.prince2}>QUANTIDADE</div>
                  <div className={styles.prince}>UNITÁRIO</div>
                  <div className={styles.prince1}>TOTAL</div>
                  
                </div>

                {!cartRemoved && (
                  <div className={styles.cartItem}>
                    <div className={styles.cartItemProduct}>
                      <div className={styles.productImage}>
                        <img src={tenisTopo} alt="Tênis Nike" />
                      </div>
                      <div className={styles.productDetails}>
                        <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
                        <p>Branco / Azul</p>
                        <p>Tamanho: 42</p>
                      </div>
                    </div>
                    <div className={styles.cartItemQuantity}>
                      <button  className={styles.decrease} onClick={decrease}><i class="fas fa-minus"></i></button>
                      <span>{quantity}</span>
                      <button className={styles.decrease} onClick={increase}><i class="fas fa-plus"></i></button>
                    </div>
                    <div className={styles.cartItemPrice}>R$ 219,00</div>
                    <div className={styles.cartItemTotal}>R$ {subtotal.toFixed(2).replace('.', ',')}</div>
                    <div className={styles.cartItemRemove}>
                      <button className={styles.remove} onClick={removeItem}>REMOVER</button>
                    </div>
                  </div>
                )}

                {cartRemoved && (
                  <div className={styles.emptyCartMessage}>Seu carrinho está vazio</div>
                )}
              </div>

              <div className={styles.cartActions}>
                <div>
                  <h3>Cupom de desconto</h3>
                  <div className={styles.inputGroup}>
                    <input type="text" value="CUPOM10" />
                    <button>OK</button>
                  </div>
                </div>
                <div>
                  <h3>Calcular frete</h3>
                  <div className={styles.inputGroup}>
                    <input type="text" value="60150-161" />
                    <button>OK</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cartSummary}>
              <h2>RESUMO</h2>
              <div className={styles.summaryItems}>
                <div className={styles.subtotal}><span>Subtotal</span><span>R$ {subtotal.toFixed(2).replace('.', ',')}</span></div>
                <div className={styles.subtotal}><span>Frete</span><span>R$ 19,90</span></div>
                <div className={styles.subtotal}><span>Desconto</span><span className={styles.discount}>R$ 21,90</span></div>
              </div>
              <div className={styles.summaryTotal}>
                <div>Total</div>
                <div>
                  <div>R$ {total.toFixed(2).replace('.', ',')}</div>
                  <div className={styles.installments}>ou 10x de R$ {installment.toFixed(2).replace('.', ',')} sem juros</div>
                </div>
              </div>
              <Link to='/compra-realizada'><button className={styles.checkoutBtn}><a href="">FINALIZAR COMPRA</a></button></Link>
            </div>
          </div>

          <Link to='/selecionado'><div className={styles.relatedProducts}>
            <div className={styles.sectionHeader}>
              <h2>Produtos Relacionados</h2>
              <a href="#" className={styles.viewAll}>Ver todos <FaChevronRight /></a>
            </div>
            <div className={styles.productsGrid}>
              {[tenis2, tenis2, tenis2, tenis2].map((img, i) => (
                <div key={i} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <span className={styles.discountBadge}>-20% OFF</span>
                    <img src={img} alt="Tênis Nike" />
                  </div>
                  <div className={styles.productInfo}>
                    <span className={styles.productCategory}>X-Series YR - Masculino</span>
                    <h3 className={styles.productName}>X-Series YR - Masculino</h3>
                    <div className={styles.productPrice}>R$ 599</div>
                  </div>
                </div>
              ))}
            </div>
          </div></Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <div className={styles.footerLogo}>
                <div className={styles.logoIcon}>
                  <img src={logoBranca} alt="" />
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <div className={styles.socialLinks}>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <h3>Informações</h3>
              <ul>
                <li><a href="#">Sobre Digital Store</a></li>
                <li><a href="#">Segurança</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
                <li><a href="#">Meus Pedidos</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>Categorias</h3>
              <ul>
                <li><a href="#">Camisetas</a></li>
                <li><a href="#">Calças</a></li>
                <li><a href="#">Bonés</a></li>
                <li><a href="#">Headphones</a></li>
                <li><a href="#">Tênis</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>Contato</h3>
              <address>
                <p>Av. Santos Dumont, 1510 - 1</p>
                <p>Andar - Aldeota, Fortaleza - CE</p>
                <p>60150-161</p>
                <p>(85) 3051-3411</p>
              </address>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 Digital Store</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Compra;