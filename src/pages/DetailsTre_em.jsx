import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import {shirt, dream, phu_kien, skirt, trousers, news3, boy_phu_kien, boy_shirt, boy_trousers} from "../data/do_tre_em";
import Info from "../components/detailsTre_em/Info";
import Protect from "../components/detailsTre_em/Protect"
import Sizetable from '../components/detailsTre_em/Sizetable';
import Loading from '../components/Loading';

const Wrap = styled.div`
    padding-top: 50px;
    width: 70%;
    display: flex;
    margin: auto;`;
const Left = styled.div`
    width: 50%;
    text-align: center;
`;
const Right = styled.div`
    width: 50%;
    .nav_title {
        border-bottom: 1px solid gray;
        margin-bottom: 10px;
        width: 56%;
        button {
            border: none;
            background: none;
            cursor: pointer;
            padding: 5px 10px;
            font-size: 16px;
        }
    }
`;
const Card = styled.div`
    width: 100%;
    // margin: 0 0.5%;
    img {
        width: 50%;
    }
    h2 {
        text-transform: uppercase;
    }`
;
const Relate = styled.div`
    padding-top: 20px;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    flex-wrap: wrap;
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
`;
const Title = styled.p`
    width: 80%;
    margin-top: 70px !important;
    margin: auto;
    text-transform: uppercase;
    font-weight: bold;
`;
function DetailsTre_em({setCount, count}) {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [relate, setRelate] = useState([]);
    const [display, setDisplay] = useState(0);
    const [openSize, setOpenSize] = useState(false);
    let params = useParams();
    const {type, id_sanpham} = params;
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        }, 1000);
        window.scroll(0,0);
        switch (type) {
            case "shirt":
                var details = shirt.filter((value) => value.id === parseInt(id_sanpham));
                setdata(details);
                setRelate(shirt);
                break;
            case "dream":
                var details = dream.filter((value) => value.id === parseInt(id_sanpham));
                setdata(details);
                setRelate(dream)
                break;
            case "phu_kien":
                var details = phu_kien.filter((value) => value.id === parseInt(id_sanpham));
                setdata(details);
                setRelate(phu_kien);
                break;
            case "skirt":
                var details = skirt.filter((value) => value.id === parseInt(id_sanpham));
                setdata(details);
                setRelate(skirt);
                break;
            case "trousers":
                var details = trousers.filter((value) => value.id === parseInt(id_sanpham));
                setdata(details);
                setRelate(trousers);
                break;
            case "boy_phu_kien":
                var details = boy_phu_kien.filter((value) => value.id === parseInt(id_sanpham));
                setdata(details);
                setRelate(boy_phu_kien);
                break;
            case "boy_shirt":
                var details = boy_shirt.filter((value) => value.id === parseInt(id_sanpham));
                setdata(details);
                setRelate(boy_shirt);
                break;
            case "boy_trousers":
                var details = boy_trousers.filter((value) => value.id === parseInt(id_sanpham));
                setdata(details);
                setRelate(boy_trousers);
                break;
            default:
                var details = news3.filter((value) => value.id === parseInt(id_sanpham));
                setdata(details);
                setRelate(news3);
        }
    },[params]) 
    const handleChangeOptions = (state) =>{
        if(state === 2){
            setOpenSize(true);
        }else{
            setDisplay(state);
        } 
    }
    return (
        <>
        {loading ? (<Loading/>) : 
        (
        <>
            <Wrap>
                <Left>
                    {data && data.map((value) => {
                        return (
                            <Card key={value}>
                                <img src={`/image/woman/top_collections/${value.image}`}/>
                                <h2>{value.name}</h2>
                                <h3>{value.price}đ</h3>
                            </Card>
                        )
                    })}
                </Left>
                <Right>
                    <div className="nav_title">
                        <button onClick={() => handleChangeOptions(0)} className={display === 0 ? "active1" : ""}>Chi tiết</button>
                        <button onClick={() => handleChangeOptions(1)} className={display === 1 ? "active1" : ""}>Bảo quản</button>
                        <button onClick={() => handleChangeOptions(2)} className={display === 2 ? "active1" : ""}>Tham khảo size</button>
                    </div>
                    <div className="nav_content">
                        {display === 0 ? (<Info data={data} setCountCart={setCount} countCart={count}/>) : display === 1 ? <Protect/> : ""}
                    </div>
                </Right>
                {openSize && <Sizetable setOpenSize={setOpenSize}/>}
            </Wrap>
            <Title>Sản phẩm tương tự</Title>
            <Relate>
                {relate && 
                relate.map((value, index) => {
                    if (index < 4){
                        return (
                            <Card1 key={index}>
                                <img src={`/image/woman/top_collections/${value.image}`}/>
                                <h2>{value.name}</h2>
                                <h3>{value.price}đ</h3>
                            </Card1>
                        )
                    }
                })}
            </Relate>
            </>)}
       </>
    );
}

export default DetailsTre_em;