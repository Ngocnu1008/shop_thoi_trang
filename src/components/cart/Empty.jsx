import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
const Wrap = styled.div`
    width: 100%;
    .content{
        width: 18%;
        margin: auto;
        margin-top: 5%;
        text-align: center;
        a{
            text-decoration: none;
        }
    }

`;
function Empty(props) {
    return (
        <Wrap>
            <div className="content">
                <h3>Vui lòng chọn sản phẩm</h3>
                <Link to="/">Shop Now</Link>
            </div>
        </Wrap>
    );
}

export default Empty;