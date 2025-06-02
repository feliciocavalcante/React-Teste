import React, { useState, useEffect } from 'react';
import styles from '../Produto/Produto.module.css';
import tenis2 from '../../assets/img/tenis2.png';
import logoNikeBranca from '../../assets/img/logoNikeBranca.png';
import logoNike from '../../assets/img/logoNike.png';
import tenistopo from '../../assets/img/tenistopo.png';
import { Link } from 'react-router-dom';

const Produto = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortValue, setSortValue] = useState('default');
  const [products, setProducts] = useState([
    { id: 1, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 199.90, image: '/src/assets/img/tenistopo.png', hasOffer: true },
    { id: 2, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 219.90, image: '/src/assets/img/tenistopo.png', hasOffer: false },
    { id: 3, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 199.90, image: '/src/assets/img/tenistopo.png', hasOffer: false },
    { id: 4, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 239.90, image: '/src/assets/img/tenistopo.png', hasOffer: false },
    { id: 5, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 249.90, image: '/src/assets/img/tenistopo.png', hasOffer: true },
    { id: 6, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 189.90, image: '/src/assets/img/tenistopo.png', hasOffer: false },
    { id: 7, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 199.90, image: '/src/assets/img/tenis4.png', hasOffer: false },
    { id: 8, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 219.90, image: '/src/assets/img/tenis4.png', hasOffer: false },
    { id: 9, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 199.90, image: '/src/assets/img/tenistopo.png', hasOffer: false },
    { id: 10, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 209.90, image: '/src/assets/img/tenis4.png', hasOffer: false },
    { id: 11, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 229.90, image: '/src/assets/img/tenis4.png', hasOffer: true },
    { id: 12, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 199.90, image: '/src/assets/img/tenis4.png', hasOffer: false },
    { id: 13, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 199.90, image: '/src/assets/img/tenis4.png', hasOffer: false },
    { id: 14, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 199.90, image: '/src/assets/img/tenistopo.png', hasOffer: false },
    { id: 15, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 199.90, image: '/src/assets/img/tenistopo.png', hasOffer: false },
    { id: 16, name: 'Tênis de Corrida - Mountain - Cinza e Azul', price: 199.90, image: '/src/assets/img/tenistopo.png', hasOffer: false },
  ]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const applyFilters = () => {
    setIsFilterOpen(false);
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortValue(value);
    
    const sortedProducts = [...products].sort((a, b) => {
      if (value === 'low-to-high') {
        return a.price - b.price;
      } else if (value === 'high-to-low') {
        return b.price - a.price;
      } else {
        return a.price - b.price; // default
      }
    });
    
    setProducts(sortedProducts);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Fechar menu mobile se clicar fora
      if (isMobileMenuOpen && !event.target.closest(`.${styles.mobileMenu}`) && !event.target.closest(`.${styles.mobileMenuToggle}`)) {
        setIsMobileMenuOpen(false);
      }
      
      // Fechar filtros em mobile se clicar fora
      if (window.innerWidth <= 768 && isFilterOpen && !event.target.closest(`.${styles.filters}`) && !event.target.closest(`.${styles.filterMobileToggle}`)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen, isFilterOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsFilterOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.topHeader}>
          <div className={styles.logo}>
            <img src={logoNike} alt="Nike Logo" />
          </div>
          
          <div className={styles.searchBar}>
            <input type="text" placeholder="Buscar produtos..." />
            <button className={styles.searchButton}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          
          <div className={styles.userActions}>
            <button className={styles.cartButton}>
              <i className="fas fa-shopping-cart"></i>
            </button>
            
          </div>
          
          <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
        
        <nav className={styles.mainNav}>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><a href="#" className={styles.active}>Produtos</a></li>
            <li><Link to='/Error404'>Categorias</Link></li>
            <li><Link to="/meus-pedidos" >Meus Pedidos</Link></li>
          </ul>
        </nav>
      </header>
      
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#" className={styles.active}>Produtos</a></li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Meus Pedidos</a></li>
          </ul>
        </nav>
        <div className={styles.mobileSearch}>
          <input type="text" placeholder="Buscar produtos..." />
          <button><i className="fas fa-search"></i></button>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.filterMobileToggle} onClick={toggleFilter}>
          <i className="fas fa-filter"></i> Filtros
        </div>
        
        <aside className={`${styles.filters} ${isFilterOpen ? styles.active : ''}`}>
          <h3>Filtrar por</h3>
          
          <div className={`${styles.filterGroup} ${styles.sorting}`}>
            <h4>Ordenar por</h4>
            <select id="price-sort" value={sortValue} onChange={handleSortChange}>
              <option value="default">Padrão</option>
              <option value="low-to-high">Menor preço</option>
              <option value="high-to-low">Maior preço</option>
            </select>
          </div>
          
          <div className={styles.filterGroup}>
            <h4>Marca</h4>
            <label>
              <input type="checkbox" /> Nike
            </label>
            <label>
              <input type="checkbox" /> Adidas
            </label>
            <label>
              <input type="checkbox" /> Puma
            </label>
            <label>
              <input type="checkbox" /> New Balance
            </label>
          </div>
          
          <div className={styles.filterGroup}>
            <h4>Preço</h4>
            <label>
              <input type="checkbox" /> Até R$ 100
            </label>
            <label>
              <input type="checkbox" /> R$ 100 - R$ 200
            </label>
            <label>
              <input type="checkbox" /> R$ 200 - R$ 300
            </label>
            <label>
              <input type="checkbox" /> Acima de R$ 300
            </label>
          </div>
          
          <div className={styles.filterGroup}>
            <h4>Cor</h4>
            <label>
              <input type="checkbox" /> Preto
            </label>
            <label>
              <input type="checkbox" /> Branco
            </label>
            <label>
              <input type="checkbox" /> Azul
            </label>
            <label>
              <input type="checkbox" /> Vermelho
            </label>
          </div>
          
          <div className={styles.filterGroup}>
            <h4>Tamanho</h4>
            <label>
              <input type="checkbox" /> 38
            </label>
            <label>
              <input type="checkbox" /> 39
            </label>
            <label>
              <input type="checkbox" /> 40
            </label>
            <label>
              <input type="checkbox" /> 41
            </label>
            <label>
              <input type="checkbox" /> 42
            </label>
          </div>
          
          <button className={styles.applyFiltersBtn} onClick={applyFilters}>
            Aplicar Filtros
          </button>
        </aside>

        <section className={styles.products}>
          <div className={styles.productGrid}>
            {products.map((product) => (
            <Link to='/selecionado'><div key={product.id} className={styles.productCard} data-price={product.price}>
                <Link to='/selecionado'><div className={styles.productPosition}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={styles.productImage} 
                  />
                  {product.hasOffer && (
                    <div className={styles.promoBadge}>Oferta</div>
                  )}
                </div></Link>
                <div className={styles.productInfo}>
                  <div className={styles.productName}>{product.name}</div>
                  <div className={styles.productPrice}>R$ {product.price.toFixed(2)}</div>
                </div>
              </div></Link>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <img src={logoNikeBranca} alt="Nike Logo" />
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Nossas Lojas</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Categorias</h3>
            <ul>
              <li><a href="#">Tênis</a></li>
              <li><a href="#">Camisetas</a></li>
              <li><a href="#">Calças</a></li>
              <li><a href="#">Acessórios</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Ajuda</h3>
            <ul>
              <li><a href="#">Como Comprar</a></li>
              <li><a href="#">Entregas</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
              <li><a href="#">Fale Conosco</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2025 Digital Store - Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
};

export default Produto;