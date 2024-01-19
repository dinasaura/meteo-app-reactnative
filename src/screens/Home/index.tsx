import styled from 'styled-components/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import Container from '../../components/Container.tsx';
import {useNavigation} from '@react-navigation/native';
import { citiesData } from './data/citiesData.ts';
import MeteoLogoIcon from '../../icons/MeteoLogoIcon.tsx';
import SearchModal from '../../components/SearchModal.tsx';

export const HeaderSearchWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  margin-top: 10px;
`;

export const SearchWrapper = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: rgba(120, 120, 128, 0.12);
  border-radius: 12px;
  padding: 12px;
  flex: 1;
`;

export const SearchText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.04px;
  color: rgba(60, 60, 67, 0.6);
`;

export const StyledScrollView = styled.ScrollView`
  background-color: rgba(242, 242, 246, 1);
`;

const CityContainer = styled.TouchableOpacity`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const CountryText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
`;

const CityText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  margin-top: 12px;
`;

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
        <View style={{marginTop: 20}}>
          {citiesData.map(city => (
            <CityContainer key={city.id} onPress={navigateToCity(city.name)}>
              <CityText>{city.name}</CityText>
              <CountryText>{city.country}</CountryText>
            </CityContainer>
          ))}
        </View>
      </StyledScrollView>
      <SearchModal visible={showSearchModal} onClose={closeModal} />
    </Container>
  );
};

export default HomeScreen;