import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {news1, shirt, croptop, somi, vest, short, trousers, jeans, dam, dam_thun, dam_mexi} from "../../data/do_nu";
import Filter from './Filter';
import SortComponent from "./Sort"
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
    div:hover{
        cursor: pointer;
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
    const [filter, setFilter] = useState([]);
    const [title, setTitle] = useState("Hàng nữ mới về");
    const [display, setDisplay] = useState(false);
    const [displaySort, setDisplaySort] = useState(false);
    useEffect (() => {
        switch (type) {
            case "shirt":
                setData(shirt);
                setFilter(shirt);
                setTitle("Áo nữ");
                break;
            case "croptop":
                setData(croptop);
                setFilter(croptop);
                setTitle("Áo croptop");
                break;
            case "somi":
                setData(somi);
                setFilter(somi);
                setTitle("Áo sơ mi nữ");
                break;
            case "vest":
                setData(vest);
                setFilter(vest);
                setTitle("Áo vest nữ");
                break;
            case "jeans":
                setData(jeans);
                setFilter(jeans);
                setTitle("Quần jeans nữ");
                break;
            case "short":
                setData(short);
                setFilter(jeans);
                setTitle("Quần lửng/short nữ");
                break;
            case "trousers":
                setData(trousers);
                setFilter(trousers);
                setTitle("Quần dài nữ");
                break;
            case "dam":
                setData(dam);
                setFilter(dam);
                setTitle("Đầm nữ");
                break;
            case "dam_thun":
                setData(dam_thun);
                setFilter(dam_thun);
                setTitle("Đầm thun nữ");
                break;
            case "dam_mexi":
                setData(dam_mexi);
                setFilter(dam_mexi);
                setTitle("Đầm mexi nữ");
                break;
            default:
                setData(news1);
                setFilter(news1);
                setTitle("hàng nữ mới về");
        }
    },[type]);


    // const [count, setCount] = useState(0);

    // const handleClick = () => {
    //     setCount(count + 1);
    // }
    const handleDisplayFilter = (state) => {
        if(state === "1"){
            setDisplay(true);
        }else{
            setDisplaySort(true);
        }
    }
    return (
        <Wrap>
            <General>
                <h3>{title}</h3>
                <div className="options">
                    <div className="filter" onClick={() => handleDisplayFilter("1")}>
                        <p>Bộ lọc</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                    <div className="sort" onClick={() => handleDisplayFilter("2")}>
                        <p>Sắp xếp</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                </div>
            </General>
            {display && <Filter setFilter={setFilter} data={data}/>}
            {displaySort && <SortComponent setFilter={setFilter} data={data}/>}
            <Products>
                {filter && 
                filter.map ((value, index) => {
                    return (
                        <Card key={index}>
                            <img src={`/image/woman/top_collections/${value.image}`}/>
                            <Link to={`/chi-tiet-hang-nu/${type}/${value.id}`}><h3>{value.name}</h3></Link>
                            <h4>{value.price}<sup>đ</sup></h4>
                            <p>_new_</p>
                        </Card>
                    )
                })}
            </Products>
        </Wrap>
    );
}

export default Content;