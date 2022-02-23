import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.div`
    width: 600px;
    background-color: aliceblue;
    margin: 20px;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid ${colors.contrastGray};

    #image {
        position: relative;
        width: 100%;
    }

    #image:before {
        content: "";
        display: block;
        padding-top: 100%;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    #text-info {
        margin-left: 10px;
    }
    
    .name {
        font-weight: bolder;
        font-size: 1.6em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .model {
        font-size: 1.2em;
        margin-bottom: 0.5em;
    }

    #description-wrapper {
        position: relative;
        width: 100%;
    }

    #description-wrapper:before {
        content: "";
        display: block;
        padding-top: 30%;
    }

    .description {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #condition {
        margin-top: 10px;
        width: 100%;
    }

    .status-wrapper {
        display: flex;
        justify-content: center;
    }

    .status {
        background-color: ${props => props.color};
        width: 80px;
        border-radius: 5px;
        text-align: center;
    }

    .status-name {
        color: white;
        font-weight: bold;
    }
`