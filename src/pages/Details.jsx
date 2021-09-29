import  React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import {news, shirt, croptop, somi, vest} from "../data/do_nu";
import Info from '../components/details/Info';
import Protect from '../components/details/Protect';
import ModalSize from '../components/details/ModalSize';
const Wrap = styled.div`
    padding-top: 20px;
    width: 70%;
    display: flex;
    margin: auto;
`;
const Card = styled.div`
    width: 100%;
    // margin: 0 0.5%;
    img {
        width: 50%;
    }
    h2 {
        text-transform: uppercase;
    }
`;
const Left = styled.div`
    width: 50%;
    text-align: center;
`;
const Right = styled.div`
    width: 50%;
    .nav_title {
        border-bottom: 1px solid gray;
        margin-bottom: 10px;
        button {
            border: none;
            background: none;
            cursor: pointer;
            padding: 5px 10px;
            font-size: 20px;
        }
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
`;
const Title = styled.p`
    width: 80%;
    margin-top: 70px !important;
    margin: auto;
    text-transform: uppercase;
    font-weight: bold;    
`;
function Details(props) {
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(0);
    let params = useParams();//params lúc này lấy ra được từ link to sau đó phải khớp với định nghĩa bên path sau dấu hai chấm (trường hợp này là type và id_sanpham, )
    console.log(params);
    const {type, id_sanpham} = params;//params lúc này lấy ra là 1 cái type và id bất kỳ trong số 40 chục cái sản phẩm nên muốn lọc ra sp nào trùng
    //với id và type thì phải dùng filter để lọc.
    const [openModal, SetOpenModal]= useState(false);
    const [relate, setRelate] = useState([]);
    useEffect (() => {
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
            default:
                var details = news.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                setRelate(news)

        }
    }, [params])
    const handleChangeOptions = (state) => {
        if (state === 2) {
            SetOpenModal(true);
        }else{
            setDisplay(state);
        }
    }
    return (
        <>
        <Wrap>
           <Left>
            {data && data.map ((value) => {
                    return (
                        <Card key ={value}>
                            <img src={`/image/woman/top_collections/${value.image}`}/>
                            <h2>{value.name}</h2>
                            <h3>{value.price}</h3>
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
                       display === 0 ? (<Info data = {data}/>) : display === 1 ? (<Protect/>) : ("Tham")//(<ModalSize/>)
                   }
               </div>
           </Right>
           {openModal && <ModalSize setOpenModal={SetOpenModal}/>}
        </Wrap>
        <Title>Sản phẩm tương tự</Title>
        <Relate>
                {relate && relate.map ((value) => {
                    return (
                        <Card1 key={value}>
                            <img src={`/image/woman/top_collections/${value.image}`}/>
                            <h2>{value.name}</h2>
                            <h3>{value.price}</h3>
                        </Card1>
                    )
                })}
        </Relate>
        </>
    );
}

export default Details;