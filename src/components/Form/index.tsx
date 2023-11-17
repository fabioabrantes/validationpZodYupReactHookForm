import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {schemaZod,IRegisterUser} from '../../utils/validationSchemaZod';

import { Button } from '../Button';
import { Input } from '../Input';
import { ErrorMessage } from '../ErrorMessage';


import { Container } from './styles';

export function Form() {
  const {control,handleSubmit,formState:{errors}} = useForm<IRegisterUser>({
    resolver:zodResolver(schemaZod)// aqui os dados são validados
  });

  
  function handleUserRegister(data:IRegisterUser) {
    
      Alert.alert(
        'cadastro realizado com sucesso', 
        `(${data.name})`,
        [
          {text:'ok',}
        ]
      );
    }
  
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="position" enabled>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <Input
              icon="user" 
              placeholder="Nome"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
        {
          !!errors.name && <ErrorMessage description={errors.name.message}/>
        }

        <Controller
          name="email"
          control={control}
          render={({field:{onChange,value}})=>(
            <Input 
              icon="mail" 
              onChangeText={onChange} 
              value={value} 
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize='none'
            />
          )} 
       />
      {
        !!errors.email && <ErrorMessage description={errors.email.message}/>
      }

        <Controller
          name="password"
          control={control}
          render={({field:{onChange,value}})=>(
            <Input 
              icon="lock" 
              onChangeText={onChange} 
              value={value} 
              placeholder="Senha"
              secureTextEntry
            />
          )} 
       />
        {
          !!errors.password && <ErrorMessage description={errors.password.message}/>
        }

        <Controller
          name="passwordConfirm"
          control={control}
          render={({field:{onChange,value}})=>(
            <Input 
              icon="lock" 
              onChangeText={onChange} 
              value={value} 
              placeholder="Confirme a senha"
              secureTextEntry
            />
          )} 
       />
       {
          !!errors.passwordConfirm && <ErrorMessage description={errors.passwordConfirm.message}/>
        }
        <Button
          title="Cadastrar"
          onPress={handleSubmit(handleUserRegister)}
        />
       </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}