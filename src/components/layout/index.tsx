import { Layout, Typography } from 'antd';
import React from 'react';
import { Container } from './style';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

function LayoutComponent(props: React.PropsWithChildren<{}>) {
  console.log ('LayoutComponent');
  return (
    <Container>
        <Header className='header'>
            <Title>Site Name</Title>
        </Header>
        <Layout>
            <Sider className='sider'>
                Sider
            </Sider>
            <Content className='content'>
                {props.children}
            </Content>
        </Layout>
    </Container>
  );
}

export default LayoutComponent;
