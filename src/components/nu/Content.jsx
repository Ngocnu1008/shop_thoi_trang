import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {news, shirt} from "../../data/do_nu";

const Wrap = styled.div`
    margin-left: 20%;
`;
const General = styled.div` 
    h3{
        text-transform: uppercase;
        font-weight: bold;
    }
    color: ${props => props.theme.color};
    display: flex;
    .options {
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
`;
const Card = styled.div`
    width: 23%;
    margin: 0 0.5%;
    text-align: center;
    img{
        width: 100%;
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
            default:
                setData(news);
                setTitle("Áo nữ mới về");
        }
    },[type]);


    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
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
                                <img src={`/image/woman/ao/ao_croptop/${value.image}`}/>
                                <h3>{value.name}</h3>
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