import React, { useState } from 'react';
import styles from './Selecionado.module.css';
import logoNikeBranca from '../../assets/img/logoNikeBranca.png';
import tenisTopo from '../../assets/img/tenistopo.png';
import tenis1 from '../../assets/img/tenis4.png';
import tenis2 from '../../assets/img/tenis2.png';
import tenis3 from '../../assets/img/tenis3.png';
import anterior from '../../assets/img/anterior.png';
import nike from '../../assets/img/logoNike.png';

const Selecionado = () => {
    const [selectedSize, setSelectedSize] = useState('40');
    const [mainImage, setMainImage] = useState(tenisTopo);
    const sizes = ['38', '39', '40', '41', '42'];
    const thumbnails = [tenisTopo, tenis1, tenisTopo, tenis1];

    return (
        <div>
            <header className={styles.mainHeader}>
                <div className={`${styles.container} ${styles.topHeader}`}>
                    <img className={styles.logo} src={nike} alt="Voltar" />
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="Buscar produtos..." />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <div className={styles.userActions}>
                        <button><i className="fas fa-shopping-cart"></i></button>
                        <a href="#">Entrar</a>
                    </div>
                </div>
                <nav className={styles.mainNav}>
                    <ul className={styles.container}>
                        <li><a href="/Homeindex.html">Home</a></li>
                        <li><a href="/PageProdutosindex.html">Produtos</a></li>
                        <li><a href="#">Categorias</a></li>
                        <li><a href="#">Meus Pedidos</a></li>
                    </ul>
                </nav>
            </header>

            <main className={styles.container}>
                <div className={styles.productDetails}>
                    <div className={styles.productImages}>
                        <div className={styles.mainImage}>
                            <img src={mainImage} alt="Tênis Nike Revolution 6" />
                        </div>
                        <div className={styles.thumbnails}>
                            {thumbnails.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`Miniatura ${i + 1}`}
                                    className={mainImage === img ? styles.active : ''}
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.productInfo}>
                        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                        <div className={styles.rating}>
                            {[1, 2, 3, 4].map(i => <i key={i} className="fas fa-star" />)}
                            <i className="far fa-star"></i>
                            <span>(149 avaliações)</span>
                        </div>
                        <p className={styles.description}>
                            Descrição do produto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className={styles.sizes}>
                            {sizes.map(size => (
                                <span
                                    key={size}
                                    className={selectedSize === size ? styles.active : ''}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </span>
                            ))}
                        </div>

                        <p className={styles.price}>R$ 219,90</p>
                        <a href="/FinalizarCompraindex.html">
                            <button className={styles.buyButton}>Comprar</button>
                        </a>
                    </div>
                </div>

                <div className={styles.relatedProducts}>
                    <h2>Produtos Relacionados</h2>
                    <div className={styles.productGrid}>
                        {[tenis1, tenis1, tenis2, tenis2].map((img, i) => (
                            <div className={styles.productCard} key={i}>
                                <img src={img} alt="Tênis K-Swiss VB Masculino" />
                                <h3>Tênis K-Swiss VB Masculino</h3>
                                <p className={styles.discount}>R$ 200</p>
                                <p>R$ 100</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <footer className={styles.mainFooter}>
                <div className={`${styles.container} ${styles.footerContent}`}>
                    <div className={styles.footerColumn}>
                        <img src={logoNikeBranca} alt="Logo" />
                        <ul>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Nossas Lojas</a></li>
                            <li><a href="#">Trabalhe Conosco</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <h3>Informação</h3>
                        <ul>
                            <li><a href="#">Sobre Drop</a></li>
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
                            <li><a href="#">Casacos</a></li>
                            <li><a href="#">Headphones</a></li>
                            <li><a href="#">Tênis</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <h3>Contato</h3>
                        <p>Av. Santos Dumont, 1510 - 1</p>
                        <p>Aldeota, Fortaleza - CE, 60150-161</p>
                        <p>RN: 3051-3411</p>
                    </div>
                    <div className={styles.footerColumn}>
                        <div className={styles.socialIcons}>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    © 2023 Digital College
                </div>
            </footer>
        </div>
    );
};

export default Selecionado;
