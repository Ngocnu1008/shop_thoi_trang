import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Wrap = styled.div`
    margin-top: 5%;
    margin-left: 3%;
    width: 20%;
    box-sizing: border-box;
    color: ${props => props.theme.color};
    ul {
        width: 100%;
        a {
            text-decoration: none;
            color: black;
        }
    }
    li {
        margin-left: 10%;
        list-style: none;
        cursor: pointer;
        padding: 1% 0%;
        text-transform: uppercase;
        font-weight: bold;
        i {
            margin-right: 1%;
        }
        li {
            font-weight: normal;
            text-transform: capitalize;
            &:hover {
                color: gray;
            }
        }

    }
    @media screen and (max-width: 811px) {
        display: none;
    }
`;
function SideBar(props) {
    return (
        <Wrap>
            <ul>
                <Link to = "/hang-nu/news">
                    <li>Hàng nữ mới về</li> 
                </Link>
                <li>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Áo nữ
                    <ul>
                        <Link to="/hang-nu/shirt"><li>Áo kiểu</li></Link>
                        {/* sau dấu / thì phải trùng với case của Content thì mới ra */}
                        <Link to="/hang-nu/croptop"><li>Áo croptop</li></Link>
                        <Link to="/hang-nu/vest"><li>Áo vest nữ</li></Link>
                        <Link to="/hang-nu/somi"><li>Áo sơ mi nữ</li></Link>
                    </ul>
                </li>
                <li>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Quần nữ
                    <ul>
                        <Link to="/hang-nu/jeans"><li>Quần jean nữ</li></Link>
                        <Link to="/hang-nu/short"><li>Quần lửng</li></Link>
                        <Link to="/hang-nu/trousers"><li>Quần dài</li></Link>
                    </ul>
                </li>
                <li>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Đầm nữ
                    <ul>
                        <Link to="/hang-nu/dam"><li>Đầm</li></Link>
                        <Link to="/hang-nu/dam_thun"><li>Đầm thun</li></Link>
                        <Link to="/hang-nu/dam_mexi"><li>Đầm mexi</li></Link>
                    </ul>
                </li>
                <li>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Giày nữ
                    <ul>
                        <li>Giày cao gót</li>
                        <li>Giày búp bê</li>
                        <li>Dép lê</li>
                    </ul>
                </li>
                
            </ul>
        </Wrap>
    );
}

export default SideBar;