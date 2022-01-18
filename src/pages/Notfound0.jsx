import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    margin-top: 5% !important;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between; 
    img {
        width: 80%;
    }
    .Tim_kiem {
        margin-top: 5%;
        width: 60%;
        text-align: center;
        font-size: 14px;
        .search {
            width: 100%;
            input {
                width: 90%;
                padding: 5px 5px;
            }
            button {
                padding: 6px 7px;
                border: 1px solid black;
                background-color: white;
            }
        }
    }   
`;
function Notfound0(props) {
    return (
        <Wrap>
            <img src="https://pubcdn.ivymoda.com/images/err_404.jpg" alt=""/>
            <div className="Tim_kiem">
                <p> Xin lỗi bạn, chúng tôi không thể tìm kiếm được trang web bạn yêu cầu hoặc có gì đó đã sai...
                    Bạn vui lòng nhập lại tìm kiếm hoặc trở lại Trang chủ!
                </p>
                <br/>
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm..."/>
                    <span><button><i class="fa fa-search" aria-hidden="true"></i></button></span>
                </div>
            </div>
        </Wrap>
    );
}

export default Notfound0;