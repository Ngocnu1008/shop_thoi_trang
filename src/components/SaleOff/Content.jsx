import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {female, male, children} from "../../data/saleoff"
import {Link} from "react-router-dom"
const BigWrap = styled.div`
    max-width: 80%;
`;
const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin-top: 25px;
`;
const Title = styled.p`
    margin-top: 30px;
    text-transform: uppercase;
    font-weight: bold;
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
`;
function Content({gender}) {
    const [data, setData] = useState([]);
    useEffect(() =>{
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
                            <img src={`/image/woman/top_collections/${value.image}`}/>
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