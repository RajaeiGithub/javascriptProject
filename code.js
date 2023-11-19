// vareibel
topbutton = document.getElementById("topbot");  // top button



//scroll
function visibel(){
if( window.innerWidth >= 600 ){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    document.getElementById("head1").style.background = "none";
    document.getElementById("mySidenav").style.top = 0;
     }
else
{
     document.getElementById("head1").style.backgroundImage = "linear-gradient(to top,#0553a0,#0884ff)";
    document.getElementById("mySidenav").style.top = "87px";     
}}

// top button
if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
  topbutton.style.display = "block";
} else {
  topbutton.style.display = "none";
}}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
   // For Chrome, Firefox, IE and Opera
}



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
   }  }

// chapter top nav & side nav
  function checksizenav(){
    if( window.innerWidth >= 600 ){
      document.getElementById("navbar").style.display = "block";

      // مربوط به  showli
      document.getElementById("subul1").style.display = "inline-block";
      document.getElementById("subul2").style.display = "inline-block";
      document.getElementById("ar1").innerHTML = "▾";
      document.getElementById("ar2").innerHTML = "▾";
    }
    else{
      document.getElementById("navbar").style.display = "none";
      
      // مربوط به  showli
      document.getElementById("subul1").style.display = "none";
      document.getElementById("subul2").style.display = "none";
      document.getElementById("ar2").innerHTML = "▶";
      document.getElementById("ar1").innerHTML = "▶"; 
    }
  }  
   

   
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



//sidenav  show
 function showsidenav(){
  document.getElementById("navbar").style.display = "block";
 }
 function closesidenav(){
  document.getElementById("navbar").style.display = "none";
 }

 

// showli  in  sidenav
if( window.innerWidth <= 600 ){
  document.getElementById("subul1").style.display = "none";
  document.getElementById("subul2").style.display = "none";
  document.getElementById("ar2").innerHTML = "▶";
  document.getElementById("ar1").innerHTML = "▶";
}
function showli1(){   if(window.innerWidth <= 600){  
  if(document.getElementById("subul1").style.display == "none")
  {
    document.getElementById("subul1").style.display = "block";
    document.getElementById("ar1").innerHTML = "▼";
}
else{
  document.getElementById("subul1").style.display = "none";
  document.getElementById("ar1").innerHTML = "▶";
}}
}
function showli2(){   if(window.innerWidth <= 600){
  if(document.getElementById("subul2").style.display == "none")
  {
    document.getElementById("subul2").style.display = "block";
    document.getElementById("ar2").innerHTML = "▼";
}
else{
  document.getElementById("subul2").style.display = "none";
  document.getElementById("ar2").innerHTML = "▶";
}}
}







 

/*  **** window.onscroll = function() {scrollFunction()}; ****
 
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}   */