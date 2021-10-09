import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import {male, female, children} from "../data/saleoff";
import Info from "../components/DetailsSaleOff/Info"
import TableSize from "../components/DetailsSaleOff/TableSize";
import Protection from "../components/DetailsSaleOff/Protection";

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
        img {
            width: 50%;
        }
        h2 {
            text-transform: uppercase;
        }
`;

function DetailsSaleOff({count, setCount}) {
    const [display, setDisplay] = useState(0);
    const [data, setData] = useState([]);
    let params = useParams();
    const {gender, id_sanpham} = params;
    const handleChangeOptions = (state) => {
        setDisplay(state);
    }
    useEffect(() => {
        switch(gender) {
            case "nam":
                var details = male.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                break;
            case "tre-em":
                var details = children.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
                break;
            default:
                var details = female.filter((value) => value.id === parseInt(id_sanpham));
                setData(details);
        }
    }, [params]);
    return (
       <Wrap>
           <Left>
               {data &&
               data.map((value) =>{
                   return(
                       <Card key={value}>
                           <img src={`/image/woman/top_collections/${value.image}`}/>
                           <h2>{value.name}</h2>
                           <h3>{value.price}<sup>đ</sup></h3>
                       </Card>
                   )
               })}
           </Left>
           <Right>
               <div className="nav_title">
                    <button onClick={() => {handleChangeOptions(0)}} className={display === 0 ? "active1" : ""}>Chi tiết</button>
                    <button onClick={() => {handleChangeOptions(1)}} className={display === 1 ? "active1" : ""}>Bảo quản</button>
                    <button onClick={() => {handleChangeOptions(2)}}>Tham khảo size</button>
               </div>
               <div className="nav_content">
                    {display === 0 ? (<Info setCountCart={setCount} countCart={count} data={data}/>) : display === 1 ? (<Protection/>) : (<TableSize setDisplay={setDisplay}/>)}
               </div>
           </Right>
       </Wrap>
    );
}

export default DetailsSaleOff;