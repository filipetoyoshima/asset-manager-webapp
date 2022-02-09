import { Container } from './style';
import { Input, Typography, Button } from 'antd';
import { useRef } from 'react';
import { login } from '../../api/login';

const { Title } = Typography;

export default function Home() {
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  
  const handleLogin = () => {
    // Todo: validate email and password
    if (!emailRef.current || !passwordRef.current) return;
    const email = emailRef.current.state.value;
    const password = passwordRef.current.state.value;

    login({ email, password })
      .then((res) => {
        localStorage.setItem('accessToken', res.token);
        window.location.href = '/in/';
      })
      .catch(() => {});
  }

  return (
    <Container>
      <div>
        <Title>Login</Title>
        <Input placeholder="email" ref={emailRef} className='input'/>
        <Input.Password placeholder="password" ref={passwordRef} className='input'/>
        <Button type='primary' onClick={handleLogin}>
          Login
        </Button>
      </div>
    </Container>
  );
}
