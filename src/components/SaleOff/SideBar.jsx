import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"

const Wrap = styled.div`
    margin-top: 5.5%;
    margin-left: 3%;
    width: 20%;
    box-sizing: border-box;
    color: ${props => props.theme.color};
    ul {
        width: 100%;
    }
    li {
        margin-left: 10%;
        list-style: none;
        cursor: pointer;
        padding: 2% 0%;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 5%;
    }
    a {
        text-decoration: none;
        color: black;
    }
`;
function SideBar(props) {
    return (
        <Wrap>
            <ul>
                <Link to="/sale-off/nu"><li>nữ</li></Link>
                <Link to="/sale-off/nam"><li>nam</li></Link>
                <Link to="/sale-off/tre-em"><li>trẻ em</li></Link>
            </ul>
        </Wrap>
    );
}

export default SideBar;