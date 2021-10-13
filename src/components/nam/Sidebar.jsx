import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Wrap = styled.div`
    width: 20%;
    margin-left: 3%;
    margin-top: 5%;
    ul {
        width: 100%;
    }
    a{
        text-decoration: none;
        color: black;
    }
    li{
        i{
            margin-right: 2px;
        }
        margin-left: 10%;
        padding: 1% 0%;
        cursor: pointer;
        font-weight: bold;
        list-style: none;
        text-transform: uppercase;
        li {
            font-weight: normal;
            text-transform: capitalize;
            &:hover {
                color: gray;
            }
        }
    };
`;
function Sidebar(props) {
    return (
        <Wrap>
            <ul>
                <Link to ="/hang-nam/news"><li>Hàng nam mới về</li></Link>
                <Link to ="/hang-nam/newpolo"><li>New polo for man</li></Link>
                <li>

                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                Áo 
                    <ul>
                        <Link to ="/hang-nam/somi"><li>Áo sơ mi nam</li></Link>
                        <Link to ="/hang-nam/polo"><li>Áo Polo nam</li></Link>
                        <Link to ="/hang-nam/thun"><li>Áo thun nam </li></Link>
                    </ul>
                </li>
                <li>
                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                Quần Nam
                    <ul>
                        <Link to ="/hang-nam/jeans"><li>Quần jeans nam</li></Link>
                        <Link to ="/hang-nam/short"><li>Quần short/lửng nam</li></Link>
                        <Link to ="/hang-nam/long_trousers"><li>Quần dài nam</li></Link>
                        <Link to ="/hang-nam/suit"><li>Quần Tây nam</li></Link>
                    </ul>
                </li>
                <li>
                <i className="fa fa-arrow-circle-o-right" aria-hidden="true">
                </i>
                <Link to ="/hang-nam/shoes">Giày Nam</Link>
                </li>
                <li>
                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                <Link to ="/hang-nam/accessory">
                Phụ kiện Nam</Link>
                </li>
            </ul>
        </Wrap>
    );
}

export default Sidebar;