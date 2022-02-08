import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    background-color: #d0e4eb;

    div {
        display: grid;
        place-items: center;
        padding: 20px;
        border-radius: 15px;
        min-width: 15em;
        width: 40vw;
        max-width: 40vw;
        background-color: #ececec;

        input {
            margin-bottom: 10px;
        }
    }
`