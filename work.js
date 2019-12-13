var rand1=Math.random()*6;
rand1 =Math.floor(rand1)+1;
var rand2=Math.random()*6;
rand2 =Math.floor(rand2)+1;

var img1=document.querySelector('.img1');
img1.setAttribute("src","images/dice"+rand1+".png");

var img2=document.querySelector('.img2');
img2.setAttribute("src","images/dice"+rand2+".png");

var title=document.querySelector("h1");

if(rand1==rand2)
{
  title.innerHTML="DRAW!";
}
else if(rand1 >rand2)
{
  title.innerHTML="🚩Player 1 Wins";
}
else{
  title.innerHTML="Player 2 Wins 🚩";
}
