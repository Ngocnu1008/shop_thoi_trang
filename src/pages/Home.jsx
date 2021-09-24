import React, {useReducer, useRef, useSate, useState} from "react";
import styled from "styled-components";
import Banner from "../components/home/Banner";
const Wrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    hr {
        width: 99%;
        height: 2px;
        background: ${props => props.theme.bg};
        margin: auto;
        margin-top: 1%;
    }
`;
function Home() {
    // const [count, setCount] = useState(0);
    // const [open, setOpen] = useState(false);
    // const temp = useRef();
    //khởi tạo vùng tham chiếu chưa có giá trị.
    // const handleClick = () => {
    //     setCount (count + 1);
    //     setOpen(!open);
    // }
    const reducer = (state, action) => {
        switch (action) {
            case "TANG":
                return state + 1;
            case "GIAM":
                return state - 1;
            case "XOA_TAT_CA":
                return 0;
            default:
                return state;
        }
    }
    const [count1, dispatch] = useReducer(reducer, 0)
    return (
        <Wrap>
            <Banner/>
            <hr/>
            {count1}
            <button onClick={() => dispatch("TANG")}>TANG</button>
            <button onClick={() => dispatch("GIAM")}>GIAM</button>
            <button onClick={() => dispatch("XOA_TAT_CA")}>XOA TAT CA</button>

            {/* {count} */}
            {/* <button onClick={handleClick}>click</button> */}
            {
                // open && (
                // <div ref={temp}>
                // <h2>HELLO WORLD</h2>
                // </div>)
            }
        </Wrap>
    )
}
export default Home;