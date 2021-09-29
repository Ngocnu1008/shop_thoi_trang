import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 100%;
    background: black;
`;
const Header = styled.div`
    width: 95%;
    margin: auto;
    opacity: 1;
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
    width: 50%;
    margin: auto;
    background: white;
    color: black;
    opacity: 1 !important;
    z-index; 2;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;
const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: gray;
    opacity: 0.3;
    position: fixed;
    top: 0;
`;
const SizeClothes = styled.div`
    width: 95%;
    margin: auto;
`;
const SizeShoes = styled.div`
    width: 90%;
    margin: auto;   
`;
function ModalSize({setOpenModal}) {
    const handleClick = () => {
        setOpenModal(false);
    } 
    //const [openModal, setOpenModal] = useState(false)
    // const handleClick = () => {
        //setOpenModal(true);
    return (
        <Wrap>
            <Background/>
            <Content>
                <Header>
                    <h3>Bảng tư vấn size</h3>
                    <button onClick={handleClick}>X</button>
                </Header>
                <SizeClothes>
                    <table>
                        <tbody>
                        <tr>
                            <td rowspan="16">
                                <div className="img_decription">
                                    <img src="https://pubcdn.ivymoda.com/images/daieo_large.jpg" alt =""/>
                                </div>
                            </td>
                            <td colspan="7">SIZE ÁO</td>
                        </tr>
                        <tr>
                            <td rowSpan="3">STT</td>
                            <td rowSpan="3">tên gọi</td>
                            <td colSpan="5" rowSpan="2">size</td>
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
                            <td>NGỰC</td>
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
                            <td>HÔNG</td>
                            <td>88</td>
                            <td>92</td>
                            <td>96</td>
                            <td>100</td>
                            <td>104</td>
                        </tr>
                        <tr>
                            <td>SIZE QUẦN</td>
                        </tr>
                        <tr>
                            <td rowSpan="3">STT</td>
                            <td rowSpan="3">tên gọi</td>
                            <td colSpan="5" rowSpan="2">size</td>
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
                            <td>VÒNG EO</td>
                            <td>64</td>
                            <td>68</td>
                            <td>72</td>
                            <td>76</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>VÒNG MÔNG</td>
                            <td>88</td>
                            <td>92</td>
                            <td>96</td>
                            <td>100</td>
                            <td>104</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>VÒNG BỤNG</td>
                            <td>68</td>
                            <td>72</td>
                            <td>76</td>
                            <td>80</td>
                            <td>
                                <p>84</p>
                                <p>&nbsp;</p>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>DÀI QUẦN</td>
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
                    <table>
                            <tbody>
                                <tr>
                                    <td rowspan= "4">
                                        <img src="https://pubcdn.ivymoda.com/images/chan_medium.jpg" alt=""/>
                                    </td>
                                    <td colspan="7">SIZE GIÀY</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">TÊN GỌI</td>
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
                                    <td>CHIỀU DÀI BÀN CHÂN (cm)</td>
                                    <td>20,5</td>
                                    <td>21.5</td>
                                    <td>22-22,5</td>
                                    <td>23</td>
                                    <td>23,8-24,1</td>
                                    <td>24,5</td>
                                </tr>
                                
                            </tbody>
                        </table>
                </SizeShoes>
            </Content>
        </Wrap>
    );
}

export default ModalSize;