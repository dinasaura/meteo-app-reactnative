import styled from 'styled-components/native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import React from 'react';

const ContainerWrapper = styled.View<{insets: EdgeInsets}>`
  flex: 1;
  padding-top: ${({insets}) => insets.top}px;
  padding-left: ${({insets}) => insets.left + 20}px;
  padding-right: ${({insets}) => insets.right + 20}px;
`;

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({children}) => {
  const insets = useSafeAreaInsets();
  return <ContainerWrapper insets={insets}>{children}</ContainerWrapper>;
};

export default Container;
