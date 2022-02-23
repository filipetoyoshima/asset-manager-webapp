import styled from 'styled-components';
import { Layout } from 'antd';
import colors from '../../colors';

export const Container = styled(Layout)`
    height: 100%;
    min-height: 100vh;

    .logo {
        height: 32px;
        margin: 16px;
        background: rgba(255, 255, 255, 0.2);
        text-align: center;
        color: white;
    }

    .sider {
        position: sticky;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .logout-button {
        position: absolute;
        left: 16px;
        bottom: 15px;
    }
`