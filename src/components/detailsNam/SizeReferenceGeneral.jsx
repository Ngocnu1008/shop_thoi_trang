import React, { useEffect, useState } from 'react';
import Sizereference from './Sizereference';
import SizeReferenceMoblie from './SizeReferenceMobile';
import styled from 'styled-components';

const Wrap = styled.div`
`;
function SizeReferenceGeneral({setDisplay}) {
    const [displayModalSize, setDisplayModalSize] = useState(false);
    
    useEffect(() => {
        let check_deviceSize = window.innerWidth;
        if(check_deviceSize >= 768) {
            setDisplayModalSize(true);
        }
    }, [window.innerWidth]);
    return (
        <Wrap>
            {displayModalSize ? <Sizereference setDisplay= {setDisplay}/> : <SizeReferenceMoblie setDisplay={setDisplay}/>}
        </Wrap>
    );
}

export default SizeReferenceGeneral;