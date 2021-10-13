import React, { useState } from 'react';
import Swal from "sweetalert2"
import styled from 'styled-components';

const Wrap = styled.div`
    width: 38%;
    margin-top: 30px;
    .size{
        button{
            padding: 3px 7px;
            margin-right: 10px;
            font-size: 12px;
            font-weight: bold;
            background: white;
            border: 1px solid gray;
            cursor: hover;
            &:hover{
               background-color: orange;
               color: white;
            }
        }

    }
    .filter{
        align-items: flex-end;
        display: flex;
        button{
            height: 30px;
            padding: 1px 7px;
            color: white;
            background: black;
            cursor: pointer;
            border-radius: 2px;
            font-size: 14px;
            font-weight: bold;
            &:hover{
                color: orange;
            }
        }
    }
    .price{
        margin-top: 20px;
        input{
            padding: 5px 5px;
            margin-right: 10px;
        }
    }
    border: 1px solid gray;
    padding: 20px 20px;
`;
function Filter({setFilter, data}) {
    const [price, setPrice] = useState({
        max: "", 
        min: "", 
    });
    const handleChangValue = (e) => {
        setPrice({
            ...price, 
            [e.target.name] : e.target.value,  
        });
    };
    const handleFilter = () => {
        if(!parseInt(price.max) || !parseInt(price.min)){
            return Swal.fire({
                title: "Vui lòng chọn giá sản phẩm",
                icon: "warning",
                confirmButtonText: "yes",
            });
        }
        if(parseInt(price.max) <= parseInt(price.min) ||
        price.max < 0 ||
        price.min < 0
        ) {
            return Swal.fire({
                title: "Vui lòng chọn đúng giá sản phẩm",
                icon: "warning",
                confirmButtonText: "yes",
            }).then(() =>{
                return;
            });
        }
        let after_filter = [];
        for (let i = 0; i < data.length; i++){
            if(data[i].price > parseInt(price.min) && data[i].price <= parseInt(price.max)){
                after_filter.push(data[i]);
            }
        }
        setFilter(after_filter);
        console.log(after_filter);
    };
    return (
        <>
        <Wrap>
            <div className="size">
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
            </div>
            <div className="filter">
                <div className="price"> 
                    <input type="number" placeholder="Nhập giá" name="min" value ={price.min} onChange={handleChangValue}/>
                    <input type="number" placeholder="Nhập giá" name="max" value = {price.max} onChange={handleChangValue}/>
                </div>
                <button onClick={handleFilter}>Lọc</button>
            </div>
        </Wrap>
        </>
    );
}

export default Filter;