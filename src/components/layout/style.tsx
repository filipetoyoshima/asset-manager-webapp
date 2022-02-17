import styled from 'styled-components';
import { Layout } from 'antd';
import colors from '../../colors';

export const Container = styled(Layout)`
    height: 100vh;

    .header {
        background: ${colors.lightBlue};

        .ant-typography {
            color: ${colors.lightGray};
            margin-bottom: 0;
            line-height: 64px;
        }
    }
`