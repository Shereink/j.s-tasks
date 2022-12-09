// class Person {
//     #id;
//     name;
//     age;

//     constructor(a, b, c) {
//         if (this.constructor == Person) {
//             throw 'error this is abstract class'
//         }
//         this.#id = a
//         this.name = b
//         this.age = c
//     }
//     setID(x) {

//         this.#id = x;
//     }

//     getID() {
//         return this.#id;
//     }

// }



// class Employee extends Person {

//     static count = 0
//     constructor(a, b, c, salary) {
//         super(a, b, c)
//         this.salary = salary
//         Person.count++
//     }

//     static displayHTRules() {
//         document.write("bjkbkbkbkhb..hhbjhv;.buogbjkbuilgwd'<br/>'")
//         document.write("bjkbkbkbkhb..hhbjhv;.buogbjkbuilgwd '<br/>'")
//         document.write("bjkbkbkbkhb..hhbjhv;.buogbjkbuilgwd '<br/>'")
//         document.write("bjkbkbkbkhb..hhbjhv;.buogbjkbuilgwd '<br/>'")
//     }

//     //task two/////////////////////////////////////////////////////////////////////

//     shoeSalary() {

//         document.write(this.salary)
//     }
//     increasesalary() {
//         return this.salary + 100
//     }

// }
// // task one ////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////

// Employee.displayHTRules()
// // console.log(Employee.displayHTRules)

// class Student extends Person {

//     constructor(a, b, c, grade) {
//         super(a, b, c)
//         this.grade = grade
//     }


// }
// // task three /////////////////////////////////////////////////////////////
// var Address = {
//     city: "Aswan",
//     street: "654ss",
//     zip_code: "555"
// }
// var ScientificDepartment = {
//     location: "Aswan",
//     Address,
//     display() {
//         document.write("Location: ")
//         document.write(ScientificDepartment.location)
//         document.write("<br>Address: ")
//         document.write(Address.street)
//         document.write(" ")
//         document.write(Address.city)
//         document.write(" ")
//         document.write(Address.zip_code)
//     }
// }

// ScientificDepartment.display()



// // task four /////////////////////////////////////////////////////////////



// var array = [10, 2, 3, 57, 8, 7, 23, 50];

// // function maxx(...arr) {
// //     for (i = 0; i < array.length; i++) {
// //         return Math.max(parseInt(array[i])) ;}
// //     return arr}
// // console.log(Math.max(...array))
// // console.log(array)

//         function max(...arr) {
//            return Math.max(...arr)
//         }
//        console.log(max(...array)); 


//        //task five //////////////////////////////////////////////////////////////////
//        //////////////////////////////////////////////////////////////////////////////////

//        var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 
//        var Str = 0 

//        for(var i = 0; i < fruits.length; i++){
//            if (typeof fruits[i]=="string") {
//                Str = 1
//            }
//        }

//        if (Str == 1) {
//            for(var i = 0; i < fruits.length; i++){
//                if (fruits[i].match(/^a/)) {
//                    console.log("some of array elements starts with 'a'");
//                }
//            }
//        }

//        var b_s = fruits.filter(function(arr){
//            return arr.match(/^b/) || arr.match(/^s/)
//        })

//        console.log(b_s);


//        console.log("Previous array")
//        fruits.forEach(element => {
//            console.log(element);
//        });

//        console.log("new array");
//        b_s.forEach(element => {
//            console.log(element);
//        });



//    /////////task six //////////////////////////////////////////////////////////////////////////////

//    console.log(st.entries())
   // console.log(st)
     
   // var arr ;
   // st.forEach( function(item)
   // { st.values==arr  }
   // )
   // console.log(arr)


//    function toFindDuplicates(arry) {
//       var uniqueElements = st //new Set(arry); 
//       var filteredElements = arry.filter(item => {
//           if (uniqueElements.has(item)) {
//               uniqueElements.delete(item);
//           } else {
//               return item;
//           }
//       });
  
//       return [...new Set(uniqueElements)]
//   }
//   var st=new Set(["Eygaypt", "U.S.A","U.K","ASK","U.S.A"])
//   var duplicateElements = toFindDuplicates(st);
//   console.log(duplicateElements(st));


   



