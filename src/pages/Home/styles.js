import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
`;

export const ProductList = styled.FlatList`
  margin: 15px;
`;

export const Product = styled.View`
  background: #fff;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 20px;
  margin: 15px;
  width: 250px;
`;
export const Img = styled.Image`
  width: 220px;
  height: 220px;
  border-radius: 4px;
`;
export const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  margin-top: 5px;
  color: #333;
`;
export const Price = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
`;

export const AddCartButton = styled.TouchableOpacity`
  flex-direction: row;
  background: #7159c1;
  margin-top: auto;
  border-radius: 4px;
  overflow: hidden;
`;
export const ProductAmout = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;
export const Amount = styled.Text`
  color: #fff;
  padding: 0 8px;
`;
export const AddCartText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding: 10px 15px;
`;

export const EmptyProducts = styled.View`
  flex: 1;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

export const EmptyProductsText = styled.Text`
  font-size: 22px;
  color: #999;
  font-weight: bold;
  margin-top: 10px;
`;
