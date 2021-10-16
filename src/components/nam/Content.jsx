import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {news2, newpolo, polo, somi, thun, jeans, long_trousers, short, suit, shoes, accessory} from "../../data/do_nam";
import {Link} from "react-router-dom";
import Filter from './Filter';
import SortNam from './SortNam';
import Notfound from '../nu/Notfound';
const Wrap = styled.div`
    max-width: 80%;
    position: relative;
    @media screen and (max-width: 811px){
        max-width: 100%;
        margin-left: 5%;
        position: relative;
    }
    // @media screen and (max-width: 1023px) {
    //     position: relative;
    // }
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
    @media screen and (max-width: 811px){
        margin-top: 80px;
        display: block;
        h3{
            font-size: 15px;
        }
        .options {
            width: 320px;
            margin: auto !important;
            margin-left: 10px;
            display: flex;
            margin-right: 0px;
            position: absolute;
            left: 0px;
            top: 115px;
            div{
                :last-child{
                    margin-left: 25px;
                }
                padding: 5px 3px;
                margin: 0 5%;
                width: 150px;
                p {
                    margin: 0 10px;
                }
                i{
                    margin-right: 10px;
                }
            }
        }
    }
    // @media screen and (max-width: 1023px) {
    //     .options {
    //         position: absolute;
    //         left: 17%;
    //         top: 2.4%;
    //     }
    // }
`;
const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin-top: 25px;
    @media screen and (max-width: 811px) {
        margin-top: 20%;
    }
    // @media screen and (max-width: 1023px) {
    //     margin-top: 10%;
    // }
`;
const Card = styled.div`
    width: 23%;
    margin: 1% 0.5%;
    text-align: center;
    img{
        width: 100%;
    }
    a {
        text-decoration: none;
        color: black;
    }
    h3 {
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 5px;
        cursor: pointer;
    }
    h4{
        font-weight: 400;
    }
    @media screen and (max-width: 811px) {
        width: 47%;
        h3{
            font-size: 15px;
            white-space: nowrap;//chữ chỉ trên 1 dòng và bị tràn bất kể độ dài ntn.
            overflow: hidden;//chữ nhiều sẽ bị tràn bên phải làm xấu web
            text-overflow: ellipsis;//hiển thị ... nếu chữ không hiển thị hết
        }
    }
    h4{
        font-size: 15px;
    }
    p{
        font-size: 12px;
    }
`;

function Content({type}) {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const [title, setTitle] = useState("hàng nam mới về");
    const handleShow = (state) => {
        if(state === 1){
            setShowFilter(!showFilter)
            setShowSort(false)
        }else{
            setShowSort(!showSort);
            setShowFilter(false);
        }
    }
    useEffect (() => {
        switch (type) {
            case "polo":
                setData(polo);
                setFilter(polo);
                setTitle("Áo polo nam");
                break;
            case "newpolo":
                setData(newpolo);
                setFilter(newpolo);
                setTitle("Áo polo nam mới");
                break;
            case "somi":
                setData(somi);
                setFilter(somi);
                setTitle("Áo sơ mi nam");
                break;
            case "thun":
                setData(thun);
                setFilter(thun);
                setTitle("Áo thun nam");
                break;
            case "jeans":
                setData(jeans);
                setFilter(jeans);
                setTitle("Quần jeans nam");
                break;
            case "long_trousers":
                setData(long_trousers);
                setFilter(long_trousers);
                setTitle("Quần dài nam");
                break;
            case "short":
                setData(short);
                setFilter(short);
                setTitle("Quần lửng nam");
                break;
            case "suit":
                setData(suit);
                setFilter(suit);
                setTitle("Quần tây nam");
                break;
            case "shoes":
                setData(shoes);
                setFilter(shoes);
                setTitle("Giày nam");
                break;
            case "accessory":
                setData(accessory);
                setFilter(accessory);
                setTitle("Phụ kiện nam");
                break;
            default:
                setData(news2);
                setFilter(news2);
                setTitle("Hàng nam mới về");
        }
    }, [type]);
    return (
        <Wrap>
            <General>
                <h3>{title}</h3>
                <div className="options">
                    <div className="filter" onClick={() =>handleShow(1)}>
                        <p>Bộ lọc</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                    <div className="sort" onClick={() =>handleShow(2)}>
                        <p>Sắp xếp</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                        {showSort && <SortNam data={data} setFilter={setFilter}/>}
                    </div>
                </div>
            </General>
            {showFilter && <Filter data={data} setFilter={setFilter}/>}
            <Products>
                {filter && filter.length > 0 
                ? (
                    filter.map ((value, index) => {
                        return (
                            <Card key={index}>
                                <img src={`/image/woman/top_collections/${value.image}`}/>
                                <Link to ={`/chi-tiet-hang-nam/${type}/${value.id}`}><h3>{value.name}</h3></Link>
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