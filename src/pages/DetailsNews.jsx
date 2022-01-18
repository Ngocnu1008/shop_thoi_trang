import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import {news} from "../data/news"

const Wrap = styled.div`
    width: 56%;
    margin: auto;
    margin-top: 4%;
    h5{
        font-size: 18px;
        font-weight: 500;
        margin: 20px 0px;
    }
    h4{
        font-size: 25px;
        font-weight: 500;
    }
    p{
        margin: 30px 0px;
        font-size: 15px;
    }
    @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
        width: 90%;
        margin: auto;
    }
`;
const Container = styled.div`
    @media screen and (min-device-width: 375px) and (max-device-width: 767px) {
        .image {
            width: 80%;
            margin-left: 10%; 
            img {
                width: 100%;
            }
        }
        h4{
            font-size: 20px;
            margin-top: 20px;
        }
    }
`;
function DetailsNews(props) {
    const [data, setData] = useState([]);
    let params = useParams();
    const {id_sanpham} = params;
    useEffect(() =>{
        window.scroll(0,0);
        let details = news.filter((value) => value.id === parseInt(id_sanpham));
        setData(details);
    }, [params]);
    return (
        <Wrap>
            {data&&
            data.map((value) =>{
                return (
                    <Container>
                        <h5>3 mẫu áo sơ mi trễ vai khiến nàng xao xuyến</h5>
                        <p>Áo sơ mi trễ vai là trang phục đặc quyền dành riêng cho phái đẹp. Một chiếc áo trễ vai sẽ giúp nàng thể hiện sự nữ tính, bờ vai và phần xương quai xanh quyến rũ của mình. Nếu đang cảm thấy nhàm chán với các kiểu áo sơ mi thông thường thì hãy thử ngay 3 mẫu áo trễ vai mà IVY moda giới thiệu ngay sau đây nhé.</p>
                        <h4>Các mẫu áo sơ mi trễ vai sang trọng, nữ tính</h4>
                        <h5>Áo sơ mi lệch vai 1 bên</h5>
                        <p>Thiết kế bất đối xứng luôn mang tới một hình ảnh thời trang đầy mới mẻ cho người đối diện. Với dạng áo sơ mi lệch vai bên kín bên hở không theo quy chuẩn mang lại nét vương giả, cùng nhan sắc quyến rũ cho người mặc.</p>
                        <div className='image'><img src={`/image/news/${value.image1}`}/></div>
                        <h5>Áo sơ mi lệch vai 2 bên</h5>
                        <p>Thiết kế áo sơ mi trễ vai kế hợp phần dây 2 bên tạo cảm giác an toàn cho người mặc. Phần dây 2 bên vai giúp cố định áo đồng thời tạo cho người mặc một vẻ ngoài quyến rũ, gợi cảm. Thật không ngoa khi nói kiểu áo này là trang phục nữ hoàng dành cho sự nữ tính.</p>
                        <div className='image'><img src={`/image/news/${value.image1a}`}/></div>
                        <h5>Áo sơ mi lệch vai tay dài</h5>
                        <p>Thiết kế áo sơ mi trễ vai kế hợp phần dây 2 bên tạo cảm giác an toàn cho người mặc. Phần dây 2 bên vai giúp cố định áo đồng thời tạo cho người mặc một vẻ ngoài quyến rũ, gợi cảm. Thật không ngoa khi nói kiểu áo này là trang phục nữ hoàng dành cho sự nữ tính.</p>
                        <div className='image'><img src={`/image/news/${value.image1b}`}/></div>
                        <h4>Những cách mix đồ giúp bạn nổi bật với áo sơ mi trễ vai</h4>
                        <h5>Mix áo sơ mi trễ vai cùng chân váy chữ A tôn dáng</h5>
                        <p>Thiết kế áo sơ mi trễ vai kế hợp phần dây 2 bên tạo cảm giác an toàn cho người mặc. Phần dây 2 bên vai giúp cố định áo đồng thời tạo cho người mặc một vẻ ngoài quyến rũ, gợi cảm. Thật không ngoa khi nói kiểu áo này là trang phục nữ hoàng dành cho sự nữ tính.</p>
                        <div className='image'><img src={`/image/news/${value.image1c}`}/></div>
                        <p>Thiết kế áo sơ mi trễ vai kế hợp phần dây 2 bên tạo cảm giác an toàn cho người mặc. Phần dây 2 bên vai giúp cố định áo đồng thời tạo cho người mặc một vẻ ngoài quyến rũ, gợi cảm. Thật không ngoa khi nói kiểu áo này là trang phục nữ hoàng dành cho sự nữ tính.</p>
                        <h5>Mix áo sơ mi trễ vai cùng chân váy chữ A tôn dáng</h5>
                        <p>Thiết kế áo sơ mi trễ vai kế hợp phần dây 2 bên tạo cảm giác an toàn cho người mặc. Phần dây 2 bên vai giúp cố định áo đồng thời tạo cho người mặc một vẻ ngoài quyến rũ, gợi cảm. Thật không ngoa khi nói kiểu áo này là trang phục nữ hoàng dành cho sự nữ tính.</p> 
                        <div className='image'><img src={`/image/news/${value.image1d}`}/></div>
                    </Container>
                )
            })}
        </Wrap>
    );
}

export default DetailsNews;