import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 1%;
    img{
        width: 100%;
    }
`;
const Banner = () => {
    return (
        <Wrap>
            <img src="https://pubcdn.ivymoda.com/files/news/2021/09/14/e6755c46cb2b66236e9142a6a5b3fdf7.jpg" alt=""/>
        </Wrap>
    )
}
export default React.memo(Banner);
//usememo: sử dụng trong nguyên 1 component.
//useCallBack: sử dụng trong 1 hàm.