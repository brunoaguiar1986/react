import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <h1>Bem-vindo à Academia Esportiva</h1>
        <p>Transforme seu potencial em performance com nossos programas esportivos especializados</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <h3>Treinamento Profissional</h3>
            <p>Equipe qualificada com metodologias atualizadas</p>
          </div>
          
          <div className="feature-card">
            <h3>Infraestrutura Completa</h3>
            <p>Ambientes modernos e equipamentos de última geração</p>
          </div>
          
          <div className="feature-card">
            <h3>Resultados Comprovados</h3>
            <p>Programas personalizados para todas as idades</p>
          </div>
        </div>

        <a href="#aulas" className="cta-button">
          Ver Aulas Disponíveis
        </a>
      </section>
    </div>
  );
};

export default Home;