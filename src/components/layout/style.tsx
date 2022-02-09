import styled from 'styled-components';
import { Layout } from 'antd';
import colors from '../../colors';

export const Container = styled(Layout)`
    height: 100vh;

    .header {
        background: ${colors.lightblue};

        .ant-typography {
            color: ${colors.lightgray};
            margin-bottom: 0;
            line-height: 64px;
        }
    }
`