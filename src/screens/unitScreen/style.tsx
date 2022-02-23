import styled from 'styled-components';

export const Container = styled.div`
    h2, h3 {
        margin: 20px;
    }

    #chart-container {
        display: flex;
        justify-content: center;
    }

    #assets-container {
        text-align: center;
        width: auto;
    }

    #assets-container > div {
        display: inline-block;
    }
`