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
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        width: 47%;
        h3{
            font-size: 15px;
            white-space: nowrap;//ch??? ch??? tr??n 1 d??ng v?? b??? tr??n b???t k??? ????? d??i ntn.
            overflow: hidden;//ch??? nhi???u s??? b??? tr??n b??n ph???i l??m x???u web
            text-overflow: ellipsis;//hi???n th??? ... n???u ch??? kh??ng hi???n th??? h???t
        }
    }
    h4{
        font-size: 15px;
    }
    p{
        font-size: 12px;
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
    const [showFilter, setShowFilter] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const [title, setTitle] = useState("h??ng nam m???i v???");
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
                setTitle("??o polo nam");
                break;
            case "newpolo":
                setData(newpolo);
                setFilter(newpolo);
                setTitle("??o polo nam m???i");
                break;
            case "somi":
                setData(somi);
                setFilter(somi);
                setTitle("??o s?? mi nam");
                break;
            case "thun":
                setData(thun);
                setFilter(thun);
                setTitle("??o thun nam");
                break;
            case "jeans":
                setData(jeans);
                setFilter(jeans);
                setTitle("Qu???n jeans nam");
                break;
            case "long_trousers":
                setData(long_trousers);
                setFilter(long_trousers);
                setTitle("Qu???n d??i nam");
                break;
            case "short":
                setData(short);
                setFilter(short);
                setTitle("Qu???n l???ng nam");
                break;
            case "suit":
                setData(suit);
                setFilter(suit);
                setTitle("Qu???n t??y nam");
                break;
            case "shoes":
                setData(shoes);
                setFilter(shoes);
                setTitle("Gi??y nam");
                break;
            case "accessory":
                setData(accessory);
                setFilter(accessory);
                setTitle("Ph??? ki???n nam");
                break;
            default:
                setData(news2);
                setFilter(news2);
                setTitle("H??ng nam m???i v???");
        }
    }, [type]);
    return (
        <Wrap>
            <General>
                <h3>{title}</h3>
                <div className="options">
                    <div className="filter" onClick={() =>handleShow(1)}>
                        <p>B??? l???c</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                    <div className="sort" onClick={() =>handleShow(2)}>
                        <p>S???p x???p</p>
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
                                <Link to ={`/chi-tiet-hang-nam/${type}/${value.id}`}>
                                    <img src={`/image/woman/top_collections/${value.image}`}/>
                                </Link>
                                <Link to ={`/chi-tiet-hang-nam/${type}/${value.id}`}><h3>{value.name}</h3></Link>
                                <h4>{value.price}<sup>??</sup></h4>
                                <p>_new_</p>
                            </Card>
                        )
                })) : <Notfound/>}
            </Products>

        </Wrap>
    );
}

export default Content;