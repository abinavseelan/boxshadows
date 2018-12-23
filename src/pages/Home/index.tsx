import React from 'react';
import { Link } from '@reach/router';

import { IHomeProps, IHomeState } from './types';

import { Container } from 'Src/styles/common';

import {
  HeroSection,
  PageCTA,
} from './styles';

import HeroImage from 'Src/assets/hero-image.svg';
import RightArrow from 'Src/assets/right-arrow.svg';
import boxShadows from 'Src/assets/box-shadows.svg';
import gradient from 'Src/assets/gradient.svg';
import animations from 'Src/assets/animations.svg';

const pages = [
  {
    icon: boxShadows,
    link: 'box-shadows',
    subTitle: 'Lorem Ipsum',
    themeColor: 'boxShadow',
    title: 'Box Shadows',
  },
  {
    icon: gradient,
    link: 'gradients',
    subTitle: 'Lorem Ipsum',
    themeColor: 'gradients',
    title: 'Gradients',
  },
  {
    icon: animations,
    link: 'animations',
    subTitle: 'Lorem Ipsum',
    themeColor: 'animations',
    title: 'Animations',
  },
];

class HomePage extends React.Component<IHomeProps, IHomeState> {
  public render() {
    return (
      <Container>
        <HeroSection>
          <div>
            <h1>No more trial and error</h1>
            <h2>Easy presets and editors.</h2>
          </div>
          <img src={HeroImage} />
        </HeroSection>

        {
          pages.map((page, index) => (
            <PageCTA key={index} color={page.themeColor}>
              <div className='heading'>
                <img src={page.icon} />
                <h2>{page.title}</h2>
                <h3>{page.subTitle}</h3>
              </div>
              <div className='btn'>
                <Link to={page.link}>
                  <img src={RightArrow} />
                </Link>
              </div>
            </PageCTA>
          ))
        }
      </Container>
    );
  }
}

export default HomePage;
