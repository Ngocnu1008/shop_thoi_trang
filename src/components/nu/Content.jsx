import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {news, shirt, croptop, somi, vest} from "../../data/do_nu";

const Wrap = styled.div`
    max-width: 80%;
`;
const General = styled.div` 
    h3{
        margin-top: 30px;
        text-transform: uppercase;
        font-weight: bold;
    }
    color: ${props => props.theme.color};
    display: flex;
    .options {
        margin-top: 30px;
        display: flex;
        div{
            display: flex;
            align-items: center;
            margin: 0 5%;
            width: 150px;
            p {
                margin: 0 20px;
            }
        }
    }
`;
const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin-top: 25px;
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
`;
function Content({type}) {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("Hàng nữ mới về");
    useEffect (() => {
        switch (type) {
            case "shirt":
                setData(shirt);
                setTitle("Áo nữ");
                break;
            case "croptop":
                setData(croptop);
                setTitle("Áo croptop");
                break;
            case "somi":
                setData(somi);
                setTitle("Áo sơ mi nữ");
                break;
            case "vest":
                setData(vest);
                setTitle("Áo vest nữ");
                break;
            default:
                setData(news);
                setTitle("hàng nữ mới về");
        }
    },[type]);


    // const [count, setCount] = useState(0);

    // const handleClick = () => {
    //     setCount(count + 1);
    // }
    return (
        <Wrap>
            <General>
                <h3>{title}</h3>
                <div className="options">
                    <div className="filter">
                        <p>Bộ lọc</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                    <div className="sort">
                        <p>Sắp xếp</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                </div>
            </General>
                <Products>
                    {data && 
                    data.map ((value, index) => {
                        return (
                            <Card key={index}>
                                <img src={`/image/woman/top_collections/${value.image}`}/>
                                <Link to={`/chi-tiet-hang-nu/${type}/${value.id}`}><h3>{value.name}</h3></Link>
                                <h4>{value.price}</h4>
                                <p>_new_</p>
                            </Card>
                        )
                    })}
                </Products>
        </Wrap>
    );
}

export default Content;