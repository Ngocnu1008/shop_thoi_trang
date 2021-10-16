import React from 'react';
import styled from 'styled-components';
const Wrap = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 10%;
    right: 2%;
    cursor: pointer;
    border: 1px solid gray;
    &:active {
        background: black;
        color: white;
    }
    i {
        font-size: 25px;
    }
    @media screen and (max-width: 811px) {
        position: fixed;
        bottom: 7%;
        right: 2%;
    }
`;

function Toggle({setTheme, theme}) {
    const handleSetTheme = () => {
        setTheme(!theme);
    }
    return (
        <Wrap onClick={handleSetTheme}>
             <i className="fa fa-star-o" aria-hidden="true"></i>
        </Wrap>
    );
}

export default Toggle;