

var clik_img= document.getElementById("clik_img");
var imgs= document.getElementsByClassName("imgs");
console.log(imgs)
var top_img=document.getElementById("top_img");
var buttom_img=document.getElementById("buttom_img");

// // clik_img.style.display="none"

function display(){
    clik_img.style.visibility="hidden"
    buttom_img.style.display="block"
    buttom_img.style.bottom=0+"px"

    top_img.style.display="block"
    top_img.style.top=0+"px"
    top_img.style.right=0+"px"

//    for(var i=0;i<imgs.length;i++){
//     imgs[i].style.bottom=0+"px";
//     imgs[i].style.display="block";}
   }
    