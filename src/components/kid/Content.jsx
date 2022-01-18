import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {shirt, dream, phu_kien, skirt, trousers, news3, boy_phu_kien, boy_shirt, boy_trousers} from "../../data/do_tre_em";
import {Link} from "react-router-dom";
import Filter from "./Filter";
import SortKid from './SortKid';
import Notfound from '../nu/Notfound';

const Wrap = styled.div`
    max-width: 80%;
    position: relative;
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        max-width: 100%;
        margin-top: 40px;
        margin-left: 5%; 
        position: relative;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        position: relative;
        max-width: 80%;
    }
`;
const General = styled.div`
    margin-top: 50px;
    h3{
        text-transform: uppercase;
        font-weight: bold;
    }
    color: ${props => props.theme.color};
    display: flex;
    .options {
        position: absolute;
        left: 20%;
        // margin-top: 50px;
        display: flex;
        div{
            border: 1px solid gray;
            padding: 5px 3px;
            display: flex;
            justify-content: space-between;
            background-color: white;
            align-items: center;
            margin: 0 10%;
            width: 250px;
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
        h3 {
            font-size: 15px;
        }
        .options {
            position: absolute;
            left: 31%;
            top: 5%;
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
        width: 97%;
    }
`;
const Card = styled.div`
    width: 23%;
    cursor: pointer;
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
    const [displayFilter, setDisplayFilter] = useState(false);
    const [displaySort, setdisplaySort] = useState(false);
    const handleOpenFilter = (state) =>{
        if(state === 1){
            setDisplayFilter(!displayFilter);
            setdisplaySort(false);
        }else{
            setdisplaySort(!displaySort);
            setDisplayFilter(false);
        }
    }
    const [title, setTitle] = useState("Hàng trẻ em mới về");
    useEffect(() =>{
        switch (type) {
            case "shirt":
                setData(shirt);
                setFilter(shirt);
                setTitle("Áo thun bé gái");
                break;
            case "skirt":
                setData(skirt);
                setFilter(skirt);
                setTitle("Váy bé gái");
                break;
            case "phu_kien":
                setData(phu_kien);
                setFilter(phu_kien);
                setTitle("Phụ kiện bé gái");
                break;
            case "trousers":
                setData(trousers);
                setFilter(trousers);
                setTitle("Quần bé gái");
                break;
            case "dream":
                setData(dream);
                setFilter(dream);
                setTitle("Draw the dream");
                break;
            case "boy_phu_kien":
                setData(boy_phu_kien);
                setFilter(boy_phu_kien);
                setTitle("Phụ kiện bé trai");
                break;
            case "boy_trousers":
                setData(boy_trousers);
                setFilter(boy_trousers);
                setTitle("Quần bé trai");
                break;
            case "boy_shirt":
                setData(boy_shirt);
                setFilter(boy_shirt);
                setTitle("Áo thun bé trai");
                break;
            default:
                setData(news3);
                setFilter(news3);
                setTitle("Hàng mới về trẻ em");
        }
    },[type])
    return (
        <Wrap>
            <General>
                <h3>{title}</h3>
                <div className="options">
                    <div className="filter" onClick={() => handleOpenFilter(1)}>
                        <p>Bộ lọc</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                    <div className="sort" onClick={() => {handleOpenFilter(2)}}>
                        <p>Sắp xếp</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                        {displaySort ? <SortKid setFilter={setFilter} data={data}/> : ""}
                    </div>
                </div>
            </General>
            {displayFilter ? <Filter setFilter={setFilter} data={data}/> : ""}
            <Products>
                {filter && filter.length > 0 
                ? (
                    filter.map((value, index) => {
                        return (
                            <Card key= {index}>
                                <Link to={`/chi-tiet-hang-tre-em/${type}/${value.id}`}>
                                    <img src={`/image/woman/top_collections/${value.image}`}/>
                                </Link>
                                <Link to={`/chi-tiet-hang-tre-em/${type}/${value.id}`}><h3>{value.name}</h3></Link>
                                <h4>{value.price}</h4>
                                <p>_new_</p>
                            </Card>
                        )
                })) : <Notfound/>}
            </Products>
        </Wrap>
    );
}

export default Content;