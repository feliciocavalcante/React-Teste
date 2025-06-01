import React from 'react';
import calçadoImg from '../assets/img/tenistopo.png';
import roupaImg from '../assets/img/roupa.png';
import bolsaImg from '../assets/img/bolca.png';
import camisaIcon from '../assets/img/camisa.png';
import calcaIcon from '../assets/img/calca (2).png';
import tenisIcon from '../assets/img/tenis10.png';
import jaquetaIcon from '../assets/img/jaqueta2.png';
import boneIcon from '../assets/img/bone.png';
import { Link } from 'react-router-dom';
function Categories() {
  return (
    <>
      {/* Categorias em destaque */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Categorias em destaque</h2>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-image">
                <Link to='/produto/:id'><img src={calçadoImg} alt="Calçados" /></Link>
              </div>
            <Link to='/produto/:id'><h3 className="category-title">Calçados</h3></Link>
            <Link to='/produto/:id'><p className="category-count">23 produtos</p></Link>
            </div>
            <div className="category-card">
              <div className="category-image">
                
                <Link to='/error404'><img src={roupaImg} alt="Roupas" /></Link>
              </div>
              
             <Link to='/Error404'><h3 className="category-title">Roupas</h3></Link>
              <Link to='/Error404'><p className="category-count">23 produtos</p></Link>
            </div>
            <div className="category-card">
              <div className="category-image">
                <Link to='/Error404'><img src={bolsaImg} alt="Acessórios" /></Link>
              </div>
              <Link to='/Error404'><h3 className="category-title">Acessórios</h3></Link>
              <Link to='/Error404'><p className="category-count">15 produtos</p></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ícones de categorias */}
      <Link to='/Error404'><section className="product-categories">
        <div className="container">
          <div className="categories-icons">
            <div className="category-icon">
              <div className="icon-circle">
                <img src={camisaIcon} alt="Camisetas" />
              </div>
              <p>Camisetas</p>
            </div>
            <div className="category-icon">
              <div className="icon-circle">
                <img src={calcaIcon} alt="Calças" />
              </div>
              <p>Calças</p>
            </div>
            <Link to='/produto/:id'><div className="category-icon">
              <div className="icon-circle">
                <img src={tenisIcon} alt="Calçados" />
              </div>
              <p>Calçados</p>
            </div></Link>
            <div className="category-icon">
              <div className="icon-circle">
                <img src={jaquetaIcon} alt="Jaquetas" />
              </div>
              <p>Jaquetas</p>
            </div>
            <div className="category-icon">
              <div className="icon-circle">
                <img src={boneIcon} alt="Acessórios" />
              </div>
              <p>Acessórios</p>
            </div>
          </div>
        </div>
      </section></Link>
    </>
  );
}

export default Categories;
