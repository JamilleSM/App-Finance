import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #1c1c1c;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #4f4f4f;
  width: 90%;
  font-size: 16px;
  padding: 12px;
  border-radius: 20px;
  color: #fff;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 20px;
  background-color: #008080;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
export const SubmitText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const LinkText = styled.Text`
  color: #f8f8ff;
`;
