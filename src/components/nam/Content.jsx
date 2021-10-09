import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {news2, newpolo, polo, somi, thun} from "../../data/do_nam";
import {Link} from "react-router-dom";
import Filter from './Filter';
const Wrap = styled.div`
    max-width: 80%;
`;
const General = styled.div`
    cursor: pointer;
    margin-top: 30px;
    h3{
        text-transform: uppercase;
        font-weight: bold;
    }
    color: ${props => props.theme.color};
    display: flex;
    .options {
        display: flex;
        div{
            display: flex;
            margin: 0% 5%;
            align-items: center;
            width: 150px;
            p{
                margin: 0 20px;
            }
        }
    }
`;
const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin-top: 25px;
`;
const Card = styled.div`
    width: 23%;
    margin: 1% 0.5%;
    text-align: center;
    img{
        width: 100%;
    }
    a {
        text-decoration: none;
        color: black;
    }
    h3 {
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 5px;
        cursor: pointer;
    }
    h4{
        font-weight: 400;
    }
`;

function Content({type}) {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("hàng nam mới về");
    const handleShow = () => {
        setShow(!show);
    }
    useEffect (() => {
        switch (type) {
            case "polo":
                setData(polo);
                setFilter(polo);
                setTitle("Áo polo nam");
                break;
            case "newpolo":
                setData(newpolo);
                setFilter(newpolo);
                setTitle("Áo polo nam mới");
                break;
            case "somi":
                setData(somi);
                setFilter(somi);
                setTitle("Áo sơ mi nam");
                break;
            case "thun":
                setData(thun);
                setFilter(thun);
                setTitle("Áo thun nam");
                break;
            default:
                setData(news2);
                setFilter(news2);
                setTitle("Hàng nam mới về");
        }
    }, [type]);
    return (
        <Wrap>
            <General>
                <h3>{title}</h3>
                <div className="options" onClick={handleShow}>
                    <div className="filter">
                        <p>Bộ lọc</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                    <div className="sort">
                        <p>Sắp xếp</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                </div>
            </General>
            {show && <Filter data={data} setFilter={setFilter}/>}
            <Products>
                {filter && 
                filter.map ((value, index) => {
                    return (
                        <Card key={index}>
                            <img src={`/image/woman/top_collections/${value.image}`}/>
                            <Link to ={`/chi-tiet-hang-nam/${type}/${value.id}`}><h3>{value.name}</h3></Link>
                            <h4>{value.price}<sup>đ</sup></h4>
                            <p>_new_</p>
                        </Card>
                    )
                })}
            </Products>

        </Wrap>
    );
}

export default Content;