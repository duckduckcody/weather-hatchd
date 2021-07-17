import React, { useCallback, useEffect, useState } from 'react';
import {
  CloudCover,
  Container,
  CurrentTemp,
  Degrees,
  DetailedInfoContainer,
  FeelsLike,
  Humidity,
  Icon,
  Info,
  Label,
  LocationName,
  Max,
  Min,
  WeatherDescription,
  Wind,
} from './App.styles';
import { OpenWeatherMapResponse } from './OpenWeatherMapResponse';

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=6dc9c2a99870e8a1a5ff5c72ecc15d4e`;

function App() {
  const [weatherData, setWeatherData] = useState<OpenWeatherMapResponse>();

  const getWeatherData = useCallback(
    async (longitude: number, latitude: number) => {
      const res = await fetch(
        `${WEATHER_URL}&lat=${latitude}&lon=${longitude}`
      );
      return await res.json();
    },
    []
  );

  useEffect(() => {
    let intervalId: number | undefined = undefined;

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        getWeatherData(coords.longitude, coords.latitude).then((res) => {
          setWeatherData(res);
          intervalId = window.setInterval(
            () =>
              getWeatherData(coords.longitude, coords.latitude).then((res) =>
                setWeatherData(res)
              ),
            600000
          );
        });
      },
      (e) => console.log('error getting location', e)
    );

    return () => window.clearInterval(intervalId);
  }, [getWeatherData]);

  return (
    <Container>
      {!weatherData && <span>Loading weather data...</span>}
      {weatherData && (
        <>
          <Icon
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt=''
          />

          <CurrentTemp>
            {Math.round(weatherData.main.temp)}
            <Degrees>°C</Degrees>
          </CurrentTemp>
          <WeatherDescription>
            {weatherData.weather[0].description}
          </WeatherDescription>

          <LocationName>{weatherData.name}</LocationName>

          <DetailedInfoContainer>
            <FeelsLike>
              <Label>Feels like</Label>
              <Info>{Math.round(weatherData.main.feels_like)}°C</Info>
            </FeelsLike>
            <Min>
              <Label>Min</Label>
              <Info>{Math.round(weatherData.main.temp_min)}°C</Info>
            </Min>
            <Max>
              <Label>Max</Label>
              <Info>{Math.round(weatherData.main.temp_max)}°C</Info>
            </Max>
            <Wind>
              <Label>Wind speed</Label>
              <Info>{weatherData.wind.speed} m/s</Info>
            </Wind>
            <Humidity>
              <Label>Humidity</Label>
              <Info>{weatherData.main.humidity}%</Info>
            </Humidity>
            <CloudCover>
              <Label>Cloud cover</Label>
              <Info>{weatherData.clouds.all}%</Info>
            </CloudCover>
          </DetailedInfoContainer>
        </>
      )}
    </Container>
  );
}

export default App;
