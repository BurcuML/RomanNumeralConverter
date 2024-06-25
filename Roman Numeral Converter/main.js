const convertBtn =document.getElementById("convert-btn");
const output=document.getElementById("output");
const number=document.getElementById("number");

const romanNum = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];
const conv = [];

function convertToRoman() {
  if(number.value===""){
    output.innerHTML = "Please enter a valid number"
  }
  else if(number.value<0){
     output.innerHTML = "Please enter a number greater than or equal to 1"
  }
  for(i=0; i<romanNum.length; i++){
    while(number.value>=romanNum[i][1]){
      conv.push(romanNum[i][0]);
      number.value -= romanNum[i][1];
      output.innerHTML = conv.join("");
    }
  }
  conv.length = 0;
}