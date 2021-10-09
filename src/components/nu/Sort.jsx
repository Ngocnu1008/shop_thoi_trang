import React from 'react';
import styled from 'styled-components';

const Sort = styled.div``;
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
                temp.push(sort[i]);
            }
            setFilter(temp);
        }
    }
    return (
        <Sort>
            <button onClick={() => {handleSort("decrement")}}>Giá: cao xuống thấp</button>
            <button onClick={() => {handleSort("increment")}}>Giá: thấp đến cao</button>
        </Sort>
    );
}

export default SortComponent;