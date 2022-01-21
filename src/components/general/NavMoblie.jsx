import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavMobileContent from './NavMobileContent';
const Wrap = styled.div`
    width: 100%;
    margin: auto;
    position: fixed;
    top: 0;
    z-index: 20;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    box-shadow: 1px 3px 5px 0px rgb(0 0 0 / 10%);
    .bar {
        margin-left: 10px;
        width: 25%;
        display: flex;
        p {
            font-size: 13px;
            font-weight: 600;
            margin-left: 5px;
        }
    }
    .logo {
        width: 40%;
        margin: auto;
        img{
            width: 80%;
        }
        text-align: center;
    }
    .nav_right {
        width: 20%;
        ul {
            display: flex;
            li {
                list-style: none;
                font-size: 10px;
                padding: 5px 5px;
                strong {
                    color: red;
                }
            }
        }
    }
    a {
        text-decoration: none;
        color: black;
    }
`;
function NavMoblie({count, check_register}) {
    const [displayContent, setDisplayContent] = useState(false);
    
    const handleDisplayContent = () => {
        setDisplayContent(!displayContent);
    }
    return (
        <Wrap>
            <div className="bar">
                <p><i class="fa fa-bars" aria-hidden="true" onClick={handleDisplayContent}></i></p>
                {displayContent ? <NavMobileContent setDisplayContent={setDisplayContent}/> : ""}
                <p onClick={handleDisplayContent}>Danh mục</p>
            </div>  
            <div className="logo">
                <Link to="/"><img src="https://pubcdn.ivymoda.com/images/logo.png" alt=""/> </Link>                   
            </div>
            <div className="nav_right">
                <ul>
                    <li>
                        <i className="fa fa-paw" aria-hidden="true"></i>
                    </li>
                    <Link to ={check_register ? "/login" : "/register"}> 
                    <li>
                        <i className="fa fa-user" aria-hidden="true" setDisplayContent={setDisplayContent}></i>
                    </li>
                    </Link>
                    <Link to="/cart">
                    <li>
                        <i className="fa fa-shopping-bag" aria-hidden="true" setDisplayContent={setDisplayContent}></i>
                        <strong>{count > 0 ? count : ""}</strong>
                    </li>
                    </Link>
                </ul>
            </div>         
        </Wrap>
    );
}

export default NavMoblie;