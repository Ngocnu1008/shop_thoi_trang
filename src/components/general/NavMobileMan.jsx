import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
const Wrap = styled.div`
    width: 100%;
    ul {
        width: 70%;
        li {
            font-weight: bold;
            margin-left: 10%;
            font-size: 14px;
            :nth-child(4) {
                li {
                    margin-left: -10px;
                    :first-child {
                        margin-top: 20px;
                    }
                }
            }
            :nth-child(3) {
                li {
                    font-size: 14px;
                    :first-child {
                        margin-top: 20px;
                    }
                    margin-left: 10px;
                }
            }
        }
    }
`;

function NavMobileMan({setDisplayContent}) {
    const handleCloseDropdown = () => {
        setDisplayContent(false);
    }
    return (
        <Wrap>
            <ul>
                <Link to = "/hang-nam/news"  onClick={handleCloseDropdown}>
                    <li>Hàng nam mới về</li>
                </Link>
                <Link to = "/hang-nam/newpolo"  onClick={handleCloseDropdown}>
                    <li>New polo for man</li>
                </Link>
                <li>Áo nam
                    <ul>
                        <Link to="/hang-nam/somi" onClick={handleCloseDropdown}><li>Áo sơ mi Nam</li></Link>
                        <Link to="/hang-nam/polo" onClick={handleCloseDropdown}><li>Áo Polo Nam</li></Link>
                        <Link to="/hang-nam/thun" onClick={handleCloseDropdown}><li>Áo Thun</li></Link>
                    </ul>
                </li>
                <li> Quần nam
                    <ul>
                        <Link to="/hang-nam/jeans" onClick={handleCloseDropdown}><li>Quần Jean nam</li></Link>
                        <Link to="/hang-nam/short" onClick={handleCloseDropdown}><li>Quần Short/Lửng</li></Link>
                        <Link to="/hang-nam/long_trousers" onClick={handleCloseDropdown}><li>Quần Dài Nam</li></Link>
                        <Link to="/hang-nam/suit" onClick={handleCloseDropdown}><li>Quần Tây Nam</li></Link>
                    </ul>
                </li>
                <Link to = "/hang-nam/shoes"  onClick={handleCloseDropdown}>
                    <li>Giày nam</li>
                </Link>
                <Link to = "/hang-nam/accessory"  onClick={handleCloseDropdown}>
                    <li>Phụ kiện nam</li>
                </Link>
            </ul>
        </Wrap>
    );
}

export default NavMobileMan;