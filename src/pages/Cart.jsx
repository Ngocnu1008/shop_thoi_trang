import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Empty from '../components/cart/Empty';

const BigWrap = styled.div`
    display: flex;
`;
const Wrap = styled.div`
    width: 60%;
    margin-left: 10%;
    margin-top: 5%;

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
    margin-top: 5.8%;
    h3{
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 10px;
    }
    p{
        margin-bottom: 10px;
    }
`;

function Cart(props) {
    const [product, setProduct] = useState([]);
    const [sum_quantity, setSumQuantity] = useState(0);
    const [sum_price, setSumPrice] = useState(0);
    useEffect(()=>{
        window.scroll(0, 0);
        let data = JSON.parse(localStorage.getItem("sanpham"));
        let sumQuantity = 0;
        let sumPrice = 0;
        if (data){for (let i = 0; i < data.length; i++){
            sumQuantity += data[i].count;
            let temp = parseInt(data[i].count) * parseInt(data[i].price);
            sumPrice += temp;
        }
        setSumQuantity(sumQuantity);
        setSumPrice(sumPrice);
    }
        setProduct(data)
    },[]);
    return (
        <>
        {product && product.length > 0 ? 
        (
        <BigWrap>
            <Wrap>
                <thead>
                    <tr>
                        <td style={{"width":"200px", "height": "50px"}}>SẢN PHẨM</td>
                        <td style={{"width": "200px"}}>TÊN SẢN PHẨM</td>
                        <td style={{"width": "100px"}}>SIZE</td>
                        <td style={{"width": "150px"}}>SỐ LƯỢNG</td>
                        <td style={{"width": "100px"}}>THÀNH TIỀN</td>
                    </tr>
                </thead>
                <tbody>
                    {product.map((value, index) =>{
                        return (
                            <Card key={index}>
                                <td><img src={`/image/woman/top_collections/${value.image}`} alt=""/></td>
                                <td>{value.name}</td>
                                <td><p>{value.size}</p></td>
                                <td>{value.count}</td>
                                <td>{value.price}đ</td>
                            </Card>
                        )
                    })}
                </tbody>
                </Wrap>
                <Right>
                    <h3>Tổng tiền giỏ hàng</h3>
                    <p>Tổng số lượng: {sum_quantity} sản phẩm</p>
                    <p>Thành tiền: {sum_price}đ</p>
                </Right>
        </BigWrap>

        ) : (
            <Empty/>
        )} 
        </>
    );
}

export default Cart;