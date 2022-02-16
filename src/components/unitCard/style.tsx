import styled from 'styled-components';
import { Row } from 'antd';
import colors from '../../colors';

export const CustomRow = styled(Row)`
    border: 1px solid black;
    border-radius: 7px;
    margin: 0 10px 10px 10px;
    padding: 10px;
    min-width: 450px;

    .title {
        display: block;
        font-size: 1.5em;
    }

    #assets-status {
        height: 100%;
        text-align: center;

        div {
            margin-top: auto;
            margin-bottom: auto;
        }

        .info-label {
            width: 32px;
            height: 32px;
            line-height: 32px;
            font-size: 1.2em;
            font-weight: bold;
            border-radius: 25%;
            color: ${colors.lightgray};
        }

        .running {
            background-color: ${colors.successGreen};
        }

        .alerting {
            background-color: ${colors.warningOrange};
        }

        .stopped {
            background-color: ${colors.errorRed};
        }
    }
`;