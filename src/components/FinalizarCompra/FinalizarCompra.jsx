import React, { useEffect } from 'react';
import logoNike from '../../assets/img/logoNike.png';
import tenistopo from '../../assets/img/tenistopo.png';
import logoNikeBranca from '../../assets/img/logoNikeBranca.png';
import styles from './FinalizarCompra.module.css';



export default function FinalizarCompra() {
   useEffect(() => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const printReceiptBtn = document.getElementById('print-receipt');

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        alert('Menu mobile será exibido aqui!');
      });
    }

    if (printReceiptBtn) {
      printReceiptBtn.addEventListener('click', () => {
        const printContent = document.querySelector('.success-card')?.cloneNode(true);

        const printHeader = document.createElement('div');
        printHeader.innerHTML = `
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #e83e8c; font-size: 24px; margin-bottom: 5px;">Digital Store</h1>
            <p>Recibo de Compra</p>
            <p>Data: ${new Date().toLocaleDateString()}</p>
          </div>
        `;

        printContent?.querySelector('.action-buttons')?.remove();

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
          <html>
          <head>
            <title>Recibo de Compra - Digital Store</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                padding: 20px;
              }
              .success-card {
                max-width: 800px;
                margin: 0 auto;
              }
              .product-item {
                display: flex;
                align-items: center;
                padding: 10px;
                background-color: #f9f9f9;
                border-radius: 5px;
                margin-bottom: 15px;
              }
              .total-section {
                display: flex;
                justify-content: space-between;
                margin: 20px 0;
                border-top: 1px solid #eee;
                padding-top: 15px;
              }
              .total-price {
                font-size: 20px;
                font-weight: 700;
              }
              @media print {
                body {
                  print-color-adjust: exact;
                  -webkit-print-color-adjust: exact;
                }
              }
            </style>
          </head>
          <body>
            ${printHeader.outerHTML}
            ${printContent?.outerHTML || '<p>Nada para imprimir</p>'}
          </body>
          </html>
        `);

        printWindow.document.close();
        printWindow.onload = () => printWindow.print();
      });
    }

    console.log('Dados do pedido carregados com sucesso!');
  }, []);
   return (
    <div>
      <header>
        <div className={`${styles.container} ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <img src={logoNike} alt="Logo" />
          </div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Meus Pedidos</a></li>
            </ul>
          </nav>
          <div className={styles.headerActions}>
            <button className={styles.botao}>Entrar</button>
            <a href="#" className={styles.cartIcon}>
              <i className="fas fa-shopping-cart"></i> <span>3</span>
            </a>
          </div>
        </div>
      </header>

      <main className={styles.container2}>
        <h2 className={styles.pageTitle}>Finalizar Compra</h2>

        <div className={styles.checkoutContainer}>
          <div className={styles.checkoutForm}>
            {/* Informacoes Pessoais */}
            <section className={styles.formSection}>
              <h3>Informacoes Pessoais</h3>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" placeholder="Digite seu nome completo" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu e-mail" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" placeholder="000.000.000-00" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" placeholder="(00) 00000-0000" />
              </div>
            </section>

            {/* Endereco de Entrega */}
            <section className={styles.formSection}>
              <h3>Endereco de Entrega</h3>
              <div className={styles.formGroup}>
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" placeholder="00000-000" />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="endereco">Endereco</label>
                  <input type="text" id="endereco" placeholder="Rua, Avenida, etc." />
                </div>
                <div className={`${styles.formGroup} ${styles.small}`}>
                  <label htmlFor="numero">Numero</label>
                  <input type="text" id="numero" placeholder="Nº" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="complemento">Complemento</label>
                <input type="text" id="complemento" placeholder="Apto, Bloco, etc." />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="bairro">Bairro</label>
                  <input type="text" id="bairro" placeholder="Seu bairro" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="cidade">Cidade</label>
                  <input type="text" id="cidade" placeholder="Sua cidade" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="estado">Estado</label>
                <select id="estado">
                  <option value="">Selecione o estado</option>
                  {['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'].map(uf => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>
              </div>
            </section>

            {/* Pagamento */}
            <section className={styles.formSection}>
              <h3>Informacoes de Pagamento</h3>
              <div className={styles.paymentOptions}>
                <div className={styles.paymentOption}>
                  <input type="radio" id="cartao" name="pagamento" defaultChecked />
                  <label htmlFor="cartao">Cartao de Credito</label>
                </div>
                <div className={styles.paymentOption}>
                  <input type="radio" id="boleto" name="pagamento" />
                  <label htmlFor="boleto">Boleto Bancario</label>
                </div>
                <div className={styles.paymentOption}>
                  <input type="radio" id="pix" name="pagamento" />
                  <label htmlFor="pix">PIX</label>
                </div>
              </div>
              <div className={styles.paymentForm} id="cartao-form">
                <div className={styles.formGroup}>
                  <label htmlFor="cartao-numero">Numero do Cartao</label>
                  <input type="text" id="cartao-numero" placeholder="0000 0000 0000 0000" />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="cartao-nome">Nome no Cartao</label>
                    <input type="text" id="cartao-nome" placeholder="Nome como está no cartão" />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={`${styles.formGroup} ${styles.small}`}>
                    <label htmlFor="cartao-validade">Validade</label>
                    <input type="text" id="cartao-validade" placeholder="MM/AA" />
                  </div>
                  <div className={`${styles.formGroup} ${styles.small}`}>
                    <label htmlFor="cartao-cvv">CVV</label>
                    <input type="text" id="cartao-cvv" placeholder="123" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="cartao-parcelas">Parcelas</label>
                  <select id="cartao-parcelas">
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n}x de R$ {(179.90 / n).toFixed(2)} sem juros</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>
          </div>

          <div className={styles.orderSummary}>
            <div className={styles.summaryHeader}>
              <h3>Resumo do Pedido</h3>
            </div>
            <div className={styles.productList}>
              <div className={styles.productItem}>
                <div className={styles.productImage}>
                  <img src={tenistopo} alt="Produto" />
                </div>
                <div className={styles.productDetails}>
                  <h4>Tenis Nike Revolution 6 Next Nature</h4>
                  <p className={styles.productSize}>Tamanho: 42</p>
                  <p className={styles.productColor}>Cor: Preto</p>
                  <p className={styles.productQuantity}>Quantidade: 1</p>
                  <p className={styles.productPrice}>R$ 179,90</p>
                </div>
              </div>
            </div>
            <div className={styles.summaryDetails}>
              <div className={styles.summaryRow}><span>Subtotal</span><span>R$ 179,90</span></div>
              <div className={styles.summaryRow}><span>Frete</span><span>Grátis</span></div>
              <div className={`${styles.summaryRow} ${styles.total}`}><span>Total</span><span>R$ 179,90</span></div>
            </div>
            <button className={styles.checkoutButton} id="finalizar-compra">
              <a href="/CompraRealizadaindex.html">Finalizar Compra</a>
            </button>
            <div className={styles.secureCheckout}>
              <i className="fas fa-lock"></i> Pagamento 100% seguro
            </div>
          </div>
        </div>

        <div className={styles.orderDetailsMobile}>
          <h3>Detalhes da Compra</h3>
          <div className={styles.summaryDetails}>
            <div className={styles.summaryRow}><span>Subtotal</span><span>R$ 179,90</span></div>
            <div className={styles.summaryRow}><span>Frete</span><span>Grátis</span></div>
            <div className={`${styles.summaryRow} ${styles.total}`}><span>Total</span><span>R$ 179,90</span></div>
          </div>
          <button className={styles.checkoutButton} id="finalizar-compra-mobile">Finalizar Compra</button>
        </div>
      </main>

      <footer>
        <div className={`${styles.container} ${styles.footerContainer}`}>
          <div className={styles.footerColumn}>
            <img src={logoNikeBranca} alt="Logo" />
            <p>A melhor loja online para suas compras de produtos esportivos e casuais.</p>
            <div className={styles.socialIcons}>
              <a href="#"><i className="fab fa-facebook "></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h4>Navegacao</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Meus Pedidos</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Categorias</h4>
            <ul>
              <li><a href="#">Tenis</a></li>
              <li><a href="#">Roupas</a></li>
              <li><a href="#">Acessorios</a></li>
              <li><a href="#">Esportes</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Contato</h4>
            <ul className={styles.contactInfo}>
              <li><i className="fas fa-map-marker-alt"></i> Av. Paulista, 1000 - Sao Paulo</li>
              <li><i className="fas fa-phone"></i> (11) 3000-1234</li>
              <li><i className="fas fa-envelope"></i> contato@digitalstore.com</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.container}>
            <p>&copy; 2025 Digital Store. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
