import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
const Container = styled.div`
    z-index: 3;
    background: rgba(255, 255, 255, 0.4);
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    // box-shadow: 1px 3px 5px 0px rgb(0 0 0 / 10%);
    &:hover{
        // background: ${props =>props.theme.bg};
    }
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
            cursor: pointer;
        }
    }
    ul {
        display: flex;
        height: 100%;
        a {
            color: ${props => props.theme.color};
            text-decoration: none;
        }
        font-weight: 500;
        li {
            list-style: none;
            text-transform: uppercase;
            margin: 0 1.5rem;
            cursor: pointer;
            &:hover {
                color: gray;

            }
        }
    }
    .navigation {
        width: 55%;
        
    }
    .nav_right{
        box-sizing: border-box;
        li {
            margin: 0 0rem;
            padding: 0rem 1rem;
            border-right: 1px solid gray;
            input {
                border: none;
                padding: 0.2rem 0.4rem;
                &:active {
                    border: none;
                    outline: none;
                }
            }
            strong{
                font-size: 14px;
                margin-left: 2px;
                color: red;
            }
        } 
        a:first-child {
            i {
                transform: translateX(-20px);
                color: black;
            }
        }  
        a:last-child {
            border-right: none;
        }
        a:last-child li {
            border-right: none;
        }
    }
`;
function Navbar ({count, check_login}) {
    return (
        <div>
            <Container>
                <Content>
                    <div className="logo">
                        <Link to="/"><img src="https://pubcdn.ivymoda.com/images/logo.png" alt=""/> </Link>                   
                    </div>
                    <div className="navigation">
                        <ul>
                            <NavLink to="/hang-nu/news"><li>Nữ</li>
                            </NavLink>
                            <NavLink to="/hang-nam/news"><li>Nam</li>
                            </NavLink>
                            <NavLink to="/hang-tre-em/news"><li>Trẻ em</li>
                            </NavLink>
                            <NavLink to="/sale-off/page1"><li>Final sale</li>
                            </NavLink>
                            <NavLink to="/category"><li>Bộ sưu tập</li>
                            </NavLink>
                            <NavLink to="/news"><li>Tin tức</li>
                            </NavLink>
                            <NavLink to="/info"><li>Thông tin</li>
                            </NavLink>
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
                            <Link to ={check_login ? "/account" : "/login"}>
                            <li>
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </li>
                            </Link>
                            <Link to="/cart">
                            <li>
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                <strong>{count > 0 ? count : ""}</strong>
                            </li>
                            </Link>
                           
                        </ul>
                    </div>
                </Content>
            </Container>

        </div>
    )
}
export default Navbar;