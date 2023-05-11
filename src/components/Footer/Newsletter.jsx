import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Новостная рассылка" />
      <h1 className="headtext__cormorant">Подпишитесь на наши новости</h1>
      <p className="p__opensans">И никогда не пропустите последние обновления!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Введите ваш e-mail" />
      <button type="button" className="custom__button">Подписаться</button>
    </div>
  </div>
);

export default Newsletter;
