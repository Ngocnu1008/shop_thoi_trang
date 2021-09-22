import React, {useRef, useSate, useState} from "react";
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
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);
    const temp = useRef();
    //khởi tạo vùng tham chiếu chưa có giá trị.
    const handleClick = () => {
        setCount (count + 1);
        setOpen(!open);
    }
    return (
        <Wrap>
            <Banner/>
            <hr/>
            {count}
            <button onClick={handleClick}>click</button>
            {
                open && (
                <div ref={temp}>
                <h2>HELLO WORLD</h2>
                </div>)
            }
        </Wrap>
    )
}
export default Home;