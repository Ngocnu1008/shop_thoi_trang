import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Swal from "sweetalert2"
import { Redirect } from 'react-router';

const Wrap = styled.div`
    p {
        margin-top: 15px;
        font-size: 14px;
    }
    @media screen and (max-width: 811px) {
        width: 100%;
        margin: auto;
    }
`;
const Options = styled.div`
    button{
        cursor: pointer;
        padding: 5px 10px;
        background: white;
        margin: 10px 10px;
        border: 1px solid gray;
        :active {
            color: white;
            background: black;
        }
    }
    }
    .buy button {
        padding: 7px 10px;
        background: orange;
    }
    @media screen and (max-width: 811px) {
        button:first-child {
            margin-left: 0px;
        }
    }
`;
let SizeDefault = ["s", "m", "l" ,"xl", "xxl"];
function Info({setCountCart, countCart, data}) {
    const [size, setSize] = useState("");
    const [count, setCount] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const handleChangeCount = (state) => {
        if(state ==="-"){
            if(count === 1){
                setCount(1);
            }else{
                setCount(count - 1);
            }
        }else{
            setCount(count + 1);
        }
    }
    const handleChangeSize = (state) =>{
        setSize(state)
    }
    const handleAddToCart = () => {
        if (size === ""){
            return alert("Vui lòng chọn size sản phẩm");
        }
        let sanpham = JSON.parse(localStorage.getItem("sanpham"));
        let info_product = {
            id: data[0].id,
            name: data[0].name,
            image: data[0].image,
            price: data[0].price,
            count: count,
            size: size,
        }
        if(sanpham){
            let check = sanpham.filter((value) => value.id === info_product.id && value.size === info_product.size);
            if(check.length > 0){
                for (let i = 0; i < sanpham.length; i++){
                    if(info_product.id === sanpham[i].id && info_product.size === sanpham[i].size){
                        info_product.count += count;
                    }
                }
            } else{
                sanpham.push(info_product)
            };
            localStorage.setItem("sanpham", JSON.stringify(sanpham));
        }
        else{
            localStorage.setItem("sanpham", JSON.stringify([info_product]));
        }
        Swal.fire({
            title: "Thêm sản phẩm vào giở hàng",
            text: "thành công",
            icon: "success",
            confirmButtonText: "yes",
        }).then((result) =>{
            if(result.isConfirmed){
                setRedirect(true);
                setCountCart(countCart + 1);
            }
        }).catch((error)=>{
            console.error(error);
        })
    }
    return (
        <>
        {redirect&& <Redirect to="/"/>}
        <Wrap>
            <p>Đầm suông cổ tim, tay liền. 2 túi chéo. 
            Dáng suông dài qua gối. Eo có đỉa và đai rời cùng màu đi kèm.
            Xẻ gấu 2 bên tùng. Vải lụa bóng 1 lớp.</p>
            <p>Bạn hoàn toàn không cần phải e ngại vì những nhược điểm cơ thể sẽ không thể phô bày nhờ dáng đầm suông với độ rộng vừa phải, thoải mái. Bên cạnh đó, điểm nhấn ở phần tay áo cách điệu mang đến nét độc đáo, cuốn hút hơn.</p>
            <p><strong>Màu sắc</strong>: Gold - Đỏ Thẫm</p>

            <p><strong>Size {size.toUpperCase()}:</strong></p>
            <Options>
                <div className="size">
                    {SizeDefault&&
                    SizeDefault.map((value, index)=> {
                        return (
                            <button key={index} onClick={() => handleChangeSize(value)} 
                            className={size === value ? "active2" : ""}>
                            {value.toUpperCase()}</button>
                        )
                    })}
                </div>
                <div className="count">
                    <button onClick={() =>{handleChangeCount("-")}}disabled={count === 1 ? true : false}>-</button>
                    {count}
                    <button onClick={()=>{handleChangeCount("+")}}disabled={count === 10 ? true : false}>+</button>
                </div>
                <div className="buy">
                    <button>BUY</button>
                    <button onClick={handleAddToCart}>ADD TO CART</button>
                </div>
            </Options>
        </Wrap>
        </>
    );
}

export default Info;