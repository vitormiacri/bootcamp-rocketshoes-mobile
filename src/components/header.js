import React from 'react';
import { useSelector } from 'react-redux';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'react-native-elements';

import { Container, Logo, ContainerLogo } from './styles';

import logo from '../assets/logo.png';
import iconeTenis from '../assets/logo-tenis.png';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <ContainerLogo>
        <Logo source={logo} />
        <Image source={iconeTenis} />
      </ContainerLogo>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={28} color="#FFF" />
        <Badge
          status="success"
          value={cartSize}
          badgeStyle={{ backgroundColor: '#7159c1' }}
          containerStyle={{ position: 'absolute', top: -7, right: -7 }}
        />
      </TouchableOpacity>
    </Container>
  );
}
