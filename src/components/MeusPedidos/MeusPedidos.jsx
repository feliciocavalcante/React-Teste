import React, { useState } from 'react';
import styles from './MeusPedidos.module.css';
import logoNike from '../../assets/img/logoNike.png';
import logoNikeBranca from '../../assets/img/logoNikeBranca.png';
import tenis1 from '../../assets/img/tenis4.png';
import tenis2 from '../../assets/img/tenis3.png';
import tenis3 from '../../assets/img/tenistopo.png';
import tenis4 from '../../assets/img/tenis2.png';

const pedidos = [
  { img: tenis1, data: '12/05/2025', status: 'transit' },
  { img: tenis2, data: '05/05/2025', status: 'completed' },
  { img: tenis3, data: '28/04/2025', status: 'canceled' },
  { img: tenis4, data: '15/04/2025', status: 'completed' },
  { img: tenis2, data: '02/04/2025', status: 'completed' }
];

const MeusPedidos = () => {
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredPedidos = statusFilter === 'all'
    ? pedidos
    : pedidos.filter(p => p.status === statusFilter);

  return (
    <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerContent}>
                        <div className={styles.logo}>
                            <img src={logoNike} alt="Nike Logo" />
                        </div>
                        <div className={styles.searchBar}>
                            <input type="text" placeholder="Busca" />
                            <button><i className="fas fa-search" /></button>
                        </div>
                        <div className={styles.headerActions}>
                            <div className={styles.cart}>
                                <a href="#"><i className="fas fa-shopping-cart" /></a>
                                <span className={styles.cartCount}>2</span>
                            </div>
                            <div className={styles.userProfile}>
                                <a href="#"><i className="fas fa-user" /> Olá, Felicio</a>
                            </div>
                        </div>
                    </div>
                    <nav className={styles.mainNav}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Categorias</a></li>
                            <li><a href="#" className={styles.active}>Meus Pedidos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.accountContainer}>
            <aside className={styles.sidebar}>
              <h3>Meu Perfil</h3>
              <ul>
                <li><a href="#">Meu Perfil</a></li>
                <li><a href="#" className={styles.active}>Meus Pedidos</a></li>
                <li><a href="#">Minhas Informações</a></li>
                <li><a href="#">Métodos de Pagamento</a></li>
              </ul>
            </aside>

            <div className={styles.content}>
              <div className={styles.ordersHeader}>
                <h2>Meus Pedidos</h2>
                <div className={styles.statusFilter}>
                  <button
                    className={statusFilter === 'all' ? styles.active : ''}
                    onClick={() => setStatusFilter('all')}
                  >
                    Todos
                  </button>
                  <button
                    className={statusFilter === 'transit' ? styles.active : ''}
                    onClick={() => setStatusFilter('transit')}
                  >
                    Em trânsito
                  </button>
                  <button
                    className={statusFilter === 'completed' ? styles.active : ''}
                    onClick={() => setStatusFilter('completed')}
                  >
                    Finalizados
                  </button>
                  <button
                    className={statusFilter === 'canceled' ? styles.active : ''}
                    onClick={() => setStatusFilter('canceled')}
                  >
                    Cancelados
                  </button>
                </div>
              </div>

              <div className={styles.ordersList}>
                {filteredPedidos.map((pedido, index) => (
                  <div key={index} className={styles.orderItem}>
                    <div className={styles.orderInfo}>
                      <div className={styles.productImage}>
                        <img src={pedido.img} alt="Tênis Nike" />
                      </div>
                      <div className={styles.productDetails}>
                        <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                        <p className={styles.orderDate}>Pedido realizado em {pedido.data}</p>
                      </div>
                    </div>
                    <div className={`${styles.orderStatus} ${styles[pedido.status]}`}>
                      {pedido.status === 'transit' ? 'Produto em trânsito'
                        : pedido.status === 'completed' ? 'Finalizado'
                        : 'Cancelado'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>
                            <img src={logoNikeBranca} alt="Logo Branca" />
                        </div>

                        <div className={styles.footerLinks}>
                            <div className={styles.footerColumn}>
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
                                <p>Av. Santos Dumont, 1510 - 1</p>
                                <p>Aldeota, Fortaleza - CE</p>
                                <p>CEP: 60150-161</p>
                                <p>(85) 3051-3411</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footerBottom}>
                        <div className={styles.socialIcons}>
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                        </div>
                        <p>&copy; 2025 Digital College</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MeusPedidos;
