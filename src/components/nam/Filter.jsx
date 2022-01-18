import React, { useState } from 'react';
import styled from "styled-components"
import Swal from "sweetalert2";
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
    @media screen and (max-width: 811px) {
        width: 95%;
        margin-top: 70px;
    }
`;

function Filter({data, setFilter}) {
    const [value, setValue] = useState({
        min: "", 
        max: "",
    });
    const handeChangeValue = (e) => {
        setValue({...value, 
            [e.target.name] : e.target.value});
    }
    const handleFilter = () => {
       if(!parseInt(value.min) || !parseInt(value.max)){
            return Swal.fire({
                title: "Vui lòng chọn giá sản phẩm", 
                icon: "warning",
                confirmButtonText: "Đồng ý",
            });
       }
       if  
       (parseInt(value.min) < 0 || parseInt(value.max) < 0 || 
       parseInt(value.max) <= parseInt(value.min)){
           return Swal.fire({
                title: "Vui lòng chọn đúng giá sản phẩm", 
                icon: "warning",
                confirmButtonText: "Đồng ý",
          });
       }
       let after_filter = [];
       for (let i = 0; i < data.length; i++){
           if (data[i].price > parseInt(value.min) && data[i].price <= parseInt(value.max)){
               after_filter.push(data[i]);
           }
       }
       setFilter(after_filter);
    }
    return (
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
                    <input type="number" name="min" placeholder="Nhập giá" value={value.min} onChange={handeChangeValue}/>
                    <input type="number" name="max" placeholder="Nhập giá" value={value.max} onChange={handeChangeValue}/>
                </div>
                <button onClick={handleFilter }>Lọc</button>
            </div>
        </Wrap>
    );
}

export default Filter;