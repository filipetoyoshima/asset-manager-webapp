import { Container } from './style';
import { Input, Typography, Button } from 'antd';

const { Title } = Typography;

export default function Home() {
  console.log('Home');
  return (
    <Container>
      <div>
        <Title>Login</Title>
        <Input placeholder="email"/>
        <Input placeholder="password"/>
        <Button type='primary'>Login</Button>
      </div>
    </Container>
  );
}
