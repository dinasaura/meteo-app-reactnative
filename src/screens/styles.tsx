import styled from 'styled-components/native';
export const Wrapper = styled.ScrollView`
  padding: 16px;
`;

export const CityInfoContainer = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`;

export const CityInfoText = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  color: black;
`;

export const WeatherDetailsContainer = styled.View`
  margin-top: 20px;
`;

export const WeatherDetailsText = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
  color: rgba(60, 60, 67, 0.6);
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const AddToFavoritesButton = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  color: #fff;
  margin-top: 15px;
  cursor: pointer;
`;

export const CityContainerSevenDays = styled.View`
  display: flex;
  align-items: center;
  padding-top: 15px;
  fle: wrap;
`;

export const ContainerAddToFavoritesButtons = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

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

export const CityContainer = styled.TouchableOpacity`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 5px;
`;

export const CountryText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const CityText = styled.Text`
  font-size: 18px;
  line-height: 24px;
  margin-top: 12px;
  text-transform: uppercase;
  color: black;
  margin-bottom: 10px;
`;

export const TextDate = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  display: flex;
  align-self: center;
`;
