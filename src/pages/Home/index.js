import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../service/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductList,
  Product,
  Img,
  Title,
  Price,
  AddCartButton,
  ProductAmout,
  Amount,
  AddCartText,
  EmptyProducts,
  EmptyProductsText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(1);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
      setLoading(0);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : products.length ? (
        <ProductList
          data={products}
          horizontal
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <Img source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Price>{item.priceFormatted}</Price>
              <AddCartButton onPress={() => handleAddProduct(item.id)}>
                <ProductAmout>
                  <Icon name="add-shopping-cart" size={22} color="#FFF" />
                  <Amount>{amount[item.id] || 0}</Amount>
                </ProductAmout>
                <AddCartText>ADICIONAR</AddCartText>
              </AddCartButton>
            </Product>
          )}
        />
      ) : (
        <EmptyProducts>
          <Icon name="remove-shopping-cart" size={72} color="#eee" />
          <EmptyProductsText>Nenhum Produto Encontrado</EmptyProductsText>
        </EmptyProducts>
      )}
    </Container>
  );
}
