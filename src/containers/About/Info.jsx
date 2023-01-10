import React from 'react';
import 'boxicons';

const d = new Date();
const infoSkills = [
  {
    title: 'Web Development',
    subtitle: 'Modern Web and UI/UX Development',
    icon: (
      <box-icon name="react" type="logo" animation="spin" size="md"></box-icon>
    ),
  },
  {
    title: 'Experience',
    subtitle: `${d.getFullYear() - 2021}+ Years Experience`,
    icon: <box-icon name="award" animation="tada" size="md"></box-icon>,
  },
  {
    title: 'Support',
    subtitle: '24/7 Online Support',
    icon: <box-icon name="support" animation="flashing" size="md"></box-icon>,
  },
];

const Info = () => {
  return (
    <div className="about__info grid">
      {infoSkills.map((item) => (
        <div className="about__box" key={`${item.title} tile`}>
          <i className="about__icon">{item.icon}</i>
          <h3 className="about__title">{item.title}</h3>
          <span className="about__subtitle">{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
