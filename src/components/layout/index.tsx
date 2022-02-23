import { Layout, Menu } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import React from 'react';
import { Container } from './style';

const { Content, Sider } = Layout;

function LayoutComponent(props: React.PropsWithChildren<{}>) {
  console.log ('LayoutComponent');
  return (
    <Container>
        <Layout>
            <Sider
                className='sider'
                breakpoint='lg'
                collapsedWidth='0'
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Menu theme='dark'>
                    <Menu.Item key='1' icon={<UnorderedListOutlined/>}>
                        <a href='/in/'>Units</a>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Content className='content'>
                {props.children}
            </Content>
        </Layout>
    </Container>
  );
}

export default LayoutComponent;
