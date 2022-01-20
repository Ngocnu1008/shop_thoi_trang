import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {female, male, children} from "../../data/saleoff"
import {Link} from "react-router-dom"
const BigWrap = styled.div`
    max-width: 80%;
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        max-width: 100%;
        margin: auto;
        margin-top: 40px !important;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        max-width: 80%;
    }
`;
const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin-top: 25px;
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        width: 90%;
        margin: auto;
        margin-top: 20px !important;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px){
        margin-top: 5%;
        width: 97%;
    }
`;
const Title = styled.p`
    margin-top: 50px;
    text-transform: uppercase;
    font-weight: bold;
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        font-size: 12px;
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px){
        margin-top: 70px;
    }
`;
const Card = styled.div`
    width: 23%;
    margin: 1% 0.5%;
    text-align: center;
    a {
        text-decoration: none;
        color: black;
    }
    img{
        width: 100%;
    }
    h3 {
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 5px;
    }
    h4 {
        font-weight: 400;
    }
    p{
        color: red;
        font-size: 14px;
        margin-top: 5px;
    }
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        width: 47%;
        h3{
            font-size: 15px;
            white-space: nowrap;//chữ chỉ trên 1 dòng và bị tràn bất kể độ dài ntn.
            overflow: hidden;//chữ nhiều sẽ bị tràn bên phải làm xấu web
            text-overflow: ellipsis;//hiển thị ... nếu chữ không hiển thị hết
        }
        h4{
            font-size: 15px;
        }
        p {
            font-size: 12px;
        }
        img {
            width: 100%;
        }
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        width: 30%;
        img {
            width: 100%;
        }
        h3 {
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
function Content({gender}) {
    const [data, setData] = useState([]);
    useEffect(() =>{
        window.scroll(0,0);
        switch(gender){
            case "nam":
                setData(male);
                break;
            case "tre-em":
                setData(children);
                break;
            default:
                setData(female);
        }
    },[gender]);
    return (
        <>
        <BigWrap>
            <Title>SALE 50% ++ TOÀN BỘ SẢN PHẨM SS2021</Title>
            <Wrap>
                {data&& 
                data.map((value, index) =>{
                    return (
                        <Card key={index}>
                            <Link to={`/chi-tiet-sale-off/${gender}/${value.id}`}>
                                <img src={`/image/woman/top_collections/${value.image}`}/>
                            </Link>
                            <Link to={`/chi-tiet-sale-off/${gender}/${value.id}`}><h3>{value.name}</h3></Link>
                            <h4>{value.price}<sup>đ</sup></h4>
                            <p>199000đ (đồng giá)</p>
                        </Card>
                    )
                })}
            </Wrap>


        </BigWrap>
        </>
    );
}

export default Content;