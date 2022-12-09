

var answer = document.getElementById("Answer");

function EnterNumber(num){
    answer.value+=num;
}

function EnterOperator (operator){
    answer.value+=operator;
}

function EnterEqual (){
    answer.value=eval(answer.value)
}

function EnterClear (){
    answer.value=""
}




