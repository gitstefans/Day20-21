
var textArea = document.getElementById("textArea");
var str = "";
var capsValue = false;
var value = "";
var shift = false;
var resVal = "";

// if(document.getElementById('caps-lock').clicked == true) {
//         alert("clicked");
//     };
function btnClick(id){
    value = document.getElementById(id).innerHTML;
    if(shift === true)
    {
        capsValue = false;
        resVal = value.toUpperCase();
        //resVal.toUpperCase();
        //alert(resVal);
        textArea.innerHTML += resVal;
        shift = false;
        
    } else if(capsValue === true){
        textArea.innerHTML += value.toUpperCase();
    }
    else{
    // if(capsValue === true){
    //     
    // } else {
        textArea.innerHTML += value; 
        str = textArea.innerHTML;
    }
}
function capsLock() {
    capsValue = !capsValue;
}
function shiftClick() {
    shift = true;
}
function enterBtn() {
    textArea.innerHTML += '\r\n';
}

function btnOk() {
    alert(textArea.innerHTML);
}
function backSpace(){
    var newStr = "";
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