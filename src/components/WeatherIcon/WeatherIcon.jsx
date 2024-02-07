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

export default function WeatherIcon({ type, style }) {
  return (
    <>
      {
        {
          ClearIcon: <ClearIcon style={style} />,
          CloudAndRainnyIcon: <CloudAndRainnyIcon style={style} />,
          CloudyIcon: <CloudyIcon style={style} />,
          HeavyRainAndStormIcon: <HeavyRainAndStormIcon style={style} />,
          NightClearIcon: <NightClearIcon style={style} />,
          NightCloudyIcon: <NightCloudyIcon style={style} />,
          NightFullmoonIcon: <NightFullmoonIcon style={style} />,
          NightIcon: <NightIcon style={style} />,
          NightRainIcon: <NightRainIcon style={style} />,
          RainIcon: <RainIcon style={style} />,
          SunnyIcon: <SunnyIcon style={style} />,
          SunnyIcon2: <SunnyIcon2 style={style} />,
          ThunderIcon: <ThunderIcon style={style} />,
        }[type]
      }
    </>
  );
}
