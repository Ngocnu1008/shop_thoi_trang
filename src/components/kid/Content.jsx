import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {shirt, dream, phu_kien, skirt, trousers, news3, boy_phu_kien, boy_shirt, boy_trousers} from "../../data/do_tre_em";
import {Link} from "react-router-dom";
import Filter from "./Filter";

const Wrap = styled.div`
    max-width: 80%;
`;
const General = styled.div`
    h3{
        margin-top: 30px;
        text-transform: uppercase;
        font-weight: bold;
    }
    color: ${props => props.theme.color};
    display: flex;
    .options {
        cursor: pointer;
        margin-top: 30px;
        display: flex;
        div{
            display: flex;
            align-items: center;
            margin: 0 5%;
            width: 150px;
            p {
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
    cursor: pointer;
    margin: 1% 0.5%;
    text-align: center;
    a {
        text-decoration: none;
        color: black;
    }
    img{
        width: 100%;
    }
    h3 {
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 5px;
    }
    h4 {
        font-weight: 400;
    }
`;
function Content({type}) {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [display, setDisplay] = useState(false);
    const handleOpenFilter = () =>{
        setDisplay(!display);
    }
    const [title, setTitle] = useState("Hàng trẻ em mới về");
    useEffect(() =>{
        switch (type) {
            case "shirt":
                setData(shirt);
                setFilter(shirt);
                setTitle("Áo thun bé gái");
                break;
            case "skirt":
                setData(skirt);
                setFilter(skirt);
                setTitle("Váy bé gái");
                break;
            case "phu_kien":
                setData(phu_kien);
                setFilter(phu_kien);
                setTitle("Phụ kiện bé gái");
                break;
            case "trousers":
                setData(trousers);
                setFilter(trousers);
                setTitle("Quần bé gái");
                break;
            case "dream":
                setData(dream);
                setFilter(dream);
                setTitle("Draw the dream");
                break;
            case "boy_phu_kien":
                setData(boy_phu_kien);
                setFilter(boy_phu_kien);
                setTitle("Phụ kiện bé trai");
                break;
            case "boy_trousers":
                setData(boy_trousers);
                setFilter(boy_trousers);
                setTitle("Quần bé trai");
                break;
            case "boy_shirt":
                setData(boy_shirt);
                setFilter(boy_shirt);
                setTitle("Áo thun bé trai");
                break;
            default:
                setData(news3);
                setFilter(news3);
                setTitle("Hàng mới về trẻ em");
        }
    },[type])
    return (
        <Wrap>
            <General>
                <h3>{title}</h3>
                <div className="options">
                    <div className="filter" onClick={handleOpenFilter}>
                        <p>Bộ lọc</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                    <div className="sort">
                        <p>Sắp xếp</p>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </div>
                </div>
            </General>
            {display ? <Filter setFilter={setFilter} data={data}/> : ""};
            <Products>
                {filter && 
                filter.map((value, index) => {
                    return (
                        <Card key= {index}>
                            <img src={`/image/woman/top_collections/${value.image}`}/>
                            <Link to={`/chi-tiet-hang-tre-em/${type}/${value.id}`}><h3>{value.name}</h3></Link>
                            <h4>{value.price}</h4>
                            <p>_new_</p>
                        </Card>
                    )
                })}
            </Products>
        </Wrap>
    );
}

export default Content;