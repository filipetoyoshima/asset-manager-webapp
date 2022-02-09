import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #d0e4eb;

    div {
        display: grid;
        place-items: center;
        padding: 20px;
        border-radius: 15px;
        min-width: 200px;
        width: 40vw;
        max-width: 400px;
        background-color: #ececec;

        .input { // I'd prefer just to refer to input type, but antd messes up the Input.Password
            margin-bottom: 10px;
            max-width: 20em;
        }
    }
`