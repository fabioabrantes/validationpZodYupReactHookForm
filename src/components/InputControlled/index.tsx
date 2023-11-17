import {Control,Controller,FieldError} from 'react-hook-form';

import { Input,InputProps } from '../Input';
import { ErrorMessage } from '../ErrorMessage';

import {IRegisterUser} from '../../utils/validationSchemaZod';


interface IProps extends InputProps{
  name:"name" | "email" | "password" | "passwordConfirm";
  control:Control<IRegisterUser>;
  error?:FieldError;
}
export function InputControlled({name,control,icon,error,...rest}:IProps){

  return (
    <>
    <Controller
      name={name}
      control={control}
      render={({field:{onChange,value}})=>(
        <Input icon={icon}  onChangeText={onChange} value={value} {...rest}/>
      )}
    />
      {
        error?.message && <ErrorMessage description={error.message}/>
      }
    </>
  )
}