import React, { useEffect, useState, useRef } from 'react';
import tenistopo from '../assets/img/tenistopo.png';
import tenis2 from '../assets/img/tenis2.png';
import tenis3 from '../assets/img/tenis3.png';
import tenis4 from '../assets/img/tenis4.png';

const slides = [
  {
    title: 'Queima de estoque Nike 🔥',
    description: 'Descontos imperdíveis em produtos selecionados. Aproveite enquanto durar o estoque!',
    image: tenistopo,
    buttonText: 'Ver ofertas'
  },
  {
    title: 'Coleção Air Jordan 2025',
    description: 'Descubra os novos modelos da linha Air Jordan com tecnologia de ponta e design exclusivo.',
    image: tenis2,
    buttonText: 'Explorar coleção'
  },
  {
    title: 'Acessórios esportivos',
    description: 'Complemente seu estilo com nossa linha de acessórios premium para esportes e casual.',
    image: tenis3,
    buttonText: 'Ver acessórios'
  },
  {
    title: 'Edição limitada',
    description: 'Tênis exclusivos em edição limitada. Design único para quem busca exclusividade.',
    image: tenis4,
    buttonText: 'Ver coleção'
  }
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <section className="carousel-section">
      <div
        className="carousel-container"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div className="carousel-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button className="primary-button">{slide.buttonText}</button>
              </div>
              <div className="slide-image">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button className="carousel-arrow prev" onClick={prevSlide}>
            ◀
          </button>
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button className="carousel-arrow next" onClick={nextSlide}>
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
