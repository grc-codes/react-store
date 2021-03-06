import styled, { css } from 'styled-components';

const buttonStyles = css`
    background: #000;
    color: #fff;
    border: none;
    &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #000;
    }
`;

const invertedButtonStyles = css`
    background: #fff;
    color: #000;
    border: 1px solid #000;

    &:hover {
        background: #000;
        color: #fff;
        border: none;
    }
`;

const googleSignInStyles = css`
    background: #4285f4;
    color: #fff;

    &:hover {
        background: #357ae8;
        color: #fff;
        border: none;
    }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #000;
    }

    ${getButtonStyles}
`;

