import React, {createContext, useState} from 'react';
import {CityDataType} from '../screens/Home/data/citiesData';

export const FavoritesDataProvider = createContext<{
  favorites: CityDataType[];
  setFavorites: React.Dispatch<React.SetStateAction<CityDataType[]>>;
}>({favorites: [], setFavorites: () => null});

type Props = {
  children: React.ReactNode;
};
const FavoriteProvider: React.FC<Props> = ({children}) => {
  const [favorites, setFavorites] = useState<CityDataType[]>([]);

  return (
    <FavoritesDataProvider.Provider value={{favorites, setFavorites}}>
      {children}
    </FavoritesDataProvider.Provider>
  );
};

export default FavoriteProvider;