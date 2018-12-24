import React from 'react';
import { Link } from '@reach/router';

import { IHomeProps, IHomeState } from './types';

import { Container } from 'Src/styles/common';

import Svg from 'Src/components/Svg';

import {
  HeroSection,
  PageCTA,
} from './styles';

import { COLORS, FONT} from 'Src/styles/theme';

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
            <h2>easy presets and editors.</h2>
          </div>
          <Svg src={HeroImage} height='300px' />
        </HeroSection>

        {
          pages.map((page, index) => (
            <Link to={page.link}>
              <PageCTA key={index} color={page.themeColor}>
                <div className='heading'>
                  <Svg
                    src={page.icon}
                    height={FONT.heading2}
                    width={FONT.heading2}
                    inline
                    color={COLORS.white}
                  />
                  <h2>{page.title}</h2>
                  <h3>{page.subTitle}</h3>
                </div>
                <div className='btn'>
                    <Svg
                      src={RightArrow}
                      height={FONT.heading2}
                      width={FONT.heading2}
                      color={COLORS.white}
                    />
                </div>
              </PageCTA>
            </Link>
          ))
        }
      </Container>
    );
  }
}

export default HomePage;
