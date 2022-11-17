//bài 1:
// Sơ đồ 3 khối

/**
 * INPUT: lương 1 ngày , số ngày làm
 *
 * PROCESS: (pseudo code)
 *      1. lấy input (hardcode) lương 1 ngày  = 100; số ngày làm = 30;
 *      2. công thức tính tiền : lương 1 ngày * số ngày làm
 *      3. In kết quả
 *
 * OUTPUT: lương
 */

var workingDays = 20;
var salaryPerDay = 100000;

var totalSalary = salaryPerDay * workingDays;
console.log("Tổng lương là: " + totalSalary);

// bài 2:
// Sơ đồ 3 khối 
/**
 * INPUT: giá trị 5 số thực
 * 
 * PROCESS:
 * 1. Tính tổng 5 số thực
 * 2. Lấy tổng đó chia cho 5
 * 3. In kết quả
 * 
 * OUTPUT: Giá trị trung bình 5 số thực
 */
var number1 = 5;
var number2 = 6;
var number3 = 7;
var number4 = 8;
var number5 = 9;

var average = (number1+number2+number3+number4+number5)/5
console.log("Giá trị trung bình là: " + average);

// bài 3: quy đổi tiền
// Sơ đồ 3 khối 
/**
 * INPUT: giá trị tiền USD, tỷ giá tiền đô và VND
 * 
 * PROCESS:
 * 1. Lấy giá trị tiền USD nhân với tỷ giá.
 * 2. In kết quả
 * 
 * OUTPUT: Giá trị quy đổi từ USD sang tiền VND 
 */

var dollar = 5;
var totalVND = dollar * 23500
console.log("Giá trị tiền VND là: " + totalVND );

// bài 4:
// Sơ đồ 3 khối 
/**
 * INPUT: chiều dài, chiều rộng hình chữ nhật
 * 
 * PROCESS:
 * 1. Chu vi hình chữ nhật bằng (dài + rộng) *2
 * 2. In kết quả
 * 3. Diện tích hình chữ nhật bằng dài * rộng.
 * 4. In kết quả
 * 
 * OUTPUT: Giá trị của chu vi và diện tích hình chữ nhật.
 */

var lenght=50;
var width = 30;

var perimeter = (lenght + width) *2;
console.log("Chu vi hình chữ nhật là: " +perimeter );

var area = lenght * width;
console.log("Diện tích hình chữ nhật là: " +area );


// bài 5:
// Sơ đồ 3 khối 
/**
 * INPUT: số có 2 chữ số.
 * PROCESS:
 * 1. lấy kí số hàng đơn vị của số ta lấy số đó chia lấy dư cho 10
 * 2. lấy kí số hàng chục của số ta lấy số đó chia cho 10, lấy làm tròn xuống.
 * 3. tổng của 2 kí số bằng số hàng đơn vị cộng số hàng chục.
 * 4. In kết quả
 * 
 * OUTPUT: Giá trị của chu vi và diện tích hình chữ nhật.
 */


var n = 45;
var num1 = n % 10; 
var num2 = Math.floor(n / 10);
var total = num1 + num2;
console.log("tổng 2 chữ số là: " +total);