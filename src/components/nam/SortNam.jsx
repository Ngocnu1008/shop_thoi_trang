import React from 'react';
import styled from 'styled-components';

const Sort = styled.div`
    z-index: 10 !important;
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
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
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