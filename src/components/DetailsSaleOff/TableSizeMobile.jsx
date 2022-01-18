import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 100%;
`;

const Background = styled.div`
    width: 100%;
    height: 100vh;
    align-item: center;
    background-color: gray;
    // opacity: 0.3;
    position: fixed;
    top: 0;
    left: 0;
`;
const Content = styled.div`
    width: 95%;
    border-radius: 10px;
    margin-top: 20px !important;
    margin: auto !important;
    background: white;
    color: black;

`;
const Header = styled.div`
    width: 90%;
    margin: auto;
    padding: 20px 0px 30px 0px;
    display: flex;
    justify-content: space-between;
    h3 {
        font-weight: 500;
    }
    button {
        padding: 5px 10px;
        color: gray;
        border: none;
        cursor: pointer;
        background-color: white;
        font-weight: bold;
    }
`;
const Body = styled.div`
    width: 90%;
    margin: auto;

`;
function TableSizeMobile({setDisplay}) {

    const handleCloseSizeTable = () => {
        setDisplay(0);
    }
    return (
        <Wrap>
            <Background>
                <Content>
                    <Header>
                        <h3>Bảng tư vấn size</h3>
                        <button onClick={handleCloseSizeTable}> x </button>
                    </Header>
                    <Body>
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan={"7"} style={{"width": "500px"}}>SIZE ÁO</td>
                                </tr>
                                <tr>
                                    <td rowSpan={"3"}>STT</td>
                                    <td rowSpan={"3"}>Tên gọi</td>
                                    <td colSpan={"5"}>Size</td>
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
                                    <td>Vai</td>
                                    <td>36</td>
                                    <td>37</td>
                                    <td>38</td>
                                    <td>39</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ngực</td>
                                    <td>82</td>
                                    <td>86</td>
                                    <td>90</td>
                                    <td>94</td>
                                    <td>98</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Eo</td>
                                    <td>64</td>
                                    <td>68</td>
                                    <td>72</td>
                                    <td>76</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Hông</td>
                                    <td>88</td>
                                    <td>92</td>
                                    <td>96</td>
                                    <td>100</td>
                                    <td>104</td>
                                </tr>
                                <tr>
                                    <td colSpan={"7"} style={{"width": "500px"}}>SIZE QUẦN</td>
                                </tr>
                                <tr>
                                    <td rowSpan={"3"}>STT</td>
                                    <td rowSpan={"3"}>Tên gọi</td>
                                    <td colSpan={"5"}>Size</td>
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
                                    <td>Vòng eo</td>
                                    <td>64</td>
                                    <td>68</td>
                                    <td>72</td>
                                    <td>76</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Vòng mông</td>
                                    <td>88</td>
                                    <td>92</td>
                                    <td>96</td>
                                    <td>100</td>
                                    <td>104</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Vòng bụng</td>
                                    <td>68</td>
                                    <td>72</td>
                                    <td>76</td>
                                    <td>80</td>
                                    <td>84</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Dài quần</td>
                                    <td>96</td>
                                    <td>97</td>
                                    <td>99</td>
                                    <td>100</td>
                                    <td>101</td>
                                </tr>
                                <tr>
                                    <td colSpan={"7"} style={{"width": "500px"}}>SIZE GIÀY</td>
                                </tr>
                                <tr>
                                    <td style={{"width": "500px"}} colSpan={"7"}>
                                        <img src="https://pubcdn.ivymoda.com/images/chan_medium.jpg" alt=""/>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowSpan={"3"}>Tên gọi</td>
                                    <td colSpan={"6"}>Size</td>
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
                                    <td>20.5</td>
                                    <td>21.5</td>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>23.5</td>
                                    <td>24.55</td>
                                </tr>
                            </tbody>
                        </table>
                    </Body>
                </Content>
            </Background>
        </Wrap>
    );
}

export default TableSizeMobile;