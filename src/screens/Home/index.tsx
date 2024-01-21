import styled from 'styled-components/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import Container from '../../components/Container.tsx';
import {useNavigation} from '@react-navigation/native';
import {citiesData} from './data/citiesData.ts';
import MeteoLogoIcon from '../../icons/MeteoLogoIcon.tsx';
import SearchModal from '../../components/SearchModal.tsx';
import { CityContainer, CityText, CountryText, HeaderSearchWrapper, SearchText, SearchWrapper, StyledScrollView, ViewContainer } from '../styles.tsx';


const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const openModal = () => setShowSearchModal(true);
  const closeModal = () => setShowSearchModal(false);

  const navigateToCity = (cityName: string) => () => {
    navigation.navigate('city', {name: cityName});
  };

  return (
    <Container>
      <StyledScrollView>
        <HeaderSearchWrapper>
          <MeteoLogoIcon />
          <SearchWrapper onPress={openModal}>
            <SearchText>Cerca city ...</SearchText>
          </SearchWrapper>
        </HeaderSearchWrapper>
        <ViewContainer>
          {citiesData.map(city => (
            <CityContainer key={city.id} onPress={navigateToCity(city.name)}>
              <CityText>{city.name}</CityText>
              <CountryText>{city.country}</CountryText>
            </CityContainer>
          ))}
        </ViewContainer>
      </StyledScrollView>
      <SearchModal visible={showSearchModal} onClose={closeModal} />
    </Container>
  );
};

export default HomeScreen;
