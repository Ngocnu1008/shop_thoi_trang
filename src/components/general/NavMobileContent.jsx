import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavMobileWoman from './NavMobileWoman';
import NavMobileMan from "./NavMobileMan";
import NavMoiblieContentKids from './NavMoiblieContentKids';
import NavMobileSales from './NavMobileSales';

const Wrap = styled.div`
    ul li {
        margin-left: 15px;
        display: flex;
        cursor: pointer;
        :hover {
            color: red;
        }
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: 600;
    }
    z-index: 10;
    position: fixed;
    top: 5%;
    left: 0%;
    overflow: scroll;
    text-align: center;
    background-color: white;
    width: 100%;
    height: 100vh;
    padding-top: 20px;
`;
function NavMobileContent({setDisplayContent}) { 
    const [openContentWoman, setOpenContentWoman] = useState(false);
    const [openContentMan, setOpenContentMan] = useState(false);
    const [openContentKids, setOpenContentKids] = useState(false);
    const [openContentSales, SetOpenContentSales] = useState(false);

    const handleOpenContentWoman = () => {
        setOpenContentWoman(!openContentWoman);
    }

    const handleOpenContentMan = () => {
        setOpenContentMan(!openContentMan);
    }

    const handleOpenContentKids = () => {
        setOpenContentKids(!openContentKids);
    }

    const handleOpenContentSales = () => {
        SetOpenContentSales(!openContentSales);
    }

    const handleClose = () => {
        setDisplayContent(false);
    }

    return (
        <Wrap>
             <ul>
               <li onClick={handleClose} onClick={handleOpenContentWoman}>Nữ</li>
               {openContentWoman ? <NavMobileWoman setDisplayContent={setDisplayContent}/> : ""}

               <li onClick={handleClose} onClick={handleOpenContentMan}>Nam</li>
               {openContentMan ? <NavMobileMan setDisplayContent={setDisplayContent}/> : ""}

               <li onClick={handleClose} onClick={handleOpenContentKids}>Trẻ em</li>
                {openContentKids ? <NavMoiblieContentKids setDisplayContent={setDisplayContent}/> : ""}

               <li onClick={handleClose} onClick={handleOpenContentSales}>Final sale</li>
               {openContentSales ? <NavMobileSales setDisplayContent={setDisplayContent} /> : ""}
               
               <Link to="/collections/Trendy"><li onClick={handleClose}>Bộ sưu tập</li></Link>
                
               <Link to="/news" onClick={handleClose}><li>Tin tức</li></Link>
                
               <Link to="/info" onClick={handleClose}><li>Thông tin</li></Link>
                
                </ul>
        </Wrap>
    );
}

export default NavMobileContent;