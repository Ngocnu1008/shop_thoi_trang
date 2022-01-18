import React, { useState } from 'react';
import styled from 'styled-components';
import {Redirect} from "react-router-dom";
import Swal from "sweetalert2";
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
const sizeDefault = [
    "s" , "m", "l", "xl", "xxl"
]
function Info({data, setCountCart, countCart}) {
    const [size, setSize] = useState("");
    const [count, setCount] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const handleChangeSize = (state) => {
        setSize(state);
    }
    const handleChangeCount = (state) => {
        if (state === "+") {
            setCount (count + 1);
        }else {
            if (count <= 1) {
                setCount(1);
            } else {
                setCount (count -1);
            }
        }
    } 
    const handleAddToCard = () => {
        if (size === "") {
            return (alert ("Vui lòng chọn size sản phẩm"));
        }
        let sanpham = JSON.parse(localStorage.getItem("sanpham"));//sanpham lúc này là một object 
            let info_product = {//data[0]vì khi ktra lần đầu user chưa mua sp nào thì push info_product vào mảng sanpham, lúc này mảng có phần tử thứ 0
                id: data[0].id,
                name: data[0].name,
                image: data[0].image,
                price: data[0].price,
                count: count,
                size: size,
            };
        //mục đích của chỗ này là khi thêm số lượng mà cùng size cùng mẫu thì chỉ cập nhật lại mảng [info_product], còn khi
        //mẫu và size khác thì push cái info_product mới đó vô. (sanpham.push(info_product));
        if (sanpham){
            let check = sanpham.filter(
                (value) => value.id === info_product.id && value.size === info_product.size);
                 //hàm filter check này để ktra trong 1 dãy các phần tử trong object sanpham xem có phần tử nào trùng với cái infor_product không
                //nếu check.length > 0 tức là có từ 1 trở lên (có thể có nhiều phần tử trong sanpham trùng), sau đó mới dùng vòng lặp for để
                //lấy ra phần tử trùng đó và thêm count vào.
                if (check.length > 0){
                    for (let i = 0; i < sanpham.length; i++){
                        if (info_product.id === sanpham[i].id && info_product.size === sanpham[i].size){
                            sanpham[i].count = count + sanpham[i].count;
                        }
                    }
                }else {
                sanpham.push(info_product);
            }
            localStorage.setItem("sanpham", JSON.stringify(sanpham));
        }else{
            localStorage.setItem("sanpham", JSON.stringify([info_product]));
        }
        Swal.fire({
            title: "Thêm vào giỏ hàng", 
            text: "Thành công",
            icon: "success",
            confirmButton: "Đồng ý",
        })
        .then ((result)=>{
            if (result.isConfirmed){
                setRedirect(true);
                setTimeout(()=>{
                    setCountCart(countCart + 1);
                }, 300);
            }
        })
        .catch((error)=>{
            console.error(error);
        });
    };
    return (
       <Wrap>
           {redirect && <Redirect to ="/"/>}
           <p>Đầm suông cổ tim, tay liền. 2 túi chéo. 
            Dáng suông dài qua gối. Eo có đỉa và đai rời cùng màu đi kèm.
            Xẻ gấu 2 bên tùng. Vải lụa bóng 1 lớp.</p>
            <p>Bạn hoàn toàn không cần phải e ngại vì những nhược điểm cơ thể sẽ không thể phô bày nhờ dáng đầm suông với độ rộng vừa phải, thoải mái. Bên cạnh đó, điểm nhấn ở phần tay áo cách điệu mang đến nét độc đáo, cuốn hút hơn.</p>
            <p><strong>Màu sắc</strong>: Gold - Đỏ Thẫm</p>

            <p><strong>Size {size.toUpperCase()}:</strong></p>
                
            <Options>
                <div className="size">
                    {sizeDefault.map ((value, index) => {
                        return (
                            <button onClick = {() => handleChangeSize(value)}
                            className={size === value ? "active2" : ""} key={index}>
                            {value.toUpperCase()}
                            </button>
                        )
                    })}
                </div>
                <div className="count">
                    <button onClick ={() => handleChangeCount("-") } disabled = {count === 1 ? true : false}>-</button>
                    <strong>{count}</strong>
                    <button onClick ={() => handleChangeCount ("+")} disabled = {count === 10 ? true : false}>+</button>
                </div>
                <div className="buy">
                    <button>MUA</button>
                    <button onClick={handleAddToCard}>THÊM SẢN PHẨM</button>
                </div>
            </Options>
       </Wrap>
    );
}
export default Info;