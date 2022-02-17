import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding: 20px;
    justify-content: center;
    align-items: center;
    display: flex;

    #wrapper {
        width: 600px;
    }

    #unit-list {
        justify-content: center;
        align-items: center;
    }

    .unit-card{
    }
`;

export const NonStyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`;