import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './footer.module.scss';

const Footer = () => {
  const navigate = useNavigate();

  const navigateClick = () => {
    const footer = document.querySelector('#footer');
    footer?.classList.add(s.opacity0);
    navigate('/test');
  };

  return (
    <div id="footer" className={s.footer}>
      <div className={s.footer__all}>
        <div onClick={navigateClick} className={s.footer__button}>
          Go to the test
        </div>
      </div>
    </div>
  );
};

export default Footer;
