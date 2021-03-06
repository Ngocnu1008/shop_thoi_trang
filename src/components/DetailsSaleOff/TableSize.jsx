import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
const Wrap = styled.div`
    width: 100%;
    padding: 15px;
`;
const Header = styled.div`
    width: 95%;
    margin: auto;
    opacity: 1;
    h3 {
        margin-left: 8px;
    }
    display: flex;
    justify-content: space-between;
    margin: 10px 0px 20px 10px;
    button {
        padding: 5px 10px;
        color: gray;
        font-weight: bold;
        border: none;
        cursor: pointer;
        background-color: white;
    }
`;
const Content = styled.div`
    width: 57%;
    margin: auto;
    border-radius: 15px;
    margin: 2% 0%;
    background: white;
    color: black;
    opacity: 1 !important;
    z-index: 2;
    position: fixed;
    top: 50%;
    left: 50%;
    height: 50%;
    overflow-y: scroll;
    height: 600px;
    transform: translateX(-50%) translateY(-50%);
    table tbody tr td {
        padding: 8px;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        width: 95%;
        margin-top: -135px;
        position: fixed;
        top: 67%;
        left: 50%;
        overflow-y: scroll;
        height: 900px;
    }
`;
const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: gray;
    opacity: 0.3;
    position: fixed;
    top: 0;
    left: 0;
`;
const SizeClothes = styled.div`
    width: 95%;
    margin: auto;
    box-sizing: border-box;
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        table {
            width: 698px !important;
            margin: auto;
            tbody tr td {
                :first-child {
                    width: 30px;
                }
                .img_decription img {
                    width: 90%;
                }
                width: 50px;
            }
        }
    }
`;
const SizeShoes = styled.div`
    width: 95%;
    margin: auto;  
    box-sizing: border-box;
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        table {
            width: 698px !important;
            margin: auto;
        }
    }

`;
function TableSize({setDisplay}) {
    const handleCloseSize = () => {
        setDisplay(0);
    }
    let modal = useRef(null);
    const handleOut = (e) => {
        if(modal.current && !modal.current.contains(e.target)){
            setDisplay(0);
        }
    } 
    useEffect(() =>{
        window.addEventListener("click", handleOut);
        return () => {
            document.addEventListener("click", handleOut);
        };
    },[]);

    return (
        <Wrap>
            <Background/>
            <Content ref={modal}>
                <Header>
                    <h3>B???ng t?? v???n size</h3>
                    <button onClick={handleCloseSize}>X</button>
                </Header>
                <SizeClothes>
                    <table style={{"width":"800px"}}>
                        <tbody>
                        <tr>
                            <td rowspan="16" style={{"width": "250px"}}>
                                <div className="img_decription">
                                    <img src="https://pubcdn.ivymoda.com/images/daieo_large.jpg" alt =""/>
                                </div>
                            </td>
                            <td colspan="7">SIZE ??O</td>
                        </tr>
                        <tr>
                            <td rowSpan="3">STT</td>
                            <td rowSpan="3">T??n g???i</td>
                            <td colSpan="5" rowSpan="2">Size</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td>S</td>
                            <td>M</td>
                            <td>L</td>
                            <td>XL</td>
                            <td>XXL</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>VAI</td>
                            <td>36</td>
                            <td>37</td>
                            <td>38</td>
                            <td>39</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>NG???C</td>
                            <td>82</td>
                            <td>86</td>
                            <td>90</td>
                            <td>94</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>EO</td>
                            <td>64</td>
                            <td>68</td>
                            <td>72</td>
                            <td>76</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>H??NG</td>
                            <td>88</td>
                            <td>92</td>
                            <td>96</td>
                            <td>100</td>
                            <td>104</td>
                        </tr>
                        <tr>
                            <td>SIZE QU???N</td>
                        </tr>
                        <tr>
                            <td rowSpan="3">STT</td>
                            <td rowSpan="3">T??n g???i</td>
                            <td colSpan="5" rowSpan="2">Size</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td>S(26)</td>
                            <td>M(27)</td>
                            <td>L(28)</td>
                            <td>XL(29)</td>
                            <td>XXL(30)</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>V??NG EO</td>
                            <td>64</td>
                            <td>68</td>
                            <td>72</td>
                            <td>76</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>V??NG M??NG</td>
                            <td>88</td>
                            <td>92</td>
                            <td>96</td>
                            <td>100</td>
                            <td>104</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>V??NG B???NG</td>
                            <td>68</td>
                            <td>72</td>
                            <td>76</td>
                            <td>80</td>
                            <td>84</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>D??I QU???N</td>
                            <td>96</td>
                            <td>97</td>
                            <td>99</td>
                            <td>100</td>
                            <td>101</td>
                        </tr>
                    </tbody>
                    </table>
                </SizeClothes>
                
                <SizeShoes>
                    <table style={{"width": "800px"}}>
                            <tbody>
                                <tr>
                                    <td rowspan= "4" style={{"width": "250px"}}>
                                        <img src="https://pubcdn.ivymoda.com/images/chan_medium.jpg" alt=""/>
                                    </td>
                                    <td colspan="7">SIZE GI??Y</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">T??N G???I</td>
                                    <td colspan="6">SIZE</td>
                                </tr>
                                <tr>
                                    <td>34</td>
                                    <td>35</td>
                                    <td>36</td>
                                    <td>37</td>
                                    <td>38</td>
                                    <td>39</td>
                                </tr>
                                <tr>
                                    <td>CHI???U D??I B??N CH??N (cm)</td>
                                    <td>20.5</td>
                                    <td>21.5</td>
                                    <td>22-22.5</td>
                                    <td>23</td>
                                    <td>23.8-24.1</td>
                                    <td>24.5</td>
                                </tr>
                                
                            </tbody>
                        </table>
                </SizeShoes>
            </Content>
        </Wrap>
    );
}

export default TableSize;