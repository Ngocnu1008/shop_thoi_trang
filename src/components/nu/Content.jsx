import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {news1, shirt, croptop, somi, vest, short, trousers, jeans, dam, dam_thun, dam_mexi} from "../../data/do_nu";
import Filter from './Filter';
import SortComponent from "./Sort"
import Notfound from './Notfound';
const Wrap = styled.div`
    max-width: 80%;
    position: relative;
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        max-width: 100%;
        margin-left: 5%; 
        margin-top: 40px;
        position: relative;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        position: relative;
        max-width: 76%;
    }
`;
const General = styled.div` 
    cursor: pointer;
    margin-top: 50px;
    h3{
        text-transform: uppercase;
        font-weight: bold;
    }
    color: ${props => props.theme.color};
    display: flex;
    .options {
        position: absolute;
        left: 15%;
        margin-left: 50px;
        display: flex;
        div{
            border: 1px solid gray;
            padding: 5px 3px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 250px;
            margin: 0% 10%;
            p {
                margin: 0 10px;
            }
            i{
                margin-right: 10px;
            }
        }
    }
    div:hover{
        cursor: pointer;
    }
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        margin-top: 30px;
        display: block;
        h3{
            font-size: 15px;
        }
        .options {
            width: 305px;
            margin: auto !important;
            display: flex;
            position: absolute;
            left: 0px;
            top: 70px;
            div{
                :last-child {
                    margin-left: 25px;
                }
                padding: 5px 3px;
                margin: 0 0%;
                p {
                    margin: 0 10px;
                }
                i{
                    margin-right: 10px;
                }
            }
        }
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px){
        margin-top: 80px;
        .options {
            position: fixed;
            left: 39%;
            top: 10%;
            div {
                margin: 0% 5%;
                width: 200px;
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
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        margin-top: 20%;
        width: 93%;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px){
        margin-top: 5%;
        width: 100%;
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
        cursor: pointer;
    }
    h4 {
        font-weight: 400;
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
        p{
            font-size: 12px;
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
                setFilter(shirt);//lúc đầu khi chưa bám filter thì mảng này bằng data luôn nên phải giữ data làm mảng gốc để lọc sau đó 
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

    const handleDisplayFilter = (state) => {
        if(state === "1"){
            setDisplay(!display);
            setDisplaySort(false);
        }else{
            setDisplaySort(!displaySort);
            setDisplay(false);
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
                        {displaySort && <SortComponent setFilter={setFilter} data={data}/>}
                    </div>
                </div>
            </General>
            {display && <Filter setFilter={setFilter} data={data}/>}
            <Products>
                {filter && filter.length > 0 
                ? (
                    filter.map ((value, index) => {
                        return (
                            <Card key={index}>
                                <Link to={`/chi-tiet-hang-nu/${type}/${value.id}`}>
                                    <img src={`/image/woman/top_collections/${value.image}`}/>
                                </Link>
                                <Link to={`/chi-tiet-hang-nu/${type}/${value.id}`}><h3>{value.name}</h3></Link>
                                <h4>{value.price}<sup>đ</sup></h4>
                                <p>_new_</p>
                            </Card>
                        )
                })) : <Notfound/>}
            </Products>
        </Wrap>
    );
}

export default Content;