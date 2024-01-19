import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Modal, Pressable, Text, TextInput, TouchableOpacity } from 'react-native';
import { IS_IOS, KEYBOARD_BEHAVIOR } from '../costants/index.ts';
import Container from './Container.tsx';
import BackIcon from '../icons/BackIcon.tsx';
import { BackButtonWrapper, BackgroundModal, SearchArea, SearchWrapper } from './styles.tsx';
import {useNavigation} from '@react-navigation/native';
import { CityText } from '../screens/styles.tsx';

const SearchInput = styled(TextInput)`
  color: #000000;
  flex: 1;
`;

const AutocompleteArea = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 20,
  },
})``;

const AvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  height: 100%;
`;

type City = {
  name: string;
  country: string;
};

type Props = {
  visible: boolean;
  onClose: () => void;
};

const SearchModal: React.FC<Props> = ({ visible, onClose }) => {
  const searchInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const [localQuery, setLocalQuery] = useState('');
  const [autocompleteData, setAutocompleteData] = useState<City[]>([]);

  const fetchCityNames = async (searchTerm: string) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=14a83ea940ef4d45b5b103446240401&q=${searchTerm}`
      );

      if (response.ok) {
        const data: City[] = await response.json();
        setAutocompleteData(data);
      } else {
        console.error('Error fetching city names:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching city names:');
    }
  };

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        if (localQuery.trim() !== '') {
          await fetchCityNames(localQuery);
        } else {
          // Se il termine di ricerca è vuoto, azzera l'elenco delle città
          setAutocompleteData([]);
        }
      } catch (error) {
        console.error('Error fetching city data:');
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchCityData();
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [localQuery]);

  const onModalShow = () => {
    if (IS_IOS) {
      return;
    }
    searchInputRef?.current?.blur();
    setTimeout(() => searchInputRef?.current?.focus(), 100);
  };
  const navigateToCity = (cityName: string) => () => {
    navigation.navigate('city', {name: cityName});
  };

  return (
    <Modal
      visible={visible}
      transparent
      supportedOrientations={['portrait']}
      animationType="fade"
      onRequestClose={onClose}
      onShow={onModalShow}>
      <Container>
        <BackgroundModal>
          <SearchArea>
            <BackButtonWrapper onPress={onClose}>
              <BackIcon />
            </BackButtonWrapper>
            <SearchWrapper>
              <SearchInput
                ref={searchInputRef}
                autoFocus={IS_IOS}
                value={localQuery}
                onChangeText={setLocalQuery}
              />
            </SearchWrapper>
          </SearchArea>
          <AvoidingView behavior={KEYBOARD_BEHAVIOR}>
          <AutocompleteArea keyboardShouldPersistTaps="always">
              {autocompleteData.map((city, index) => (
                <Pressable key={index} onPress={navigateToCity(city.name)}>
                    <CityText>{city.name}, {city.country}</CityText>
                </Pressable>
              ))}
            </AutocompleteArea>
          </AvoidingView>
        </BackgroundModal>
      </Container>
    </Modal>
  );
};

export default SearchModal;
