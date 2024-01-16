import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';
import {RootStackScreenProps} from '../../types';
import styled from 'styled-components/native';

type WeatherDataStateType = {
  location: {name: string};
  current: {temp_c: string; condition: {text: string}};
} | null;

const apiKey = '14a83ea940ef4d45b5b103446240401';

const Wrapper = styled.ScrollView`
  padding: 16px;
`;

const CityScreen: React.FC<RootStackScreenProps<'city'>> = ({route}) => {
  const {
    params: {name},
  } = route;
  const [weatherData, setWeatherData] = useState<WeatherDataStateType>(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}`,
        );
        setWeatherData(response.data);
      } catch (error: any) {
        console.error('Errore nella richiesta API:', error.message);
      }
    };
    getWeatherData();
  }, []);

  return (
    <Wrapper>
      <Text>App Meteo for city {name}</Text>
      {weatherData && (
        <View>
          <Text>{weatherData.location.name}</Text>
          <Text>Temperatura: {weatherData.current.temp_c}°C</Text>
          <Text>Condizioni: {weatherData.current.condition.text}</Text>
        </View>
      )}
    </Wrapper>
  );
};

export default CityScreen;