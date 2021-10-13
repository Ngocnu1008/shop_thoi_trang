import React from 'react';
import styled from 'styled-components';

const Sort = styled.div`
    border: 1px solid gray;
    width: 150px;
    margin-left: 478px;
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
function SortNam({data, setFilter}) {
    const handleSort = (state) => {
        if(state === "increment"){
            let sort = data.sort((a, b) =>{
                return parseInt(a.price) - parseInt(b.price);
            })
            let temp = [];
            for (let i = 0; i< data.length; i++){
                temp.push(sort[i]);
            }
            setFilter(temp);
        }else{
            let sort = data.sort((a, b) =>{
                return parseInt(b.price) - parseInt(a.price);
            })
            let temp = [];
            for (let i = 0; i <data.length; i++){
                temp.push(sort[i]);
            }
            setFilter(temp);
        }
    }
    return (
        <Sort>
            <button onClick={() => handleSort("increment")}>Giá: thấp lên cao</button>
            <button onClick={() => {handleSort("decrement")}}>Giá: cao xuống thấp</button>
        </Sort>
    );
}

export default SortNam;