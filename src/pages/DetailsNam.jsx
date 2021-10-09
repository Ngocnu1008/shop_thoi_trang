import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import {newpolo, somi, polo, thun, news2} from "../data/do_nam";
import Info from '../components/detailsNam/Infor';
import Protection from '../components/detailsNam/protection';
import Sizereference from '../components/detailsNam/Sizereference';
import Loading from '../components/Loading';
const Wrap = styled.div`
    padding-top: 20px;
    width: 70%;
    display: flex;
    margin: auto;
`;
const Left = styled.div`
    width: 50%;
    text-align: center;
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
`;
const Title = styled.p`
    width: 80%;
    margin-top: 70px !important;
    margin: auto;
    text-transform: uppercase;
    font-weight: bold;    
`;
const Below = styled.div`
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

function DetailsNam({setCount, count}) {
    const [data, setData] = useState([]);
    let params = useParams();
    const {type, id_sanpham} = params;
    const [display, setDisplay] = useState(0);
    const [relate, setRelate] = useState([]);
    const [openSize, setOpenSize] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleChangeOptions = (state) => {
        if (state === 2) {
            setOpenSize(true);
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
                setRelate(newpolo);
                break;
            case "polo":
                var details = polo.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(polo);
                break;
            case "somi":
                var details = somi.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(somi);
                break;
            case "thun":
                var details = thun.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(thun);
                break;
            default:
                var details = news2.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(news2);
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
                                <h3>{value.price}</h3>
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
                            {display === 0 ? (<Info data={data} setCountCart={setCount} countCart={count}/>) : display === 1 ? (<Protection/>) : "" }
                    </div>
                </Right>
                {openSize && <Sizereference setOpenSize={setOpenSize}/> }
            </Wrap>
            <Title>SẢN PHẨM TƯƠNG TỰ</Title>
            <Below>
                {relate && 
                relate.map((value, index) => {
                    if(index < 4){
                        return (
                            <Card1 key={value}>
                                <img src={`/image/woman/top_collections/${value.image}`} alt=""/>
                                <h2>{value.name}</h2>
                                <h3>{value.price}</h3>
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