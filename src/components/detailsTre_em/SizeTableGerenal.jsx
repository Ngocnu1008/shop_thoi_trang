import React, { useEffect, useState } from 'react';
import SizeTableMobile from './SizeTableMobile';
import SizeTable from "./Sizetable";
import styled from 'styled-components';

const Wrap = styled.div`
`;
function TableSizeGeneral({setDisplay}) {
    const [displayModalSize, setDisplayModalSize] = useState(false);
    
    useEffect(() => {
        let check_deviceSize = window.innerWidth;
        if(check_deviceSize >= 768) {
            setDisplayModalSize(true);
        }
    }, [window.innerWidth]);
    return (
        <Wrap>
            {displayModalSize ? <SizeTable setDisplay= {setDisplay}/> : <SizeTableMobile setDisplay={setDisplay}/>}
        </Wrap>
    );
}

export default TableSizeGeneral;