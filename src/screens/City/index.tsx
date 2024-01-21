import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {RootStackScreenProps} from '../../types';
import useFavoritesCities from '../../hooks/useFavoritesCities';
import {CityDataType} from '../Home/data/citiesData';
import {format} from 'date-fns';
import it from 'date-fns/locale/it';
import {
  AddToFavoritesButton,
  ButtonText,
  CityContainer,
  CityContainerSevenDays,
  CityInfoContainer,
  CityInfoText,
  TextDate,
  WeatherDetailsContainer,
  WeatherDetailsText,
  Wrapper,
} from '../styles';

type WeatherDataStateType = {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: string;
    condition: {
      text: string;
      icon: string;
    };
    pressure_mb: string;
    humidity: string;
    wind_kph: string;
    wind_dir: string;
    last_updated: string;
  };
} | null;

const apiKey = '14a83ea940ef4d45b5b103446240401';

const CityScreen: React.FC<RootStackScreenProps<'city'>> = ({route}) => {
  const {
    params: {name},
  } = route;
  const [weatherData, setWeatherData] = useState<WeatherDataStateType>(null);
  const [sevenDayForecast, setSevenDayForecast] = useState<any[] | null>(null);

  const {addFavorite, removeFavorite, favorites} = useFavoritesCities();

  const isFavorite = favorites.some(
    favorite => favorite.name === weatherData?.location.name,
  );

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}`,
        );
        const forecastResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${name}&days=7&aqi=no&alerts=yes`,
        );
        setWeatherData(response.data);
        setSevenDayForecast(forecastResponse.data.forecast?.forecastday);
      } catch (error: any) {
        console.error('Errore nella richiesta API:', error.message);
      }
    };
    getWeatherData();
  }, [name]);

  return (
    <Wrapper>
      <Text>App Meteo for city {name}</Text>
      {weatherData ? (
        <View>
          <CityInfoContainer>
            <View>
              <CityInfoText>
                {weatherData.location.name}, {weatherData.location.country}
              </CityInfoText>
              <WeatherDetailsText>
                Temperatura:{' '}
                <CityInfoText>{weatherData.current.temp_c}°C</CityInfoText>
              </WeatherDetailsText>
              <WeatherDetailsText>
                Condizioni:{' '}
                <CityInfoText>
                  {weatherData.current.condition.text}
                </CityInfoText>{' '}
              </WeatherDetailsText>
            </View>
            <View>
              <Image
                source={{uri: `https:${weatherData.current.condition.icon}`}}
                style={{width: 64, height: 64}}
              />
            </View>
          </CityInfoContainer>

          <WeatherDetailsContainer>
            <WeatherDetailsText>
              Pressione:{' '}
              <CityInfoText>{weatherData.current.pressure_mb} mb</CityInfoText>
            </WeatherDetailsText>
            <WeatherDetailsText>
              Umidità:{' '}
              <CityInfoText>{weatherData.current.humidity}%</CityInfoText>
            </WeatherDetailsText>
            <WeatherDetailsText>
              Velocità del vento:{' '}
              <CityInfoText>{weatherData.current.wind_kph} km/h</CityInfoText>
            </WeatherDetailsText>
            <WeatherDetailsText>
              Direzione del vento:{' '}
              <CityInfoText>{weatherData.current.wind_dir}</CityInfoText>
            </WeatherDetailsText>
            <WeatherDetailsText>
              Ora dell'ultima osservazione:{' '}
              {weatherData.current.last_updated || 'Dato non disponibile'}
            </WeatherDetailsText>
          </WeatherDetailsContainer>
          <AddToFavoritesButton
            onPress={() => {
              if (isFavorite) {
                removeFavorite(weatherData.location.name);
              } else {
                const newFavorite: CityDataType = {
                  id: weatherData.location.name,
                  name: weatherData.location.name,
                  country: weatherData.location.country,
                };
                addFavorite(newFavorite);
              }
            }}
            style={{backgroundColor: isFavorite ? '#b22121' : '#21b237'}}>
            <ButtonText>
              {isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
            </ButtonText>
          </AddToFavoritesButton>
        </View>
      ) : (
        <ActivityIndicator />
      )}
      {sevenDayForecast && (
        <CityContainerSevenDays>
          <Text>Previsione per i prossimi giorni:</Text>
          {sevenDayForecast.map((day: any) => {
            const dayDate = new Date(day.date);
            const worldDate = format(dayDate, 'EEEE', {locale: it});
            return (
              <CityContainer key={day.date}>
                <TextDate>{worldDate}</TextDate>
                <Image
                  source={{uri: `https:${day.day.condition.icon}`}}
                  style={{width: 64, height: 64}}
                />
                <Text>Giorno: {day.day.maxtemp_c}°C</Text>
                <Text>Notte: {day.day.mintemp_c}°C</Text>
              </CityContainer>
            );
          })}
        </CityContainerSevenDays>
      )}
    </Wrapper>
  );
};

export default CityScreen;
