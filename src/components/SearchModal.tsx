import React, {useRef, useState} from 'react';
import styled from 'styled-components/native';
import {Modal, Text, TextInput} from 'react-native';
import {IS_IOS, KEYBOARD_BEHAVIOR} from '../costants/index.ts';
import Container from './Container.tsx';
import BackIcon from '../icons/BackIcon.tsx';

const BackgroundModal = styled.View`
  background-color: rgba(242, 242, 246, 1);
  flex: 1;
  margin-top: 16px;
`;

const SearchArea = styled.View`
  flex-direction: row;
`;

const BackButtonWrapper = styled.TouchableOpacity`
  justify-content: center;
  height: 40px;
`;

const SearchWrapper = styled.View`
  background-color: rgba(120, 120, 128, 0.12);
  border-radius: 12px;
  flex: 1;
  justify-content: center;
  margin-left: 12px;
  padding: 0 4px;
`;

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

type Props = {
  visible: boolean;
  onClose: () => void;
};

const SearchModal: React.FC<Props> = ({visible, onClose}) => {
  const searchInputRef = useRef<TextInput>(null);

  const [localQuery, setLocalQuery] = useState('');

  const onModalShow = () => {
    if (IS_IOS) {
      return;
    }
    searchInputRef?.current?.blur();
    setTimeout(() => searchInputRef?.current?.focus(), 100);
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
              <Text>Here will be text 1</Text>
              <Text>Here will be text 2</Text>
              <Text>Here will be text 3</Text>
            </AutocompleteArea>
          </AvoidingView>
        </BackgroundModal>
      </Container>
    </Modal>
  );
};

export default SearchModal;