import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
const Wrap = styled.div`
    margin-top: 50px!important;
    width: 35%;
    margin: auto;
    margin-bottom: 4%;
    p{
        display: inline;
        margin-left: 5px;
    }
    a{
        text-decoration: none;
        color: black;
        padding: 7px 5px;
        border: 1px solid black;
        margin-left: 30px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 600;
        border-radius: 5px;
        &:hover{
            color: orange;
            background-color: black;
        }
    }
`;
function Sidebar(props) {
    return (
        <Wrap>
                <Link to="/collections/Trendy"><p>Beyond Trendy</p></Link>
                <Link to="/collections/Flourish18"><p>Flourish18 - Men</p></Link>
                <Link to="/collections/Dream"><p>Draw the dream</p></Link>
        </Wrap>
    );
}

export default Sidebar;