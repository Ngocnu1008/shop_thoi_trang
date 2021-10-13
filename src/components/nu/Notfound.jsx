import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 64%;
    margin-left: 0%;
    color: red;
`;
function Notfound(props) {
    return (
       <Wrap>
           <p>Xin lỗi, chúng tôi không tìm thấy sản phẩm phù hợp. 
           Vui lòng xem lại giá sản phẩm.</p>
       </Wrap>
    );
}

export default Notfound;