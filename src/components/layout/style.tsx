import styled from 'styled-components';
import { Layout } from 'antd';
import colors from '../../colors';

export const Container = styled(Layout)`
    height: 100%;
    min-height: 100vh;

    .sider {
        position: sticky;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 1;
    }
`