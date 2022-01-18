import React, { useEffect, useState } from "react";
import NavPC from "./NavPC";
import NavMoblie from "./NavMoblie";
import styled from "styled-components";

const Wrap = styled.div`
    position: relative;
`;
function Navbar ({count, check_register}) {
    const [displayNav, setDisplayNav] = useState(false);
    useEffect(() => {
        let check_device = window.innerWidth;
        if (check_device >= 768) {
            setDisplayNav(true);
        } 
    },[window.innerWidth])
    console.log(window.innerWidth);
    return (
        <Wrap>
           {displayNav ? <NavPC count={count} check_register={check_register}/> : <NavMoblie count={count} check_register={check_register}/>}
        </Wrap>
    )
}
export default Navbar;