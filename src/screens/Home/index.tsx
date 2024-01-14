import styled from 'styled-components/native';
import React from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/Container.tsx';
import {useNavigation} from '@react-navigation/native';

export const HeaderSearchWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 12px;
  height: 40px;
`;

export const SearchWrapper = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: rgba(120, 120, 128, 0.12);
  border-radius: 12px;
  padding: 10px;
  flex: 1;
  margin-right: 10px;
`;

export const SearchText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04px;
  color: rgba(60, 60, 67, 0.6);
`;

export const StyledScrollView = styled.ScrollView`
  background-color: rgba(242, 242, 246, 1);
`;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigateToSearchScreen = () => navigation.navigate('search');

  return (
    <Container>
      <StyledScrollView>
        <HeaderSearchWrapper>
          <SearchWrapper onPress={navigateToSearchScreen}>
            <SearchText>Cerca city ...</SearchText>
          </SearchWrapper>
        </HeaderSearchWrapper>
        <View style={{marginTop: 20}}>
          <Text>Home Content</Text>
        </View>
        
      </StyledScrollView>
    </Container>
  );
};

export default HomeScreen;