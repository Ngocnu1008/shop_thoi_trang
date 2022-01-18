import React, { useEffect, useState } from 'react';
import ModalSize from "./ModalSize";
import ModalSizeMobile from "./ModalSizeMobile";
import styled from 'styled-components';

const Wrap = styled.div`
`;
function ModalSizeGeneral({setDisplay}) {
    const [displayModalSize, setDisplayModalSize] = useState(false);
    
    useEffect(() => {
        let check_deviceSize = window.innerWidth;
        if(check_deviceSize >= 768) {
            setDisplayModalSize(true);
        }
    }, [window.innerWidth]);
    return (
        <Wrap>
            {displayModalSize ? <ModalSize setDisplay= {setDisplay}/> : <ModalSizeMobile setDisplay={setDisplay}/>}
        </Wrap>
    );
}

export default ModalSizeGeneral;