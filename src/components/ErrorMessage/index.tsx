import { Container, ErrorText } from './styles';

interface Props{
  description: string | undefined;
}

export function ErrorMessage({description}:Props) {
  
  return (
    <Container>
      <ErrorText>{description}</ErrorText>
    </Container>
  );
}