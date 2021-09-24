import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    margin-top: 5%;
    width: 20%;
    box-sizing: border-box;
    background: blue;
    text-align: center;
    color: ${props => props.theme.color};
    ul {
        width: 100%;
    }
    li {
        list-style: none;
        cursor: pointer;
        padding: 1% 0%;
        text-transform: uppercase;
        font-weight: bold;
        i {
            margin-right: 1%;
        }
        li {
            font-weight: normal;
            text-transform: capitalize;
            &:hover {
                color: black;
            }
        }

    }
`;
function SideBar(props) {
    return (
        <Wrap>
            <ul>
                <li>
                    Hàng nữ mới về
                </li>
                <li>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Áo nữ
                    <ul>
                        <li>Áo kiểu</li>
                        <li>Áo croptop</li>
                        <li>Áo vest nữ</li>
                        <li>Áo sơ mi nữ</li>
                    </ul>
                </li>
                <li>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Quần nữ
                    <ul>
                        <li>Quần jean nữ</li>
                        <li>Quần lửng</li>
                        <li>Quần dài</li>
                    </ul>
                </li>
                <li>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Đầm nữ
                    <ul>
                        <li>Đầm</li>
                        <li>Đầm thun</li>
                        <li>Đầm mexi</li>
                    </ul>
                </li>
                <li>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Giày nữ
                    <ul>
                        <li>Giày cao gót</li>
                        <li>Giày búp bê</li>
                        <li>Dép lê</li>
                    </ul>
                </li>
                
            </ul>
        </Wrap>
    );
}

export default SideBar;