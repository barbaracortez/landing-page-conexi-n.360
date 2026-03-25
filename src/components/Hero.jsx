import React from 'react';
import './styles/Hero.css'

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg">
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvKCly6L5ELFQ4VaB0rpy0Gf1exkVZSQ2qq9HbASISMCuNZRUTkXvJaAuLON7cSTAgFYenl_aZpsM_G7dcNDFU1GzoPruwgXrzg29j66Hgf2_1XLHMevLVgt_9hFmcvgAXqvc0maa6eSkt7ylgbR6NCGksU5FfopXC1gxlA6XLCf3lUjFI5NK2Qhc_go2aL_593Mq16E8LUoDeu_hya6cmCJJjDT8gBM9OtShpbvzuyvq26HK029a0b2RsG4Gipz5jHxMteFn6G3gv" 
                    alt="abstract digital visualization of global connectivity" 
                />
            </div>
            <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>Global completion • Vibration 9</span>
          </div>
          <h1>
            Conexión 360:<br/>
            <span>Impacto Integral,</span><br/>
            Visión Universal
          </h1>
          <p>
            Navegamos la complejidad global para crear soluciones que resuenan en cada nodo de la humanidad. Una visión circular que conecta tecnología, alma y propósito.
          </p>
          <div className="hero-buttons">
            <button>Descubrir Impacto</button>
            <button>Nuestra Red</button>
          </div>
        </div>
        <div className="hero-orbital">
          {/* Aquí tu Orbital Visualization */}
        </div>
      </div>
    </section>
  );
};

export default Hero;