import React from 'react';
import { FlatList} from 'react-native';
import useFavoritesCities from '../../hooks/useFavoritesCities';
import { useNavigation } from '@react-navigation/native';
import { AddToFavoritesButton, ButtonText, CityContainer, CityText, ContainerAddToFavoritesButtons, CountryText } from '../styles';
import Container from '../../components/Container';
import { Text } from 'react-native-svg';

const FavoritesScreen: React.FC = () => {
  const { favorites, removeFavorite } = useFavoritesCities();
  const navigation = useNavigation();

  const handleRemoveFavorite = (cityName: string) => {
    removeFavorite(cityName);
  };

  const navigateToCity = (cityName: string) => () => {
    navigation.navigate('city', {name: cityName});
  };

  return (
    <Container>
      <FlatList
        ListEmptyComponent={<CityText>Non ci sono Città preferite</CityText>}
        contentContainerStyle={{marginTop: 20}}
        data={favorites}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <CityContainer key={item.id}>
            <CityText>{item.name}</CityText>
            <CountryText>{item.country}</CountryText>
            <ContainerAddToFavoritesButtons>
            <AddToFavoritesButton
              onPress={navigateToCity(item.name)}
              style={{ backgroundColor: '#21b237' }}
            >
              <ButtonText>Dettagli</ButtonText>
            </AddToFavoritesButton>
            <AddToFavoritesButton
              style={{ backgroundColor: '#b22121' }}
              onPress={() => handleRemoveFavorite(item.name)}
            >
              <ButtonText>Rimuovi</ButtonText>
            </AddToFavoritesButton>

            </ContainerAddToFavoritesButtons>
          </CityContainer>
        )}
      />
    </Container>
  );
};

export default FavoritesScreen;
