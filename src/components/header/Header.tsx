import React from 'react';
import {Image} from 'react-native';

import {DrawerActions, useNavigation} from '@react-navigation/native';

import {Container, Title, ButtonMenu} from './style';

interface HeaderProps {
  title: string;
}

function Header({title}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image source={require('../../assets/menu.png')} />
      </ButtonMenu>

      {title && <Title>{title}</Title>}
    </Container>
  );
}

export default Header;
