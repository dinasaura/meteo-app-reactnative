import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const BackgroundModal = styled.View`
  background-color: rgba(242, 242, 246, 1);
  flex: 1;
  padding-top: 16px;
`;

export const SearchArea = styled.View`
  flex-direction: row;
`;

export const BackButtonWrapper = styled.TouchableOpacity`
  justify-content: center;
  height: 40px;
`;

export const SearchWrapper = styled.View`
  background-color: rgba(120, 120, 128, 0.12);
  border-radius: 12px;
  flex: 1;
  justify-content: center;
  margin-left: 12px;
  padding: 0 4px;
`;

export const SearchInput = styled(TextInput)`
  color: #000000;
  flex: 1;
`;

export const AutocompleteArea = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 20,
  },
})``;

export const AvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  height: 100%;
`;
