
// function open (){
    // window.open ("","","_blank")

// }

var fullname= document.getElementById("name")
function border (){
fullname.style.border= "3px solid blue" ;
}
var error = document.getElementById("error")
function lost() {
    fullname.style.border="1px solid black"
    console.log(fullname.value.length);
    if (fullname.value.length <3 || fullname.value =="" ){
        error.style.display="block"
    }else{
        error.remove();
    }
}






