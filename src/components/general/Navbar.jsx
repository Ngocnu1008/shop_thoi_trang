import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
    background: ${props => props.theme.bg};
`;
const Content = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    .logo {
        width: 10%;
        img {
            width: 100%;
        }
    }
    ul {
        display: flex;
        height: 100%;
        a {
            color: ${props => props.theme.color};
            text-decoration: none;
        }
        li {
            list-style: none;
            text-transform: uppercase;
            margin: 0 1.5rem;
            cursor: pointer;
            &:hover {
                color: ${props => props.theme.hover};
            }
        }
    }
    .navigation {
        width: 65%;
        
    }
    .nav_right{
        box-sizing: border-box;
        li {
            margin: 0;
            padding: 0.3rem 0.5rem;
            border-right: 1px solid gray;
            input {
                border: none;
                padding: 0.2rem 0.4rem;
                &:active {
                    border: none;
                    outline: none;
                }
            }
        } 
        li:first-child {
            // position: relative;
            // display: flex;
            // align-items: center;
            // i {
            //     position: absolute;
            //     right: 10%;
            //     color: black;
            // }
            i {
                transform: translateX(-20px);
                color: black;
            }
        }  
        li:last-child {
            border-right: none;
        }
    }
`;
function Navbar () {
    return (
        <div>
            <Container>
                <Content>
                    <div className="logo">
                        <img src="https://pubcdn.ivymoda.com/images/logo.png" alt=""/>                    
                    </div>
                    <div className="navigation">
                        <ul>
                            <NavLink to="/hang-nu"><li>Nữ</li></NavLink>
                            <NavLink to="/hang-nam"><li>Nam</li></NavLink>
                            <NavLink to="/tre-em"><li>Trẻ em</li></NavLink>
                            <NavLink to="/sale"><li>Final sale</li></NavLink>
                            <NavLink to="/category"><li>Bộ sưu tập</li></NavLink>
                            <NavLink to="/news"><li>Tin tức</li></NavLink>
                            <NavLink to="/info"><li>Thông tin</li></NavLink>
                        </ul>
                    </div>
                    <div className="nav_right">
                        <ul>
                            <li>
                                <input type="text" placeholder="Tìm kiếm"/>
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-paw" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                </Content>
            </Container>

        </div>
    )
}
export default Navbar;