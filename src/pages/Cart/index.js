import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  Products,
  Product,
  Info,
  Img,
  Details,
  Title,
  Price,
  Footer,
  ProductAmount,
  ControlButton,
  Amount,
  SubTotal,
  Delete,
  TotalContainer,
  TotalText,
  TotalValue,
  ButtonOrder,
  ButtonText,
  EmptyContainer,
  EmptyText,
} from './styles';
import { formatPrice } from '../../util/format';

export default function Cart({ navigation }) {
  const total = useSelector(state => {
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    );
  });

  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
      priceFormatted: formatPrice(product.price),
    }))
  );

  const dispatch = useDispatch();

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  return (
    <ScrollView>
      <Container>
        {products ? (
          <>
            <Products>
              {products.map(product => (
                <Product key={product.id}>
                  <Info>
                    <Img source={{ uri: product.image }} />
                    <Details>
                      <Title>{product.title}</Title>
                      <Price>{product.priceFormatted}</Price>
                    </Details>
                    <Delete
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    >
                      <Icon name="delete-forever" size={24} color="#7159c1" />
                    </Delete>
                  </Info>
                  <Footer>
                    <ProductAmount>
                      <ControlButton onPress={() => decrement(product)}>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </ControlButton>
                      <Amount value={String(product.amount)} />
                      <ControlButton onPress={() => increment(product)}>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </ControlButton>
                    </ProductAmount>
                    <SubTotal>{product.subtotal}</SubTotal>
                  </Footer>
                </Product>
              ))}
            </Products>
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalValue>{total}</TotalValue>
              <ButtonOrder>
                <ButtonText>FINALIZAR PEDIDO</ButtonText>
              </ButtonOrder>
            </TotalContainer>
          </>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={72} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    </ScrollView>
  );
}
