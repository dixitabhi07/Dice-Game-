var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;
var randomimage="dice"+n1+".png";
var randomimagesource="images/"+randomimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


var n2=Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;
var randomimage2="dice"+n2+".png";
var randomimagesource2="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if(n1>n2){
  document.querySelector("h1").innerHTML="Winner Player 1";
}
else if (n1===n2) {
  document.querySelector("h1").innerHTML="Game Draw";


}
else{
    document.querySelector("h1").innerHTML="Winner Player 2";
}
