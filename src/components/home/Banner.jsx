import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {Link} from "react-router-dom"

const Wrap = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 2%;
    img{
        width: 100%;
    }
`;
const Banner = () => {
    return (
        <Wrap>
            {/* <img src="https://pubcdn.ivymoda.com/files/news/2021/09/14/e6755c46cb2b66236e9142a6a5b3fdf7.jpg" alt=""/> */}
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs = {false} interval={2000}>
                <Link to="/hang-nam/:type">
                <div>
                    <img src="https://pubcdn.ivymoda.com/files/news/2021/09/14/e6755c46cb2b66236e9142a6a5b3fdf7.jpg" alt=""/>
                </div></Link>
                <Link to="/hang-nu/:type">
                <div>
                    <img src="https://pubcdn.ivymoda.com/files/news/2021/10/05/fe0a56c78a947a5a57180c379899c1ed.jpg" alt=""/>
                </div></Link>
                <div>
                    <img src="https://pubcdn.ivymoda.com/files/news/2021/10/08/ef7214376241abca50111290ce2d3ee9.jpg" alt=""/>
                </div>
                <Link to="/sale-off/:gender">
                <div>
                    <img src="https://pubcdn.ivymoda.com/files/news/2021/09/25/f597c81646d5ade7ea99d673343d2abb.jpg" alt=""/>
                </div>
                </Link>
            </Carousel>
        </Wrap>
    )
}
export default React.memo(Banner);
//usememo: sử dụng trong nguyên 1 component.
//useCallBack: sử dụng trong 1 hàm.