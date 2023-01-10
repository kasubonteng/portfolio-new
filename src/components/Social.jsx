import React from 'react';
import {
  UilTwitter,
  UilGithubAlt,
  UilLinkedin,
} from '@iconscout/react-unicons';

const socials = [
  {
    icon: <UilTwitter />,
    link: 'https"//www.twitter.com',
    name: 'twitter',
  },
  {
    icon: <UilGithubAlt />,
    link: 'https"//www.github.com',
    name: 'github',
  },
  {
    icon: <UilLinkedin />,
    link: 'https"//www.linkedin.com',
    name: 'linkedin',
  },
];

const Social = () => {
  return (
    <div className="app__social">
      {socials.map((social) => (
        <a
          href={social.link}
          className="header__social-icon"
          target={'_blank'}
          key={`${social.name}-icon`}
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
