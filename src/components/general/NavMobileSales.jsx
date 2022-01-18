import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrap = styled.div`
    ul li {
        margin-left: 50px !important;
        font-size: 14px;
        font-weight: bold;
    }
`;
function NavMobileSales({setDisplayContent}) {
    const handleCloseBehind = () => {
        setDisplayContent(false);
    }
    return (
        <Wrap>
            <ul>
                <Link to="/sale-off/nu" onClick={handleCloseBehind}><li>nữ</li></Link>
                <Link to="/sale-off/nam" onClick={handleCloseBehind}><li>nam</li></Link>
                <Link to="/sale-off/tre-em" onClick={handleCloseBehind}><li>trẻ em</li></Link>
            </ul>
        </Wrap>
    );
}

export default NavMobileSales;