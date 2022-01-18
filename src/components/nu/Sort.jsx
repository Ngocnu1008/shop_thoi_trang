import React from 'react';
import styled from 'styled-components';

const Sort = styled.div`
    z-index: 10;
    position: absolute;
    left: 50%;
    top: 100%;
    width: 150px !important;
    border: 1px solid gray;
    padding: 5px 0px !important;
    background-color: white;
    display: block !important;
    button{
        width: 150px !important;
        font-size: 13px;
        padding: 5px 4px;
        background: none;
        border: none;
        &:hover{
            color: red;
        }
        transition: smooth;
        }
    }
    @media screen and (min-device-width: 375px) and (max-device-width: 811px){
        width: 141px !important;
        button {
            width: 135px !important;
            font-size: 12px;
            padding: 3px 1px;
        }
        position: absolute;
        left: 45.6%;
    }
    @media screen and (min-device-width: 768px) and (max-width: 1023px)  {
        left: 50%;
        width: 160px !important;
        text-align: center;
    } 
`;
function SortComponent({setFilter,data}) {
    const handleSort = (state) => {
        if(state === "increment"){
            let sort = data.sort((a, b) =>{
                return parseInt(a.price) - parseInt(b.price);
            });
            let temp = [];
            for (let i = 0; i < data.length; i++){
                temp.push(sort[i]);
            }
            setFilter(temp);
        }else {
            let sort = data.sort((a, b) =>{
                return parseInt(b.price) - parseInt(a.price);//a, b lúc này được hiểu là một phần tử của data (trong do_nam 1 phần tử gồm 
                //price nên lúc này a.price)
            });
            let temp = [];
            for (let i = 0; i < data.length; i++){
                temp.push(sort[i]);//lúc này sau khi dùng sort để sắp xếp các phần tử từ thấp đến cao nhưng vì mảng data không thay đổi phần tử
                // mà chỉ sắp xếp lại và lưu trong cùng 1 bộ nhớ nên mới đặt biến temp để lưu nó vào bộ nhớ khác, 
                //sau đó lọc phần tử của sort (đã qua sắp xếp từ data) để push vào temp (theo thứ tự phần tử giảm dần 
                //đã dùng sort sắp xếp ở trên), lúc này dùng for i < data.length nghĩa số phần tử data có ban đầu.
            }
            setFilter(temp);
        }
    }
    return (
        <Sort>
            <button onClick={() => {handleSort("increment")}}>Giá: thấp đến cao</button>
            <br/>
            <button onClick={() => {handleSort("decrement")}}>Giá: cao xuống thấp</button>
        </Sort>
    );
}

export default SortComponent;