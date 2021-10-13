import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {news} from "../data/news"
import {Link} from "react-router-dom";
const Wrap = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 50px;
    h2{
        width: 13%;
        margin: auto;
        text-transform: uppercase;
        font-size: 18px;
        margin-bottom: 50px;
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
`;
function News(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        window.scroll(0,0);
        setData(news);
    }, []);
    return (
        <Wrap>
            <h2>Tin tức nổi bật</h2>
            {data && 
            data.map((value, index) =>{
                return (
                    <Card key={index}>
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