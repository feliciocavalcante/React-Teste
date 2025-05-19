import React from 'react';
import airJordanImg from '../assets/img/tenistopo.png';

function Collection() {
  return (
    <section className="featured-collection">
      <div className="container">
        <div className="collection-card">
          <div className="collection-content">
            <h2 className="collection-title">Air Jordan edição de colecionador</h2>
            <p className="collection-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <button className="primary-button">Ver oferta</button>
          </div>
          <div className="collection-image">
            <img src={airJordanImg} alt="Air Jordan Collector's Edition" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
