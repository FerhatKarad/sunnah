import React from 'react';
import './SunnahSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function SunnahSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonLink,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__sunnah-section' : 'home__sunnah-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__sunnah-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__sunnah-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h2 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h2>
                <p
                  className={
                    lightTextDesc
                      ? 'home__sunnah-subtitle'
                      : 'home__sunnah-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to={buttonLink}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__sunnah-img-wrapper'>
                <img src={img} alt={alt} className='home__sunnah-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SunnahSection;