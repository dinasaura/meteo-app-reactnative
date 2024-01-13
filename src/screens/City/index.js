import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, Button, TextInput } from 'react-native';


function City() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

 const apiKey = '14a83ea940ef4d45b5b103446240401';


  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Errore nella richiesta API:', error.message);
    }
  };

  return (
    <View>
      <Text>App Meteo</Text>
        <TextInput
          value={city}
          onChangeText={(t) => setCity(t)}
        />
      <Button title='Dati Meteo' onPress={getWeatherData}/>
      {weatherData && (
        <View>
          <Text>{weatherData.location.name}</Text>
          <Text>Temperatura: {weatherData.current.temp_c}°C</Text>
          <Text>Condizioni: {weatherData.current.condition.text}</Text>
        </View>
      )}
    </View>
  );
}

export default City; 
