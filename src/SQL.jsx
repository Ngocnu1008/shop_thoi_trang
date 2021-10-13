// POSTGRE: 
// CREATE TABLE product (
// 	id varchar primary key,
// 	name_product varchar(50),
// 	price int, 
// 	parent_type varchar(50),
// 	type varchar(50)
// )
// Lệnh chạy: bôi đen + F5/nút chạy trên màn hình
//Thêm thông tin vào table đã tạo:
// INSERT INTO product (id, name_product, price, parent_type, type)
// VALUES ('SanphamD', 'Dam thun nu', '250000', 'women', 'do_nu1')

// SELECT * FROM product -> chọn tất cả các trường (gồm id, tên...)
// SELECT * FROM product WHERE id = 'SanphamD' 
// SELECT price FROM product WHERE id = 'SanphamD'
//Update và Delete phải có điều kiện phía sau!
// UPDATE product SET name_product = 'dam nu' WHERE id='Sanphamc'
// UPDATE product SET name_prodcut = 'gi do' --Khong co dk thi se bi update het
// DELETE FROM product WHERE id='Sanphamc'
