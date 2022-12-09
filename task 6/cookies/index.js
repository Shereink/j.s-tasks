
var pass = document.getElementById("pass")
var uname = document.getElementById("name")
var check = document.getElementById("check")

function submit1() {
    

    localStorage.setItem("password", pass.value);
    localStorage.setItem("username", uname.value);
    localStorage.setItem("check rememmber",check.value);
    document.cookie = `myCookie=${uname.value};expires=Tue, 08 Dec 2022 13:19:36 GMT;` 
}

function del() {
    document.cookie = `myCookie=${uname.value};expires=Tue, 04 Dec 2022 13:19:36 GMT;` 
}

// localStorage.clear();






// document.cookie="key1=value1;expires=date";

// CreationTime:"Tue, 06 Dec 2022 13:19:36 GMT"
// var newDate = new Date(); 
//  newDate.setTime(newDate.getDate() - 1); 
  
//  newDate.toGMTString();
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";