import React, { useEffect } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {Link} from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css"

const Wrap = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 2%;
    img{
        width: 100%;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;
const Banner = () => {
    useEffect(() =>{
        Aos.init({duration: 1500})
    })
    return (
        <Wrap  data-aos="fade-up">
            {/* <img src="https://pubcdn.ivymoda.com/files/news/2021/09/14/e6755c46cb2b66236e9142a6a5b3fdf7.jpg" alt=""/> */}
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs = {false} interval={2000}>
                <Link to="/hang-nam/news">
                    <div>
                        <img src="https://pubcdn.ivymoda.com/files/news/2021/09/14/e6755c46cb2b66236e9142a6a5b3fdf7.jpg" alt=""/>
                    </div>
                </Link>
                <Link to="/hang-nu/news">
                    <div>
                        <img src="https://pubcdn.ivymoda.com/files/news/2021/10/16/8ba20d4493da4eed5d2b74965f0903c3.jpg" alt=""/>
                    </div>
                </Link>
                <Link to="/collections/Trendy">
                    <div>
                        <img src="https://pubcdn.ivymoda.com/files/news/2021/10/08/ef7214376241abca50111290ce2d3ee9.jpg" alt=""/>
                    </div>
                </Link>
                <Link to="/sale-off/male">
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