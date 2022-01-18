import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrap = styled.div`
    width: 100%;
    ul {
        width: 70%;
        li {
            font-weight: bold;
            font-size: 14px;
            :nth-child(3) {
                li {
                    :first-child {
                        margin-top: 20px;
                    }
                }
            }
            :last-child {
                li {
                    :first-child {
                        margin-top: 20px;
                    }
                    margin-left: 10px;  
                }
            }
        }
    }
`;
function NavMoiblieContentKids({setDisplayContent}) {
    const handleCloseDropdown = () => {
        setDisplayContent(false);
    }
    return (
        <Wrap>
            <ul>
                <Link to = "/hang-tre-em/news" onClick={handleCloseDropdown}>
                    <li>Hàng mới về trẻ em</li>
                </Link>
                <Link to="/hang-tre-em/dream" onClick={handleCloseDropdown}>
                    <li>Drawn the dream</li>
                </Link>
                <li>Bé gái
                    <ul>
                        <Link to="/hang-tre-em/trousers" onClick={handleCloseDropdown}><li>Quần bé gái</li></Link>
                        <Link to="/hang-tre-em/skirt" onClick={handleCloseDropdown}><li>Váy</li></Link>
                        <Link to="/hang-tre-em/shirt" onClick={handleCloseDropdown}><li>Áo bé gái</li></Link>
                        <Link to="/hang-tre-em/phu_kien" onClick={handleCloseDropdown}><li>Phụ kiện bé gái</li></Link>
                    </ul>
                </li>
                <li>Bé trai
                    <ul>
                        <Link to="/hang-tre-em/boy_trousers" onClick={handleCloseDropdown}><li>Quần bé trai</li></Link>
                        <Link to="/hang-tre-em/boy_shirt" onClick={handleCloseDropdown}><li>Áo bé trai</li></Link>
                        <Link to="/hang-tre-em/boy_phu_kien" onClick={handleCloseDropdown}><li>Phụ kiện bé trai</li></Link>
                    </ul>
                </li>
            </ul>
        </Wrap>
    );
}

export default NavMoiblieContentKids;