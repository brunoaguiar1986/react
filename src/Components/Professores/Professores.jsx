import React from 'react';
import './Professores.css';

const Professores = () => {
  const professors = [
    { name: 'João Silva', sport: 'Futebol', photo: '/imagens/photo1.jpg' },  // Imagens devem estar na pasta public
    { name: 'Maria Souza', sport: 'Basquete', photo: '/imagens/photo2.jpg' },
    { name: 'Carlos Oliveira', sport: 'Tênis', photo: '/imagens/photo3.jpg' },
  ];

  return (
    <div className="professores">
      <h2>Professores</h2>
      <div className="professors-list">
        {professors.map((prof, index) => (
          <div key={index} className="professor-card">
            <img src={prof.photo} alt={prof.name} className="professor-photo" />
            <h3>{prof.name}</h3>
            <p>Aula de {prof.sport}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professores;
