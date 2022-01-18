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
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        width: 100%;
        margin: auto;
        padding-top: 20px;
        h3 {
            font-size: 10px;
        }
        a {
            font-size: 9px;
         }
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        width: 100%;
        margin: auto;
        padding-top: 50px;
    }
`;
function Empty(props) {
    return (
        <Wrap>
            <div className="content">
                <h3>Vui lòng chọn sản phẩm</h3>
                <Link to="/">Mua sắm ngay</Link>
            </div>
        </Wrap>
    );
}

export default Empty;