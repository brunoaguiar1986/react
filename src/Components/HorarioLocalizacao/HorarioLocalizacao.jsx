import React from 'react';
import './HorarioLocalizacao.css';
import { RiTimeLine, RiCalendarLine, RiMapPinLine } from 'react-icons/ri';

const HorarioLocalizacao = () => {
  return (
    <div className="horario-localizacao">
      <div className="container">
        {/* Seção de Horários */}
        <div className="section-card">
          <h2 className="section-title">Horários de Funcionamento</h2>
          <ul className="info-list">
            <li className="info-item">
              <RiTimeLine className="info-icon" />
              <div>
                <strong>Segunda a Sexta:</strong>
                <p>06:00 - 22:00</p>
              </div>
            </li>
            <li className="info-item">
              <RiTimeLine className="info-icon" />
              <div>
                <strong>Sábados:</strong>
                <p>08:00 - 20:00</p>
              </div>
            </li>
            <li className="info-item">
              <RiCalendarLine className="info-icon" />
              <div>
                <strong>Domingos e Feriados:</strong>
                <p>09:00 - 18:00</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Seção de Localização */}
        <div className="section-card">
          <h2 className="section-title">Nossa Localização</h2>
          <div className="info-item">
            <RiMapPinLine className="info-icon" />
            <div>
              <p>Rua Esportiva, 123</p>
              <p>Bairro Olímpico - São Paulo/SP</p>
              <p>CEP: 01234-567</p>
            </div>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.075426745292!2d-46.65342658502213!3d-23.565734367638434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1623700462891!5m2!1spt-BR!2sbr"
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorarioLocalizacao;