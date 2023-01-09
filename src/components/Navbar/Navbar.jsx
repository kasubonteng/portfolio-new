import React, { useState } from 'react';
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
} from '@iconscout/react-unicons';

import './Navbar.scss';

const navListItems = [
  {
    name: 'Home',
    icon: <UilEstate className="nav__icon" />,
  },
  {
    name: 'About',
    icon: <UilUser className="nav__icon" />,
  },
  {
    name: 'Skills',
    icon: <UilFileAlt className="nav__icon" />,
  },
  {
    name: 'Services',
    icon: <UilBriefcaseAlt className="nav__icon" />,
  },
  {
    name: 'Portfolio',
    icon: <UilScenery className="nav__icon" />,
  },
  {
    name: 'Contact',
    icon: <UilMessage className="nav__icon" />,
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar container">
      <div className="navbar__logo">
        <a href="/">Asubonteng</a>
      </div>

      <div className={showMenu ? 'navbar__menu show-menu' : 'navbar__menu'}>
        <ul className="navbar__links">
          {navListItems.map((item) => (
            <li className="app__flex" key={item.name}>
              <a href={`#${item.name}`} className="navbar__link">
                <i>{item.icon}</i>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__close">
          <UilTimes
            size="30"
            className="nav__icon"
            onClick={() => setShowMenu(false)}
          />
        </div>
      </div>

      <div className="navbar__toggle" onClick={() => setShowMenu(true)}>
        <UilApps />
      </div>
    </nav>
  );
};

export default Navbar;
