import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import {newpolo, somi, polo, thun, news2, jeans, long_trousers, shoes, short, suit, accessory} from "../data/do_nam";
import Info from '../components/detailsNam/Infor';
import Protection from '../components/detailsNam/protection';
import SizeReferenceGeneral from '../components/detailsNam/SizeReferenceGeneral';
import Loading from '../components/Loading';
import { Link} from "react-router-dom";
const Wrap = styled.div`
    padding-top: 50px;
    width: 70%;
    display: flex;
    margin: auto;
    @media screen and (min-device-width: 375px) and (max-device-width: 811px){
        padding-top: 30px;
        display: block;
        width: 100%;
        margin: auto;
    }
    @media screen and (max-width: 1023px) {
        padding-top: 50px;
    }
`;
const Left = styled.div`
    width: 50%;
    text-align: center;
    @media screen and (max-width: 811px) {
        width: 80%;
        margin: auto;
    }
    @media screen and (min-width-device: 767px) and (max-width-device: 1023px) {
        margin-left: 5%;
    }
`;
const Right = styled.div`
    width: 50%;
    .nav_title{
        width: 56%;
        border-bottom: 1px solid black;
        margin-bottom: 10px;
        button{
            border: none;
            background: none;
            cursor: pointer;
            padding: 5px 10px;
            font-size: 16px;
        }
    }
    @media screen and (max-width: 811px) {
        width: 90%;
        margin-top: 15% !important;
        margin: auto;
        .nav_title{
            width: 100%;
            button {
                font-size: 14px;
            }
        }
    }
`;
const Card = styled.div`
    width: 100%;
    img{
        width: 50%;
    }
    h2{
        text-transform: uppercase;
        margin-top: 10px;
    }
    @media screen and (min-device-width: 375px) and (max-device-width: 811px){
        width: 100%;
        margin: auto;
        img{
            width: 100%;
        }
        h2 {
            font-size: 18px;
            margin: 15% 0% 2% 0%;
        }
        h3 {
            font-size: 17px;
        }
        sup {
            font-size: 17px;
        }
    }
`;
const Title = styled.p`
    width: 80%;
    margin-top: 70px !important;
    margin: auto;
    text-transform: uppercase;
    font-weight: bold;   
    @media screen and (max-width: 811px)  {
        width: 90%;
    }  
`;
const Below = styled.div`
    padding-top: 20px;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    flex-wrap: wrap;
    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
`;
const Card1 = styled.div`
    width: 19%;
    img {
        width: 100%;
    }
    text-align: center;
    h2 {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 500;
        opacity: 0.8;
        margin-top: 2px;
    }
    h3 {
        font-size: 14px;
        margin-top: 2px;
        font-weight: 400;
    }
    @media screen and (max-width: 811px) {
        width: 100%;
        margin: auto;
        margin-top: 50px;
        h2 {
            margin-top: 20px;
        }
        h3 {
            font-size: 16px;
        }
    }
`;

function DetailsNam({setCount, count}) {
    const [data, setData] = useState([]);
    let params = useParams();
    const {type, id_sanpham} = params;
    const [display, setDisplay] = useState(0);
    const [relate, setRelate] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleChangeOptions = (state) => {
        if (state === 2) {
            setDisplay(2);
        }else {
            setDisplay(state);
        }
    }
    useEffect(() =>{
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        switch (type) {
            case "newpolo":
                var details = newpolo.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(newpolo.filter((value) => value.id !== parseInt(id_sanpham)));
                break;
            case "polo":
                var details = polo.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(polo.filter((value) => value.id !== parseInt(id_sanpham)));
                break;
            case "somi":
                var details = somi.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(somi.filter((value) => value.id !== parseInt(id_sanpham)));
                break;
            case "thun":
                var details = thun.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(thun.filter((value) => value.id !== parseInt(id_sanpham)));
                break;
            case "jeans":
                var details = jeans.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(jeans.filter((value) => value.id !== parseInt(id_sanpham)));
                break;
            case "long_trousers":
                var details = long_trousers.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(long_trousers.filter((value) => value.id !== parseInt(id_sanpham)));
                break;
            case "short":
                var details = short.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(short.filter((value) => value.id !== parseInt(id_sanpham)));
                break;
            case "suit":
                var details = suit.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(suit.filter((value) => value.id !== parseInt(id_sanpham)));
                break;
            case "shoes":
                var details = shoes.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(shoes.filter((value) => value.id !== parseInt(id_sanpham)));
                break;
            case "accessory":
                var details = accessory.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(accessory.filter((value) => value.id !== parseInt(id_sanpham)));
                break;
            default:
                var details = news2.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(news2.filter((value) => value.id !== parseInt(id_sanpham)));
        }
    }, [params]);
    useEffect(() => {
        window.scroll(0,0);
    })
    return (
            <>
            {loading ? 
            (<Loading/>) : 
            (
            <>
            <Wrap>
                <Left>
                    {data &&
                    data.map((value)=>{
                        return (
                            <Card key = {value}>
                                <img src={`/image/woman/top_collections/${value.image}`} alt=""/>
                                <h2>{value.name}</h2>
                                <h3>{value.price}<sup>đ</sup></h3>
                            </Card>
                        )
                    })}
                </Left>
                <Right>
                <div className="nav_title">
                        <button onClick = {() => {handleChangeOptions(0)}} className={display === 0 ? "active1" : ""}>Chi tiết</button>
                        <button onClick = {() => {handleChangeOptions(1)}} className={display === 1 ? "active1" : ""}>Bảo quản</button>
                        {/* nếu mà để active1 vô luôn mà không bấm nút thì nó mặc định cái nút khi không bấm là có className đó luôn, 
                        lúc này mỗi lần bấm nút thì nó setDisplay lại là mới = 1!!! */}
                        <button onClick = {() => {handleChangeOptions(2)}} className={display === 2 ? "active1" : ""}>Tham khảo sai</button>
                    </div>
                    <div className="nav_content">
                            {display === 0 ? (<Info data={data} setCountCart={setCount} countCart={count}/>) : display === 1 ? (<Protection/>) : <SizeReferenceGeneral setDisplay={setDisplay}/> }
                    </div>
                </Right>
            </Wrap>
            <Title>SẢN PHẨM TƯƠNG TỰ</Title>
            <Below>
                {relate && 
                relate.map((value, index) => {
                    if(0 < index && index < 5){
                        return (
                            <Card1 key={index}>
                                 <Link to ={`/chi-tiet-hang-nam/${type}/${value.id}`}><img src={`/image/woman/top_collections/${value.image}`} alt=""/></Link>
                                 <Link to ={`/chi-tiet-hang-nam/${type}/${value.id}`}><h2>{value.name}</h2></Link>
                                <h3>{value.price}<sup>đ</sup></h3>
                            </Card1>
                        )
                    }
                })}
            </Below>
            </>)}
            </>
    );
}

export default DetailsNam;