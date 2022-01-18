import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"

const Wrap = styled.div`
    margin: 5% 0% 0% 3%;
    width: 20%;
    box-sizing: border-box;
    color: ${props => props.theme.color};
    ul {
        width: 100%;
        a {
            text-decoration: none;
            color: black;
        }
    }
    li {
        margin-left: 10%;
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
                color: gray;
            }
        }

    }
    @media screen and (min-device-width: 375px) and (max-device-width: 767px){
        display: none;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        margin: 80px 10px 0px 2px;
        li {
            font-size: 12px;
            margin-bottom: 5px;
        }
    }
`;
function SideBar(props) {
    return (
        <Wrap>
            <ul>
                <Link to="/hang-tre-em/news"><li>Hàng mới về trẻ em</li></Link>
                <Link to="/hang-tre-em/dream"><li>Draw the dream</li></Link>
                <li>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Bé gái
                    <ul>
                        <Link to="/hang-tre-em/trousers"><li>Quần bé gái</li></Link>
                        <Link to="/hang-tre-em/skirt"><li>Váy</li></Link>
                        <Link to="/hang-tre-em/shirt"><li>Áo bé gái</li></Link>
                        <Link to="/hang-tre-em/phu_kien"><li>Phụ kiện bé gái</li></Link>
                    </ul>
                </li>
                <li>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Bé trai
                    <ul>
                        <Link to="/hang-tre-em/boy_trousers"><li>Quần bé trai</li></Link>
                        <Link to="/hang-tre-em/boy_shirt"><li>Áo bé trai</li></Link>
                        <Link to="/hang-tre-em/boy_phu_kien"><li>Phụ kiện bé trai</li></Link>
                    </ul>
                </li>
            </ul>
        </Wrap>
    );
}
//giải thích params: params giữa link to và path phải trùng nhau để đưa đến trang cần đến, trong th này đằng sau path là type nhưng ở đây lại 
//là dãy các biến thay đổi (shirt, skirt, news etc) vì trang kid gồm trang content và sidebar, nội dung render gồm nhiều thể loại áo, quần khác 
//nhau nên lúc này mới đặt ở trang chính kid useState với biến "news" là biến khởi tạo vì khi vào trang kid thì "hàng mới về" được render đầu tiên,
//sau đó truyền props useState xuống trang content và xét switch case để trang render theo thể loại, lúc này mới dùng đến useEffect vì khi params (params.type)
//thay đổi thì setType thay đổi, param thay đổi tức là nó dẫn user đến trang content cần đến => content render theo setType.
export default SideBar;