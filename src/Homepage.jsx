import React, { useState } from 'react';
import './Homepage.css';
import admin from './images/admin.png';
import lerner from './images/lerner.png';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const cards = [
    { id: 1, role: 'Admin' },
    { id: 2, role: 'Learner' },
  ];

  return (
    <div className="body">
      <div className="header">
        <p className="main1">Welcome to AMBC eLearn!</p>
        <img src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/k7zzanuzvg0n0cjspuqq" className="img" alt="" />
        <h2 className="main2">Let's get started!</h2>
        <p className="main3">Sign in as</p>
      </div>

      <div className="container cardbox">
        <div className="row carddetails">
          {cards.map((card) => (
            <div key={card.id} className={`col-3 card1 ${selectedCard === card.id ? 'active' : ''}`} onClick={() => handleCardClick(card.id)}>
              <div className="card">
                {card.id === 1 ? <img src={admin} className="card-img-top" alt="profile" /> : <img src={lerner} className="card-img-top" alt="profile" />}
                <h5 className="card-title">{card.role}</h5>
                {selectedCard === card.id && (
                  <div className="checkmark">
                    <span role="img" aria-label="checkmark" className="tick" style={{ fontFamily: 'CustomCheckmark', color: 'white' }}>
                    ✔
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="button">
        {selectedCard === 1 ? (
          <button className="butt">
            <Link to="/about" className="butts">
              Submit
            </Link>
          </button>
        ) : selectedCard === 2 ? (
          <button className="butt">
            <Link to="/then" className="butts">
              Submit
            </Link>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Homepage;
