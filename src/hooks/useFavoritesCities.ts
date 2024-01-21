import {useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CityDataType} from '../screens/Home/data/citiesData.ts';
import {FavoritesDataProvider} from '../providers/FavoriteProvider.tsx';

const useFavoritesCities = () => {
  const {favorites, setFavorites} = useContext(FavoritesDataProvider);

  useEffect(() => {
    const setDataFn = async () => {
      const favoritesFromStorage = await AsyncStorage.getItem('favorites');
      const parsedFavorites = favoritesFromStorage
        ? JSON.parse(favoritesFromStorage)
        : [];
      setFavorites(parsedFavorites);
    };

    setDataFn();
  }, []);

  const addFavorite = (newFavorite: CityDataType) => {
    const isAlreadyFavorite = favorites.some(
      city => city.name === newFavorite.name,
    );

    if (!isAlreadyFavorite) {
      setFavorites(prevFavorites => {
        const newFavorites = [...prevFavorites, newFavorite];
        AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
        return newFavorites;
      });
    }
  };

  const removeFavorite = (cityName: string) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.filter(city => city.name !== cityName);
      AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return {favorites, addFavorite, removeFavorite};
};

export default useFavoritesCities;