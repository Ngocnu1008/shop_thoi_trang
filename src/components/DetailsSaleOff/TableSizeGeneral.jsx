import React, { useEffect, useState } from 'react';
import TableSize from "./TableSize";
import TableSizeMobile from './TableSizeMobile';
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
            {displayModalSize ? <TableSize setDisplay= {setDisplay}/> : <TableSizeMobile setDisplay={setDisplay}/>}
        </Wrap>
    );
}

export default TableSizeGeneral;