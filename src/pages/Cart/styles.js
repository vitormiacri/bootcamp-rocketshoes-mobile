import styled from 'styled-components';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  padding: 10px;
`;
export const Products = styled.View``;
export const Product = styled.View``;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Img = styled.Image`
  width: 80px;
  height: 80px;
`;
export const Details = styled.View`
  flex: 1;
  padding: 10px;
`;
export const Title = styled.Text`
  font-size: 14px;
  color: #333;
`;
export const Price = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;
export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  padding: 5px 10px;
  margin: 10px;
`;
export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ControlButton = styled.TouchableOpacity``;
export const Amount = styled.TextInput.attrs({
  readonly: true,
})`
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  padding: 0 10px;
  margin: 0 10px;
  background: #fff;
`;
export const SubTotal = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;
export const Delete = styled.TouchableOpacity`
  padding: 10px;
`;
export const TotalContainer = styled.View`
  align-items: center;
  padding: 10px 0;
`;
export const TotalText = styled.Text`
  font-size: 16px;
  color: #999;
`;
export const TotalValue = styled.Text`
  font-size: 30px;
  color: #000;
  font-weight: bold;
`;
export const ButtonOrder = styled.TouchableOpacity`
  border: 1px solid #979797;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 20px;
  margin-top: 10px;
  width: 100%;
  background: #7159c1;
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;
export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
`;
export const EmptyText = styled.Text`
  font-size: 26px;
  color: #999;
  font-weight: bold;
`;
