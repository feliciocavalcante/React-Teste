import React from 'react';
import styles from './CompraRealizada.module.css';
import logo from '../../assets/img/logoNike.png';
import logoBranca from '../../assets/img/logoNikeBranca.png';
import produtoImg from '../../assets/img/tenistopo.png';

const CompraRealizada = () => {
    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        const date = new Date().toLocaleDateString();

        const content = `
      <html>
        <head>
          <title>Recibo de Compra - Digital Store</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              line-height: 1.6;
              color: #333;
            }
            h1, h2, h3 { color: #333; }
            .info-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
            }
            .product-item {
              display: flex;
              align-items: center;
              margin-bottom: 15px;
            }
            .product-item img {
              width: 60px;
              margin-right: 15px;
            }
            .total-price {
              font-size: 20px;
              font-weight: bold;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #e83e8c;">Digital Store</h1>
            <p>Recibo de Compra</p>
            <p>Data: ${date}</p>
          </div>

          <h3>Informações Pessoais</h3>
          <div class="info-grid">
            <p><strong>Nome:</strong> Francisco Moreira Pereira</p>
            <p><strong>CPF:</strong> 123.456.789-10</p>
            <p><strong>E-mail:</strong> francisco@email.com</p>
            <p><strong>Celular:</strong> (85) 99123-4567</p>
          </div>

          <h3>Informações de Entrega</h3>
          <div class="info-grid">
            <p><strong>Endereço:</strong> Rua João Pessoa, 123</p>
            <p><strong>Bairro:</strong> Centro</p>
            <p><strong>Cidade:</strong> Fortaleza</p>
            <p><strong>CEP:</strong> 60.123-456</p>
          </div>

          <h3>Informações de Pagamento</h3>
          <div class="info-grid">
            <p><strong>Forma de pagamento:</strong> MASTERCARD 4*7</p>
            <p><strong>Valor:</strong> R$ 219,00</p>
          </div>

          <h3>Resumo da Compra</h3>
          <div class="product-item">
            <img src="${produtoImg}" alt="Produto">
            <div>
              <p><strong>Tênis Nike Revolution 6</strong></p>
              <p>R$ 219,00</p>
            </div>
          </div>

          <div class="total-price">Total: R$ 219,00</div>
        </body>
      </html>
    `;

        printWindow.document.write(content);
        printWindow.document.close();
        printWindow.onload = () => {
            printWindow.print();
        };
    };

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={`${styles.container} ${styles.headerContainer}`}>
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="Logo Nike" />
                        <nav className={styles.desktopNav}>
                            <ul>
                                <li><a href="#">Início</a></li>
                                <li><a href="#">Produtos</a></li>
                                <li><a href="#">Categorias</a></li>
                                <li><a href="#">Meus Pedidos</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.headerActions}>
                        <div className={styles.searchBar}>
                         <input type="text" placeholder="Pesquisar..." />
                        <button><i className="fas fa-search"></i></button>
                        </div>
                        
                        <div>
                            <a href="#"><i className="fas fa-shopping-cart"></i></a>
                            
                        </div>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.successCard}>
                        <div className={styles.successIcon}>
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h2>Compra Realizada com Sucesso!</h2>

                        <section className={styles.infoSection}>
                            <h3>Informações Pessoais</h3>
                            <div className={styles.infoGrid}>
                                <p><strong>Nome:</strong> Francisco Moreira Pereira</p>
                                <p><strong>CPF:</strong> 123.456.789-10</p>
                                <p><strong>Email:</strong> francisco@email.com</p>
                                <p><strong>Celular:</strong> (85) 99123-4567</p>
                            </div>
                        </section>

                        <section className={styles.infoSection}>
                            <h3>Informações de Entrega</h3>
                            <div className={styles.infoGrid}>
                                <p><strong>Endereço:</strong> Rua João Pessoa, 123</p>
                                <p><strong>Bairro:</strong> Centro</p>
                                <p><strong>Cidade:</strong> Fortaleza</p>
                                <p><strong>CEP:</strong> 60.123-456</p>
                            </div>
                        </section>

                        <section className={styles.infoSection}>
                            <h3>Informações de Pagamento</h3>
                            <div className={styles.infoGrid}>
                                <p><strong>Forma de pagamento:</strong> MASTERCARD 4*7</p>
                                <p><strong>Valor:</strong> R$ 219,00</p>
                            </div>
                        </section>

                        <section className={styles.orderSummary}>
                            <h3>Resumo da Compra</h3>
                            <div className={styles.productItem}>
                                <img src={produtoImg} alt="Produto" />
                                <div>
                                    <p className={styles.productName}>Tênis Nike Revolution 6 Next Nature Masculino</p>
                                    <p className={styles.productPrice}>R$ 219,00</p>
                                </div>
                            </div>
                            <div className={styles.totalSection}>
                                <h3>Total</h3>
                                <p className={styles.totalPrice}>R$ 219,00</p>
                            </div>
                            <div className={styles.actionButtons}>
                                <button onClick={handlePrint} className={styles.btnPrimary}>Imprimir Recibo</button>
                                <a href="/" className={styles.btnSecondary}>Voltar ao Início</a>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <div className={`${styles.container} ${styles.footerContainer}`}>
                    <div className={styles.footerColumn}>
                        <img src={logoBranca} alt="Logo Nike Branca" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className={styles.socialIcons}>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className={styles.footerColumn}>
                        <h3>Informações</h3>
                        <ul>
                            <li><a href="#">Sobre a Digital Store</a></li>
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
                            <li><a href="#">Tênis</a></li>
                            <li><a href="#">Acessórios</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <h3>Contato</h3>
                        <address>
                            <p>Av. Santos Dumont, 1510 - 1</p>
                            <p>Aldeota - Fortaleza/CE</p>
                            <p>CEP: 60.150-161</p>
                            <p>+55 (85) 3051-3411</p>
                        </address>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>© 2025 Digital Store</p>
                </div>
            </footer>
        </div>
    );
};

export default CompraRealizada;
