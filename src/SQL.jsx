// SQL NGÔN NGỮ TRUY VẤN CÓ QUAN HỆ
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
// UPDATE product SET name_product = 'gi do' --Khong co dk thi se bi update het
// DELETE FROM product WHERE id='Sanphamc'

//PRIMARY KEY: khóa chính không bị trùng nhau, nếu đặt là serial thì trường có khóa chính sẽ tự động tăng dần 
//& FOREIGN KEY: dùng để liên kết với các mảng, table khác.
//MQH TRONG CƠ SỞ DỮ LIỆU SQL: 
//1 - 1: 1 người mua 1 sp có 1 id duy nhất. 
// 1 - nhiều: một sản phẩm có 1 id đó có thể được bán cho nhiều người.
// nhiều - nhiều: một người có thể mua nhiều sản phẩm và một sp có thể bán cho nhiều người.

//select * from product

// insert into product (id, name_product, price, parent_type, type) 
// values ('9', 'ao nu', '200000', 'nu', 'do_nu')

// update product set price = '89000' where id = 'SanphamA'

// select * from product where id = '3'

// update product set id = '10' where id = 'sanphamC'

// select * from product limit 4 --lấy 4 sp đầu

// select * from product where id = '8' and type = 'do_nu'
// select * from product offset 6 -- đẩy xuống 6 sp và lấy từ cái thứ 7

// select * from product where id = '4' or id = '5'

// select * from product where id in ('4', '5') -- viết gọn của or

// select * from product where id not in ('4', '5') -- cho kq ngoài những id này

// select * from product as pro
// ALIAS--alias
// select product.id, product.price from product

// select id, price from product -- viết gọn của product.id, product.price

// select pro.id, pro.price from product as pro

// select * from product where name_product like '%giay%'

// select * from product

// insert into product (id, name_product, price, parent_type, type)
// values ('11', 'ao nam', '300000', 'do nam', 'ao thun nam')

// select * from product where id = '55'
// select distinct parent_type from product

// select min(price) from product

// select max(price) from product

// select avg(price) from product 

// select sum(price) from product

// select count(id) from product

// select * from product where id between '4' and '9'

// --primary key & foreign key

// create table buy (
// 	id serial, 
// 	id_san_pham varchar (20) not null, --not null là yêu cầu phải có dữ liệu 
// 	so_luong int not null,
// 	ngay_mua date,
// 	size varchar (10), 
// 	color varchar (20), 
// 	foreign key(id_san_pham) references product(id)
// )
// --xoá table => contraint : có ràng buộc nhưng khi chạy lệnh này thì không xóa được vì lúc này buy phụ thuộc vào product
// drop table product 

// --xóa table no contraint 
// drop table product CASCADE
// --xóa cột của buy
// alter table buy
// drop column so_luong

// alter table buy
// add column so_luong int not null default 1

// insert into buy (id_san_pham, so_luong, ngay_mua, size, color)
// values ('15', 10, '2021-11-10', 'm', 'yellow')

//Foreign key phải được tham chiếu đến primary key của bảng được liên kết, vì vậy bảng mẹ được liên kết phải được đặt primary key trước.


// select * from buy

// create table product(
// 	id varchar (255) primary key unique not null,
// 	ten_san_pham varchar (255) not null, 
// 	gia int not null,
// 	id_loai_cha int not null,
// 	loai varchar (255)
// )
// alter table product add column ton_kho boolean

// select * from product 

// drop table buy

// create table loai_cha (
// 	id serial,
// 	ten_loai varchar (255)
// )
// create table orders(
// 	id_san_pham varchar (255),
// 	so_luong int default 1, 
// 	ngay_mua date, 
// 	size varchar (20), 
// 	color varchar (20) default 'white'
// )

// INSERT INTO public.product(
// 	id, ten_san_pham, gia, id_loai_cha, ton_kho)
// 	VALUES ('id6','Ao so mi nu', '250000', 1, false);
// select * from product
// update product set id_loai_cha = '2' where id ='id6'

// select product.ten_san_pham, product.gia, loai_cha.ten_loai 
// from loai_cha
// join product 
// on loai_cha.id = product.id_loai_cha
// where product.id_loai_cha = 1

// select * from loai_cha 
// join product 
// on loai_cha.id = product.id_loai_cha

// order by product.gia asc --sắp xếp từ thấp đến cao/desc từ thấp đến cao

// --ADIAS đặt tên table ngắn gọn "as" 
// select * from loai_cha as lc
// join product as pro 
// on lc.id = pro.id_loai_cha
// order by pro.gia desc

// --join 3 table voi nhau co MQH lien ket 
// select * from orders as od
// join product pr
// on od.id_san_pham = pr.id
// join loai_cha as lc
// on lc.id = pr.id_loai_cha

// select * from product 
// join loai_cha 
// on product.id_loai_cha = loai_cha.id

// --Nghiên cứu import dữ liệu vào Postgre


