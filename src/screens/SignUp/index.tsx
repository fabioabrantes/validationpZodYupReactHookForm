import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function SignUp() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" >
          <>
            <Header />
            <Form />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container >
  );
}