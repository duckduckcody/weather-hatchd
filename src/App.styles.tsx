import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: grid;
  justify-items: center;
  font-family: 'Lato', sans-serif;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 0 40px;
  margin: 0 auto;
`;

export const Icon = styled.img`
  width: 100px;
`;

export const CurrentTemp = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
`;

export const Degrees = styled.span`
  font-size: 0.5em;
  line-height: 0.5em;
`;

export const DetailedInfoContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'feelsLike min max'
    'wind humidity cloudCover';
  grid-gap: 8px;
`;

const DetailedInfo = styled.span`
  text-align: center;
`;

export const FeelsLike = styled(DetailedInfo)`
  grid-area: feelsLike;
`;

export const Max = styled(DetailedInfo)`
  grid-area: max;
`;

export const Min = styled(DetailedInfo)`
  grid-area: min;
`;

export const Wind = styled(DetailedInfo)`
  grid-area: wind;
`;

export const Humidity = styled(DetailedInfo)`
  grid-area: humidity;
`;

export const CloudCover = styled(DetailedInfo)`
  grid-area: cloudCover;
`;

export const Label = styled.span`
  opacity: 0.75;
  font-size: 12px;
`;

export const Info = styled.span`
  display: block;
  font-size: 16px;
`;

export const WeatherDescription = styled(Label)`
  text-transform: capitalize;
`;

export const LocationName = styled(Info)`
  margin: 14px 0;
`;
