import React from 'react';
import './styles/Features.css';

function Features() {
  return (
    <section className="features">
      <h2>Nuestras Soluciones</h2>

      <div className="cards">
        <div className="card">
          <h3>Conectividad</h3>
          <p>Integra todos tus sistemas en un solo lugar.</p>
        </div>

        <div className="card">
          <h3>Automatización</h3>
          <p>Optimiza procesos y ahorra tiempo.</p>
        </div>

        <div className="card">
          <h3>Analytics</h3>
          <p>Datos en tiempo real para decisiones inteligentes.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;