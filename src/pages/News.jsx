import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {news} from "../data/news"
import {Link} from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";
const Wrap = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 70px !important;
    h2{
        width: 13%;
        margin: auto;
        text-transform: uppercase;
        font-size: 18px;
        margin-bottom: 50px;
    }
    @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
        width: 90%;
        margin-top: 30px;
        h2 {
            font-size: 14px;
            width: 40%;
            text-align: center;
            margin: auto;
        }
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
       width: 90%; 
       margin-top: 80px;
       h2 {
        font-size: 18px;
        width: 50%;
        text-align: center;
        margin: auto !important;
    }
    }
`;
const Card = styled.div`
    width: 100%;
    display: flex;
    a {
        text-decoration: none;
        color: black;
    }
    .image{
        width: 25%;
        img{
            width: 100%;
        }
    }
    .content{
        width: 75%;
        margin-left: 3%;
        h3{
            font-size: 16px;
            margin-bottom: 20px;
        }
    }
    border-bottom: 1px solid gray;
    margin-top: 20px;
    padding: 10px 0px;
    @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
        display: block;
        width: 90%;
        margin: auto;
        margin-top: 10px;
        .image {
            width: 100%;
        }
        .content {
            width: 100%;
            margin-top: 20px;
            margin-left: 0px;
            h3 {
                font-size: 14px;
            }
        }
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        .content {
            h3 {
                margin-bottom: 5px;
            }
        }
    }

`;
function News(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        window.scroll(0,0);
        setData(news);
    }, []);
    useEffect(() => {
        Aos.init({duration: 1500})
    }, []);
    return (
        <Wrap>
            <h2>Tin tức nổi bật</h2>
            {data && 
            data.map((value, index) =>{
                return (
                    <Card key={index} data-aos="fade-down">
                        <div className="image">
                            <Link to={`/chi-tiet-tin-tuc/${value.id}`}><img src={`/image/news/${value.image}`}/></Link>
                        </div>
                        <div className="content">
                            <Link to={`/chi-tiet-tin-tuc/${value.id}`} ><h3>{value.name}</h3></Link>
                            <p>{value.decription}</p>
                        </div>
                    </Card>
                )
            })}
        </Wrap>
    );
}

export default News;