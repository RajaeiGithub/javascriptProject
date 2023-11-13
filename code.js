//scroll
function visibel(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    document.getElementById("head1").style.background = "none";
    document.getElementById("mySidenav").style.top = 0;

     }
else
{
     document.getElementById("head1").style.backgroundImage = "linear-gradient(to top,#0553a0,#0884ff)";
    document.getElementById("mySidenav").style.top = "87px";
     
}}




//change size
function checksize(){
     if(window.innerWidth >= 900){
     document.getElementById("mySidenav").style.width = "17%";
     document.getElementById("grand").style.marginLeft = "19%";
     document.getElementById("grand").style.width = "73%";
     document.getElementById("fot").style.marginLeft = "17%";
   }
   
   else{
     document.getElementById("mySidenav").style.width = "0";
     document.getElementById("grand").style.width = "90%";
     document.getElementById("grand").style.marginLeft= "2%";
     document.getElementById("fot").style.marginLeft = "0";
   }}
   

   

//login img
 function imgshow(){
  if(window.innerWidth >=  1000  ){
    
    document.getElementById("maingroundL").style.width = "900px";
    document.getElementById("imggroundL").style.width = "450px";   
  }
  else{
    document.getElementById("maingroundL").style.width = "450px";
    document.getElementById("imggroundL").style.width = "0"; 
  }
 }

 
