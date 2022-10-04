let buttonConvert = document.getElementById("convert");
let buttonClear = document.getElementById("clear");
let inputCal = document.getElementById("cal");
let inputMil = document.getElementById("mm");

// convert button
buttonConvert.addEventListener("click", function(){
    
    var outputCal = inputCal.value * 0.254;
    var outputMil = inputMil.value * 3.937;

    if (outputCal) {
        inputMil.value = outputCal;
    } else {
        inputCal.value = outputMil;
    }
    
})

// clear button with Event Listener
// buttonClear.addEventListener("click", function(){
//     clearInput = document.getElementsByClassName('inputField');
//     for(input of clearInput){
//         inputCal.value = " ";
//         inputMil.value = " ";
//     } 
// })
 
// clear button with onclick Event 
function clearInput() {
    var eCal = document.querySelector("Enter Calibre");
    var eMil = document.querySelector("Enter Millimeter");
    inputCal.value = eCal;
    inputMil.value = eMil;
}