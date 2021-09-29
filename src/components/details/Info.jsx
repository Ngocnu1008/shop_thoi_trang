import React, { useState } from 'react';
import styled from 'styled-components';
import {Redirect} from "react-router-dom";
const Wrap = styled.div`
    p {
        margin-top: 15px;
        font-size: 14px;
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
`;
const sizeDefault = [
    "s" , "m", "l", "xl", "xxl"
]
function Info({data}) {
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
            alert ("please choose the size");
        }
        let confirm = window.confirm("Ban co muon mua mon nay?");
        if(confirm){
            let info_product = {
                id: data.id,
                image: data.image,
                price: data.price,
                count: count,
                size: size,
            }
            localStorage.setItem("sanpham", info_product);
            setRedirect(true);
        }else {
            return;
        }
    }
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
                        <button>BUY</button>
                        <button onClick={handleAddToCard}>ADD TO CARD</button>
                    </div>
                    
                </Options>
       </Wrap>
    );
}
export default Info;