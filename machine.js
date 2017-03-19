/**
 * Created by apoorvmittal on 1/5/17.
 */
var up,
    lo,
    eleup=document.getElementById("upper"),
    elelo=document.getElementById("lower"),
    result,
    digit=3;
window.onload=function () {
  if(window.localStorage&&localStorage.Number_digit){
    digit=localStorage.Number_digit;
  }
  document.getElementById("add").value=digit;
  up=gen(digit);
  lo=gen(digit);
  if(up<lo){
    var temp=up;
    up=lo;
    lo=temp;
  }
  eleup.innerHTML=up;
  elelo.innerHTML=lo;
  eleup.style.fontSize = "100px";
  elelo.style.fontSize = "100px";
}
function gen(ele) {
    return Math.floor(Math.random()*(Math.pow(10,ele)));
}
function checkans(sign) {
    var givans=document.getElementById("ans").value;
    if(sign==1)
      result=up+lo;
    else if (sign==2)
      result=up-lo;
    else if (sign==3)
      result=up*lo;
    else
      result=up/lo;
    console.log(result);
    if(givans==result)
        alert("You are right");
    else
        alert("you are wrong and the correct answer is: "+result);
    location.reload(true);
}
function set(){
  var s=document.getElementById("add");
  if(window.localStorage){
    localStorage.Number_digit=parseInt(s.value);
  }
  location.reload();
}
