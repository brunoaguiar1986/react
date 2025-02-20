import React, { useState } from 'react';
import './Aulas.css';

const Aulas = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  const sports = [
    { name: 'Futebol', description: 'O esporte mais popular do Brasil promove trabalho em equipe, agilidade e resistência, além de ser uma ótima forma de se divertir' },
    { name: 'Basquete', description: 'Aulas de basquete para iniciantes e avançados.' },
    { name: 'Vôlei', description: 'Aulas de vôlei para todas as idades.' },
    { name: 'Tênis', description: 'Aprenda a jogar tênis com os melhores professores.' },
    { name: 'Natação', description: 'Aulas de natação para crianças e adultos.' },
  ];

  // Horários dos esportes (exemplo)
  const sportsSchedules = {
    'Futebol': [
      'Sub10 - 10h-12h - terça e sexta',
      'Sub12 - 12h-14h - quarta e sábado',
      'Sub14 - 14h-16h - segunda e quinta',
      'Sub16 - 16h-18h - sexta e domingo',
      'Adulto - 18h-20h - todos os dias',
    ],
    'Basquete': [
      'Sub10 - 9h-11h - segunda e quarta',
      'Sub12 - 11h-13h - terça e quinta',
      'Sub14 - 13h-15h - sexta e sábado',
      'Sub16 - 15h-17h - quarta e domingo',
      'Adulto - 17h-19h - todos os dias',
    ],
    'Vôlei': [
      'Sub10 - 9h-11h - terça e quinta',
      'Sub12 - 11h-13h - quarta e sexta',
      'Sub14 - 13h-15h - segunda e quarta',
      'Sub16 - 15h-17h - quinta e sábado',
      'Adulto - 17h-19h - todos os dias',
    ],
    'Tênis': [
      'Sub10 - 8h-10h - segunda e sexta',
      'Sub12 - 10h-12h - terça e quinta',
      'Sub14 - 12h-14h - quarta e sábado',
      'Sub16 - 14h-16h - terça e domingo',
      'Adulto - 16h-18h - todos os dias',
    ],
    'Natação': [
      'Sub10 - 8h-10h - terça e quinta',
      'Sub12 - 10h-12h - segunda e sexta',
      'Sub14 - 12h-14h - quarta e sábado',
      'Sub16 - 14h-16h - terça e domingo',
      'Adulto - 16h-18h - todos os dias',
    ],
  };

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };

  return (
    <div className="aulas">
      <h2>Esportes Disponíveis</h2>
      <div className="sports-list">
        {sports.map((sport, index) => (
          <div key={index} className="sport-item" onClick={() => handleSportClick(sport.name)}>
            <h3>{sport.name}</h3>
            <p>{sport.description}</p>
          </div>
        ))}
      </div>

      {selectedSport && (
        <div className="selected-sport">
          <h3>{selectedSport}</h3>
          <ul className="schedule-list">
            {sportsSchedules[selectedSport].map((schedule, index) => (
              <li key={index}>{schedule}</li>
            ))}
          </ul>
          <p>Se ficou interessado(a) mande mensagem no nosso número:</p>
          <p>(11)99999-9999</p>
        </div>
      )}
    </div>
  );
};

export default Aulas;
