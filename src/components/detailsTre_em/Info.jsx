import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router';
const Wrap = styled.div`
    p {
        margin-top: 15px;
        font-size: 14px;
    }
`;
const Option = styled.div`
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
`;

let sizeDefault = ["4-5", "6-7", "8-9", "10-11", "12-13"];
function Info({data, setCountCart, countCart}) {
    const [size, setSize] = useState("");
    const [count, setCount] = useState(1);
    const [direct, setRedirect] = useState(false);
    const handleChangeCount = (state) => {
        if (state === "+"){
            setCount(count + 1);
        }else {
            if(count <= 1){
                setCount(count);
            }else{
                setCount(count - 1);
            }
        }
    }
    const handleChangeSize = (state) => {
        setSize(state)
    }
    const handleAddToCard = () => {
        if(size===""){
            return alert("Vui lòng chọn size của sản phẩm!");
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
                let check = sanpham.filter((value) => value.id === info_product.id && value.size === info_product.size)
                if (check.length > 0){
                    for(let i = 0; i < sanpham.length; i++){
                        if(info_product.size === sanpham[i].size && info_product.id === sanpham[i].id){
                            sanpham[i].count += count;
                        }
                    }
                }

                else{
                    sanpham.push(info_product);
                }
                localStorage.setItem("sanpham", JSON.stringify(sanpham));
            }else{
                localStorage.setItem("sanpham", JSON.stringify([info_product]));
            }
        Swal.fire({
            title: "Thêm vào giỏ hàng",
            text: "thành công",
            icon: "success",
            confirmButton: "yes",
        }).then((result) => {
            if(result.isConfirmed){
                setRedirect(true);
                setCountCart(count + 1);
            }
        }).catch((error)=>{
            console.error(error);
        });
    }
    return (
        <Wrap>
            {direct && <Redirect to="/"/>}
            <p>Đầm suông cổ tim, tay liền. 2 túi chéo. 
            Dáng suông dài qua gối. Eo có đỉa và đai rời cùng màu đi kèm.
            Xẻ gấu 2 bên tùng. Vải lụa bóng 1 lớp.</p>
            <p>Bạn hoàn toàn không cần phải e ngại vì những nhược điểm cơ thể sẽ không thể phô bày nhờ dáng đầm suông với độ rộng vừa phải, thoải mái. Bên cạnh đó, điểm nhấn ở phần tay áo cách điệu mang đến nét độc đáo, cuốn hút hơn.</p>
            <p><strong>Màu sắc</strong>: Gold - Đỏ Thẫm</p>

            <p><strong>Size {size}:</strong></p>
            <Option>
                {sizeDefault&& 
                sizeDefault.map((value, index) => {
                    return (
                        <button onClick={() => {handleChangeSize(value)}} 
                        className={size === value ? "active2" : ""} 
                        key={index}>{value}</button>
                    )
                })};
                <div className="count">
                    <button onClick={() => {handleChangeCount("-")}} disabled = {count === 1 ? true : false}> - </button>
                    {count}
                    <button onClick={() => {handleChangeCount("+")}} disabled = {count === 10 ? true : false}> + </button>
                </div>
                <div className="buy">
                    <button>BUY</button>
                    <button onClick={handleAddToCard}>ADD TO CART</button>
                </div>
            </Option>
        </Wrap>
    );
}

export default Info;