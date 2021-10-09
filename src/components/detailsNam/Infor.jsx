import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';

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
    .buy button {
        padding: 7px 10px;
        background: orange;
`;
const Wrap = styled.div`
    p {
        margin-top: 15px;
        font-size: 14px;
    }
`;
const SizeOptions = ["s", "m", "l", "xl", "xxl"];
function Info({data, setCountCart, countCart}) {
    const [size, setSize] = useState("");
    const [count, setCount] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const handleCount = (state) => {
        if (state === "+"){
            setCount(count + 1);
        }else {
            if (count <=1) {
                setCount(1);
            }else {
                setCount(count - 1);
            }
        }
    }
    const handleChangeSize = (state) => {
        setSize(state);
    }
    const handleAddtocard = () => {
        if (size === ""){
            return (alert("Please choose the size"));
        }
        let sanpham = JSON.parse(localStorage.getItem("sanpham"));
            let info_product = {
                id : data[0].id,
                name: data[0].name,
                image : data[0].image,
                price : data[0].price, 
                size : size,
                count : count, 
            }
    
           if (sanpham){
               let check = sanpham.filter((value) => value.id === info_product.id && value.size === info_product.size)
               if (check.length > 0){
                    for(let i = 0; i < sanpham.length; i++){
                        if (info_product.id === sanpham[i].id && info_product.size === sanpham[i].size){
                            sanpham[i].count = sanpham[i].count + count;
                        }
                    }
               }
               else{
                sanpham.push(info_product);
            }
               localStorage.setItem("sanpham", JSON.stringify(sanpham));
           }
           else{
               localStorage.setItem("sanpham", JSON.stringify([info_product]));
           }
            Swal.fire({
                title: "Add to cart?",
                text: "successfullu", 
                icon: "success", 
                confirmbutton: "yes",
            })
            .then ((result) => {
                if (result.isConfirmed){
                    setRedirect(true);
                    setTimeout(()=>{
                        setCountCart(countCart + 1);
                    }, 300)
                }
            })
            .catch((error)=>{
                console.error(error);
            });
    }
    return (
        <>
        <Wrap>
            {redirect&& <Redirect to ="/"/>}
            <p>Đầm suông cổ tim, tay liền. 2 túi chéo. 
            Dáng suông dài qua gối. Eo có đỉa và đai rời cùng màu đi kèm.
            Xẻ gấu 2 bên tùng. Vải lụa bóng 1 lớp.</p>
            <p>Bạn hoàn toàn không cần phải e ngại vì những nhược điểm cơ thể sẽ không thể phô bày nhờ dáng đầm suông với độ rộng vừa phải, thoải mái. Bên cạnh đó, điểm nhấn ở phần tay áo cách điệu mang đến nét độc đáo, cuốn hút hơn.</p>
            <p><strong>Màu sắc</strong>: Gold - Đỏ Thẫm</p>
            <p><strong>Size {size.toUpperCase()}:</strong></p>
        </Wrap>
        <Options>
            <div className="size">
                {SizeOptions.map((value, index)=> {
                    return (
                        <button onClick = {() => handleChangeSize(value)} className={size=== value ? "active2" : ""}key={index}>
                        {value.toUpperCase()}</button>
                    )
                })}
            </div>
            <div className="count">
                <button onClick = {() => handleCount("-")} disabled ={count === 1 ? true : false}>-</button>
                <strong>{count}</strong>
                <button onClick={() => handleCount("+")} disabled ={count === 10 ? true : false}>+</button>
            </div>
            <div className="buy">
                <button>BUY</button>
                <button onClick={handleAddtocard}>ADD TO CART</button>
            </div>
            
        </Options>
        </>
        
    );

}

export default Info;