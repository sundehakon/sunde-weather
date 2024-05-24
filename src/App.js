import React, { useState } from 'react';
import WeatherSearch from './Components/WeatherSearch';
import InteractiveMap from './Components/InteractiveMap';
import UserHeader from './Components/UserHeader';
import Footer from './Components/Footer';
import { ButtonGroup, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ThemeMode from './Components/ThemeMode';
import { ThemeProvider } from './Components/ThemeContext';

const App = () => {
  const [display, setDisplay] = useState('weatherSearch');    
  const { t } = useTranslation();
  const displayWeatherSearch = () => {
    setDisplay('weatherSearch');
  };
  const displayInteractiveMap = () => {
    setDisplay('interactiveMap');
  }

  return (
    <ThemeProvider>
      <UserHeader />
      <ThemeMode />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '24px',
        }}
      >
        <ButtonGroup
          variant='outlined'
          style={{
            display: 'flex',
          }}
        >
          <Button style={{ minWidth: '165px' }} onClick={displayWeatherSearch}>{t('title')}</Button>
          <Button style={{ minWidth: '125px' }} onClick={displayInteractiveMap}>{t('titleMap')}</Button>
        </ButtonGroup>
      </div>
      {display === 'weatherSearch' && <WeatherSearch />}
      {display === 'interactiveMap' && <InteractiveMap />}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
