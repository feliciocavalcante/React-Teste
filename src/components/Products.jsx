import React from 'react';
import produto1 from '../assets/img/tenistopo.png';
import produto2 from '../assets/img/tenis4.png';
import { Link } from 'react-router-dom';

const produtos = [
  { nome: 'Nike Air Max', img: produto1 },
  { nome: 'Nike Air Force', img: produto1 },
  { nome: 'Nike Air Jordan', img: produto1 },
  { nome: 'Nike SB Dunk', img: produto1 },
  { nome: 'Nike Air Max', img: produto2 },
  { nome: 'Nike Air Force', img: produto2 },
  { nome: 'Nike Air Jordan', img: produto2 },
  { nome: 'Nike SB Dunk', img: produto2 }
];

function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Produtos em alta</h2>
        </div>
        <div className="products-grid">
          {produtos.map((produto, index) => (
            <div className="product-card" key={index}>
              <a href="#">
                <div className="product-image">
                 <Link to='/selecionado'> <img src={produto.img} alt={produto.nome} /></Link>
                  
                </div>
                <Link to='/selecionado'><div className="product-info">
                 <Link to='/selecionado'><h3 className="product-name">{produto.nome}</h3></Link> 
                  <div className="product-price">
                    <span className="price-discount">R$ 299</span>
                    <span className="price-original">R$ 399</span>
                  </div>
                </div></Link>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
