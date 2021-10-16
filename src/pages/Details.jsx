import  React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import {news1, shirt, croptop, somi, vest, short, trousers, jeans, dam, dam_thun, dam_mexi} from "../data/do_nu";
import Info from '../components/details/Info';
import Protect from '../components/details/Protect';
import ModalSize from '../components/details/ModalSize';
import Loading from '../components/Loading';
const Wrap = styled.div`
    padding-top: 50px;
    width: 70%;
    display: flex;
    margin: auto;
    @media screen and (max-width: 811px) {
        padding-top: 100px;
        display: block;
        width: 100%;
        margin: auto;
    }
`;
const Card = styled.div`
    width: 100%;
    img {
        width: 50%;
    }
    h2 {
        text-transform: uppercase;
    }
    @media screen and (max-width: 811px) {
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
    @media screen and (max-width: 1023px) {
        h2 {
            margin-top: 10%;
            font-size: 20px;
        }
    }
`;
const Left = styled.div`
    width: 50%;
    text-align: center;
    @media screen and (max-width: 811px) {
        width: 80%;
        margin: auto;
    }
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
    @media screen and (max-width: 1023px) {
        margin-top: 10% !important;
    } 
`;
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
    @media screen and (max-width: 811px) {
        width: 100%;
        margin: auto;
        margin-top: 30px;
        h2 {
            margin-top: 20px;
        }
        h3 {
            font-size: 16px;
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
        width: 80%;
    }
    @media screen and (max-width: 1023px)  {
        width: 90%;
    }  
`;
function Details({setCount, count}) {
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(0);
    let params = useParams();//params lúc này lấy ra được từ link to sau đó phải khớp với định nghĩa bên path sau dấu hai chấm (trường hợp này là type và id_sanpham, )
    console.log(params);
    const {type, id_sanpham} = params;//params lúc này lấy ra là 1 cái type và id bất kỳ trong số 40 chục cái sản phẩm nên muốn lọc ra sp nào trùng
    //với id và type thì phải dùng filter để lọc.
    const [openModal, SetOpenModal]= useState(true);
    const [relate, setRelate] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect (() => {
        setTimeout(() =>{
            setLoading(false)
        }, 1000);
        switch (type){
            case "shirt":
                var details = shirt.filter((value) => value.id === parseInt(id_sanpham)); 
                setData(details);
                setRelate(shirt);
                break;
            case "croptop":
                var details = croptop.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(croptop)
                break;
            case "somi":
                var details = somi.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(somi)
                break;
            case "vest":
                var details = vest.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(vest)
                break;
            case "jeans":
                var details = jeans.filter((value) => value.id === parseInt(id_sanpham)); 
                setData(details);
                setRelate(jeans);
                break;
            case "short":
                var details = short.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(short)
                break;
            case "trousers":
                var details = trousers.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(trousers)
                break;
            case "dam":
                var details = dam.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(dam)
                break;
            case "dam_thun":
                var details = dam_thun.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(dam_thun)
                break;
            case "dam_mexi":
                var details = dam_mexi.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(dam_mexi);
                break;
            default:
                var details = news1.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(news1)

        }
    }, [params])
    const handleChangeOptions = (state) => {
            setDisplay(state);  
    }
    useEffect (()=> {
        window.scroll(0,0);
    })
    return (
        <>
        {loading 
        ? (<Loading/>) 
        : 
        (

        <>
        <Wrap>
           <Left>
            {data && data.map ((value) => {
                    return (
                        <Card key ={value}>
                            <img src={`/image/woman/top_collections/${value.image}`}/>
                            <h2>{value.name}</h2>
                            <h3>{value.price}<sup>đ</sup></h3>
                        </Card>
                    )
                })}
           </Left>
           <Right>
               <div className="nav_title">
                   <button onClick ={() => handleChangeOptions(0)} className = {display === 0 ? "active1" : ""}>Chi tiết</button>
                   <button onClick ={() => handleChangeOptions(1)} className = {display === 1 ? "active1" : ""}>Bảo quản</button>
                   <button onClick ={() => handleChangeOptions(2)}>Tham khảo size</button>
               </div>
               <div className="nav_content">
                   {
                       display === 0 ? (<Info data = {data} CountCart={count} setCountCart={setCount}/>) : display === 1 ? (<Protect/>) : (<ModalSize setDisplay={setDisplay}/>)//(<ModalSize/>)
                   }
               </div>
           </Right>
           {/* {openModal && <ModalSize setOpenModal={SetOpenModal}/>} */}
        </Wrap>
        <Title>Sản phẩm tương tự</Title>
        <Relate>
                {relate && relate.map ((value, index) => {
                    if (index < 4) {
                        return (
                            <Card1 key={value}>
                                <img src={`/image/woman/top_collections/${value.image}`}/>
                                <h2>{value.name}</h2>
                                <h3>{value.price}<sup>đ</sup></h3>
                            </Card1>
                    )}
                })}
        </Relate>)
        </>)}
        </>
    );
}

export default Details;