

// function box(_width, _highet, arr_book) {
//     this.width = _width;
//     this.highet = _highet;
//     this.arr = arr_book;

// }

// function book(book_id, book_name, writer_name, num_of_pages) {
//     this.id = book_id;
//     this.bookname = book_name;
//     this.writername = writer_name;
//     this.numpages = num_of_pages;
// }

// var sum = 0;

// box.prototype.sum = function () {
//     for (i = 0; i < this.arr.length; i++) {
//         sum += this.arr[i].numpages

//     }
//     return sum;
// }

// var f = new box()

// box.prototype.clac = function () {
//     return this.width + this.height;
// }

// var B1 = new book(1, "js", "negm", 100);
// var B2 = new book(2, "c++", "negm", 150);
// var B3 = new book(3, "html", "negm", 140);
// var B4 = new book(3, "css", "negm", 130);


// var box1 = new box(10, 20, [B1, B2, B3, B4]);
// console.log(box1.sum())



// /// task two ////////////////////////////////////////////////////////////////

// function Point3D(x = 0, y = 0, z = 0) {

//     this.x = x;
//     this.y = y;
//     this.z = z;

//     Point3D.prototype.print3DPoint = function () {



//         console.log(this.x, this.y, this.z)

//     }

//     Point3D.prototype.calculateDistance = function (p1) {

//         cal = Math.sqrt((p1.x - this.x) ^ 2 + (p1.y - this.y) ^ 2 + (p1.z - this.z) ^ 2);
//         return cal

//     }


// }
// s = new Point3D()
// p1 = new Point3D(1, 2, 3)
// s.print3DPoint();
// console.log(s.calculateDistance(p1));



// // task three///////////////////////////////////////////////////////////////////////////


// function student(courses) {
//     this.courses = courses
//     student.prototype.display = function () {
//         for (var i = 0; i <= courses.length - 1; i++) {

//             if (courses[i].Name == "ahmed")

//                 console.log("courses : " + this.courses[i].Objact)
//         }
//     }
//     student.prototype.calcgrades = function () {
//         var calc = 0;
//         for (var i = 0; i <= courses.length - 1; i++) {

//             if (courses[i].Name == "ahmed")

//                 calc = calc + courses[i].Grades
//         }
//         return calc;
//     }
// }
// s1 = new student([{ "Name": "ahmed", "Age": 20, "Objact": "Math", "Grades": 30 }, { "Name": "ahmed", "Age": 25, "Objact": "Programing", "Grades": 20 }, { "Name": "abdo", "Age": 30, "Objact": "PHP FULL Stack", "Grades": 40 }])
// s1.display()
// s1.calcgrades()
// console.log("Total Grads :" + s1.calcgrades())










