import React from 'react';
import styled from 'styled-components';
const Wrap = styled.div`
    p {
        font-size: 14px;
    }
    p:first-child{
        margin-bottom: 10px;
    }
`;
function Protection(props) {
    return (
        <Wrap>
            <p>Chi tiết bảo quản sản phẩm : </p>
            <p>* Vải dệt kim : sau khi giặt sản phẩm phải được phơi ngang tránh bai dãn.</p>
            <p>* Vải voan , lụa , chiffon nên giặt bằng tay.</p>
            <p>* Đồ Jeans nên hạn chế giặt bằng máy giặt vì sẽ làm phai màu jeans.Nếu giặt thì nên lộn trái sản phẩm khi giặt , đóng khuy , kéo khóa, không nên giặt chung cùng đồ sáng màu , tránh dính màu vào các sản phẩm khác. </p>
            <p>* Các sản phẩm cần được giặt ngay không ngâm tránh bị loang màu , phân biệt màu và loại vải để tránh trường hợp vải phai. Không nên giặt sản phẩm với xà phòng có chất tẩy mạnh , nên giặt cùng xà phòng pha loãng.</p>
            <p>* Những chất vải 100% cotton , không nên phơi sản phẩm bằng mắc áo mà nên vắt ngang sản phẩm lên dây phơi để tránh tình trạng rạn vải.</p>
            <p>* Khi ủi sản phẩm bằng bàn là và sử dụng chế độ hơi nước sẽ làm cho sản phẩm dễ ủi phẳng , mát và không bị cháy , giữ màu sản phẩm được đẹp và bền lâu hơn. Nhiệt độ của bàn là tùy theo từng loại vải. </p>
       
        </Wrap>
    );
}

export default Protection;