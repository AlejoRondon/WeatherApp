import React from 'react';

import ClearIcon from './icons/ClearIcon';
import CloudAndRainnyIcon from './icons/CloudAndRainnyIcon';
import CloudyIcon from './icons/CloudyIcon';
import HeavyRainAndStormIcon from './icons/HeavyRainAndStormIcon';
import NightClearIcon from './icons/NightClearIcon';
import NightCloudyIcon from './icons/NightCloudyIcon';
import NightFullmoonIcon from './icons/NightFullmoonIcon';
import NightIcon from './icons/NightIcon';
import NightRainIcon from './icons/NightRainIcon';
import RainIcon from './icons/RainIcon';
import SunnyIcon from './icons/SunnyIcon';
import SunnyIcon2 from './icons/SunnyIcon2';
import ThunderIcon from './icons/ThunderIcon';
import './WeatherIcon.css';
export default function WeatherIcon({ type, style }) {
  type = type ? type : 'ClearIcon';
  return (
    <>
      {
        {
          ClearIcon: <ClearIcon className='WeatherIcon' style={style} />,
          CloudAndRainnyIcon: <CloudAndRainnyIcon className='WeatherIcon' style={style} />,
          CloudyIcon: <CloudyIcon className='WeatherIcon' style={style} />,
          HeavyRainAndStormIcon: <HeavyRainAndStormIcon className='WeatherIcon' style={style} />,
          NightClearIcon: <NightClearIcon className='WeatherIcon' style={style} />,
          NightCloudyIcon: <NightCloudyIcon className='WeatherIcon' style={style} />,
          NightFullmoonIcon: <NightFullmoonIcon className='WeatherIcon' style={style} />,
          NightIcon: <NightIcon className='WeatherIcon' style={style} />,
          NightRainIcon: <NightRainIcon className='WeatherIcon' style={style} />,
          RainIcon: <RainIcon className='WeatherIcon' style={style} />,
          SunnyIcon: <SunnyIcon className='WeatherIcon' style={style} />,
          SunnyIcon2: <SunnyIcon2 className='WeatherIcon' style={style} />,
          ThunderIcon: <ThunderIcon className='WeatherIcon' style={style} />,
        }[type]
      }
    </>
  );
}
