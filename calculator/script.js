let input = document.querySelector("input");

function addvalue(element){
    input.value+= element;
}
function clearval(){
    input.value="";
}
function del(){
    input.value = input.value.slice(0,-1);
}

function evaluateval(){
    input.value = eval(input.value);
}