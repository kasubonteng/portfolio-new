import React from 'react';
import { motion } from 'framer-motion';

import './Header.scss';
import Data from './Data';

import { ScrollDown } from '../../components';
import { AppWrap } from '../../wrapper';

const Header = () => {
  return (
    <header className="header">
      <motion.div
        className="header__container container"
        id="home"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="header__content">
          <div className="header__img"></div>

          <Data />
        </div>
        <ScrollDown />
      </motion.div>
    </header>
  );
};

export default AppWrap(Header, 'home');
