import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
const Wrap = styled.div`
    width: 100%;
    ul {
        width: 50%;
        li {
            font-weight: bold;
            margin-left: 10%;
            font-size: 14px;
            :first-chid {
                li {
                    margin-left: -5px;
                }
            }
            :nth-child(3) {
                li {
                    margin-left: -10px;
                    :first-child {
                        margin-top: 25px;
                    }
                }
            }
            :last-child {
                li {
                    margin-left: -1px;
                    :first-child {
                        margin-top: 25px;
                    }
                }
            }
            li{
                font-size: 10px;
                margin-top: 20%;
            }
        }
    }
`;

function NavMobileWoman({setDisplayContent}) {
    const handleCloseDropdown = () => {
        setDisplayContent(false);
    }
    return (
        <Wrap>
            <ul>
                <Link to = "/hang-nu/news"  onClick={handleCloseDropdown}>
                    <li>Hàng nữ mới về</li>
                </Link>
                <li>Áo nữ
                    <ul>
                        <Link to="/hang-nu/shirt" onClick={handleCloseDropdown}><li>Áo kiểu</li></Link>
                        <Link to="/hang-nu/croptop" onClick={handleCloseDropdown}><li>Áo Croptop</li></Link>
                        <Link to="/hang-nu/vest" onClick={handleCloseDropdown}><li>Áo Vest nữ</li></Link>
                        <Link to="/hang-nu/somi" onClick={handleCloseDropdown}><li>Áo Sơ Mi nữ</li></Link>
                    </ul>
                </li>
                <li> Quần nữ
                    <ul>
                        <Link to="/hang-nu/jeans" onClick={handleCloseDropdown}><li>Quần Jean nữ</li></Link>
                        <Link to="/hang-nu/short" onClick={handleCloseDropdown}><li>Quần Lửng</li></Link>
                        <Link to="/hang-nu/trousers" onClick={handleCloseDropdown}><li>Quần Dài</li></Link>
                    </ul>
                </li>
                <li>Đầm nữ
                    <ul>
                        <Link to="/hang-nu/dam" onClick={handleCloseDropdown}><li>Đầm</li></Link>
                        <Link to="/hang-nu/dam_thun" onClick={handleCloseDropdown}><li>Đầm Thun</li></Link>
                        <Link to="/hang-nu/dam_mexi" onClick={handleCloseDropdown}><li>Đầm Mexi</li></Link>
                    </ul>
                </li>
            </ul>
        </Wrap>
    );
}

export default NavMobileWoman;