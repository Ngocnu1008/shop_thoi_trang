import React from 'react';
import styled from 'styled-components';

const Sort = styled.div`
    border: 1px solid gray;
    width: 149px;
    margin-left: 462px;
    padding: 0px 10px;
    button{
        font-size: 13px;
        padding: 5px 5px;
        background: none;
        border: none;
        &:hover{
            color: red;
        }
        transition: smooth;
        }
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
                return parseInt(b.price) - parseInt(a.price);//a, b lúc này được hiểu là một phần tử của data (trong do_nam 1 phần tử gồm price nên lúc này a.price)
            });
            let temp = [];
            for (let i = 0; i < data.length; i++){
                temp.push(sort[i]);//lúc này sau khi dùng sort để sắp xếp từ thấp đến cao nhưng vì mảng data không thay đổi phần tử mà chỉ
                //sắp xếp lại và lưu trong cùng 1 bộ nhớ nên mới đặt biến temp để lưu nó vào bộ nhớ khác, 
                //sau đó lọc phần tử của sort (đã qua sắp xếp từ data) để push vào temp, lúc này dùng for i < data.length nghĩa số phần tử data có ban đầu.
            }
            setFilter(temp);
        }
    }
    return (
        <Sort>
            <button onClick={() => {handleSort("increment")}}>Giá: thấp đến cao</button>
            <button onClick={() => {handleSort("decrement")}}>Giá: cao xuống thấp</button>
        </Sort>
    );
}

export default SortComponent;