
var textArea = document.getElementById("textArea");
var str = "";
var capsValue = false;
var value = "";

// if(document.getElementById('caps-lock').clicked == true) {
//         alert("clicked");
//     };
function btnClick(id){
    value = document.getElementById(id).innerHTML;
   
    textArea.innerHTML += value; 
    str = textArea.innerHTML;
    
    
}
// function capsLock(value) {
//     capsValue = true;
//     //textArea.innerHTML -= capsValue;
//     textArea.innerHTML += value.toUpperCase();
// }


function btnOk() {
    alert(textArea.innerHTML);
}
function backSpace(){
    var newStr = "";
    //var textArea = document.getElementById("textArea").innerHTML;
    for(var i = 0; i < str.length-1; i++){
        newStr += str[i];
    }
    str = newStr;
    
    textArea.innerHTML = "";    
    textArea.innerHTML = newStr;
}
function space() {
    textArea.innerHTML += " ";
}