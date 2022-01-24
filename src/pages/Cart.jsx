import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Empty from '../components/cart/Empty';
import { Link } from "react-router-dom";

const BigWrap = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
        display: block;
        width: 95%;
        margin: auto;
        margin-top: 50px;

    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
       margin-top: 20px;
    }
`;

const Wrap = styled.div`
    width: 60%;
    margin-left: 10%;
    margin-top: 5%;
    text-align: center;
    @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
        thead tr td {
            font-size: 8px !important;
            :nth-chid(2) {
                width: 300px;
            }
        }
        width: 90% !important;
        margin: auto;
        tbody td {
            font-size: 8px !important;
        }
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        width: 70%;
        margin-left: 3%;
        thead tr td {
            font-size: 12px !important;
        }
        tbody td {
            font-size: 12px !important;
        }
    }

`;
const Card = styled.tr`
    p{
        text-transform: uppercase;
    }
    img{
        width: 70%;
    }
`;
const Right = styled.div`
    width: 25%;
    margin-top: 5%;
    font-size: 14px;

    h3{
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 30px;
        text-align: center;
    }
    .total {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: auto;
        p {
            margin-top: 10px;
        }
    }
    .freeship {
        text-align: center;
        margin: 30px 0px 50px 0px;    
    }
    .button {
        text-align: center;
        button {
            color: white;
            font-size: 12px;
            font-weight: 700;
            padding: 10px 10px;
            background: black;
            :first-child {
                color: black;
                background: white;
                margin-right: 20px;
            }
            cursor: pointer;
            :hover {
                color: red;
            }
        }
    }
    @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
        width: 35%;
        text-align: center;
        margin: auto;
        margin-top: 30px !important;
        font-size: 8px;
        h3 {
            font-weight: 700;
        }
        p {
        }
        .freeship {
            margin-bottom: 10px;
        }
        .button {
            button {
                padding: 3px 3px;
                font-size: 6px;
            }
        }
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        width: 20%;
        margin-top: 5.8%;
        font-size: 10px;
        .freeship {
            margin-bottom: 10px;
        }
        .button {
            button {
                padding: 3px 3px;
                font-size: 6px;
            }
        }
    }
    
`;

function Cart({setCount}) {
    const [product, setProduct] = useState([]);
    const [sum_quantity, setSumQuantity] = useState(0);
    const [sum_price, setSumPrice] = useState(0);
    useEffect(()=>{
        window.scroll(0, 0);
        let data = JSON.parse(localStorage.getItem("sanpham"));
        let sumQuantity = 0;
        let sumPrice = 0;
        if (data){for (let i = 0; i < data.length; i++){
            sumQuantity += data[i].count;//lấy từ localStorage 1 mảng json gồm có phần tử count, price nên lúc này data[i].count
            let temp = parseInt(data[i].count) * parseInt(data[i].price);
            sumPrice += temp;
        }
        setSumQuantity(sumQuantity);
        setSumPrice(sumPrice);
    }
        setProduct(data)
    },[]);

    const handleDelete = (id) => {
        var delete_product = product.filter(item => item.id !== id );
        setProduct(delete_product);
        setCount(delete_product.length);
        localStorage.setItem("sanpham", JSON.stringify(delete_product));        
    }
    return (
        <>
        {product && product.length > 0 ? 
        (
        <BigWrap>
            <Wrap>
                <thead>
                    <tr>
                        <td style={{"width":"300px", "height": "30px", "font-size": "14px" , "font-weight": "500"}}>SẢN PHẨM</td>
                        <td style={{"width": "350px", "font-size": "14px", "font-weight": "500"}}>TÊN SẢN PHẨM</td>
                        <td style={{"width": "50px", "font-size": "14px", "font-weight": "500"}}>SIZE</td>
                        <td style={{"width": "100px", "font-size": "14px", "font-weight": "500"}}>SỐ LƯỢNG</td>
                        <td style={{"width": "100px", "font-size": "14px", "font-weight": "500"}}>THÀNH TIỀN</td>
                        <td style={{"width": "100px", "font-size": "14px", "font-weight": "500"}}>XOÁ</td>
                    </tr>
                </thead>
                <tbody>
                    {product.map((value, index) =>{
                        return (
                            <Card key={index}>
                                <td style={{"width":"300px", "height": "30px", "font-size": "14px" }}><img src={`/image/woman/top_collections/${value.image}`} alt=""/></td>
                                <td style={{"width": "200px", "font-size": "14px"}}>{value.name}</td>
                                <td style={{"width": "200px", "font-size": "14px"}}><p>{value.size}</p></td>
                                <td style={{"width": "200px", "font-size": "14px"}}>{value.count}</td>
                                <td style={{"width": "200px", "font-size": "14px"}}>{value.price}đ</td>
                                <td style={{"width": "200px", "font-size": "14px", "cursor": "pointer"}} onClick={() => handleDelete(value.id)}>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </td>
                            </Card>
                        )
                    })}
                </tbody>
                </Wrap>
                <Right>
                    <h3>Tổng tiền giỏ hàng</h3>
                    <div className='total'>
                        <p>Tổng số lượng:</p> 
                        <p>{sum_quantity} sản phẩm</p>
                    </div>
                    <div className='total'>
                        <p>Thành tiền:</p> 
                        <p>{sum_price}đ</p>
                    </div>
                    <div className='total'>
                        <strong><p>TẠM TÍNH:</p></strong>
                        <p>{sum_price}đ</p>
                    </div>
                    <div className='freeship'>
                        <p><i>Bạn sẽ được miễn phí ship khi đơn hàng của bạn có tổng giá trị trên 2.000.000 đ</i></p>
                    </div>
                    <div className='button'>
                        <Link to="/"><button>TIẾP TỤC MUA SẮM</button></Link>
                        <button>THANH TOÁN</button>
                    </div>
                </Right>
        </BigWrap>

        ) : (
            <Empty/>
        )} 
        </>
    );
}

export default Cart;