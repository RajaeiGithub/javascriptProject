// Added Elements with Javascript
  // document.body.removeEventListener( "scroll" , visibel); 
  // bod.addEventListener("scroll" , visibel);


// variables
    // Html
var topbutton = document.getElementById("topbot");  
var pointerButton = document.getElementById("pointerclose")
    // Javascript  
var saveloc = 0;   
var bod = document.body;
var Booly = true;
var isOpen = true;



//scroll
function visibel(){
    // top button & header & sidebar
         if (Booly){
         if(saveloc > 250){
  if (document.documentElement.scrollTop < saveloc) {
  topbutton.style.display = "block";
  document.getElementById("head1").style.visibility = "visible";
  saveloc = document.documentElement.scrollTop;   // (اینجا و 2 جا دیگر) برای رفع ارور  
  document.getElementById("mySidenav").style.top = "90px";  
  document.getElementById("pointer").style.top = "90px";
  //  document.getElementById("head1").style.background = "none";
} else {
  topbutton.style.display = "none";
  document.getElementById("head1").style.visibility = "hidden";
  saveloc = document.documentElement.scrollTop; // 2
  document.getElementById("mySidenav").style.top = "0px";
  document.getElementById("pointer").style.top = "0px";
  //document.getElementById("head1").style.backgroundImage = "linear-gradient(to top,#0553a0,#0884ff)";
}}       else{
  topbutton.style.display = "none";
  saveloc = document.documentElement.scrollTop;  // 3
}           
}}

// Scroll To Top _ Button
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE and Opera
 // saveloc = 0;
}

// close pointer side bar _ Button
function closepointer(){
  if(isOpen){
      isOpen = false;
      pointerButton.innerHTML = "◀";
      pointerButton.style.right = "6px";
  }else{
      isOpen = true
      pointerButton.innerHTML = "▶";
      pointerButton.style.right = "160px";
  }
  checksize();
}


// change size   for   Side Bar  &  pointer
function checksize(){
  if(window.innerWidth >= 900){
    var b = (window.innerWidth) - 235;

    // change size   for   Pointer
    if(window.innerWidth >= 1200){
        pointerButton.style.display = "inline-block";

        if(isOpen){
          document.getElementById("pointer").style.width = "200px";
          document.getElementById("bgrand").style.marginRight = "200px";
          document.getElementById("fot").style.marginRight = "200px";
          b -= 200; }
          else{
            document.getElementById("pointer").style.width = "0px";
            document.getElementById("bgrand").style.marginRight = "0px";
            document.getElementById("fot").style.marginRight = "0px";
          }

    } else{
        pointerButton.style.display = "none";  
        
            document.getElementById("pointer").style.width = "0px";
            document.getElementById("bgrand").style.marginRight = "0px";
            document.getElementById("fot").style.marginRight = "0px";
    }

document.getElementById("mySidenav").style.width = "200px";
document.getElementById("bgrand").style.width = b+"px";
document.getElementById("fot").style.marginLeft = "200px";

} else{   
pointerButton.style.display = "none";

document.getElementById("mySidenav").style.width = "0";
document.getElementById("pointer").style.width = "0px";
document.getElementById("bgrand").style.width = "99%";
document.getElementById("bgrand").style.marginRight = "0px";
document.getElementById("fot").style.margin = "0";
}}



// chapter top nav & side nav
if( window.innerWidth <= 600 ){
  document.getElementById("subul1").style.display = "none";
  document.getElementById("ar1").innerHTML = "▶";
  document.getElementById("subul2").style.display = "none";
  document.getElementById("ar2").innerHTML = "▶";
}
  function checksizenav(){
    if( window.innerWidth >= 600 ){
      document.getElementById("navbar").style.display = "block";

      // مربوط به  showli
      document.getElementById("subul1").style.display = "inline-block";
      document.getElementById("ar1").innerHTML = "▾";
      document.getElementById("subul2").style.display = "inline-block";
      document.getElementById("ar2").innerHTML = "▾";
    }
    else{
      document.getElementById("navbar").style.display = "none";
      
      // مربوط به  showli
      document.getElementById("subul1").style.display = "none";
      document.getElementById("ar1").innerHTML = "▶"; 
      document.getElementById("subul2").style.display = "none";
      document.getElementById("ar2").innerHTML = "▶";
    }
}  
   

   
// login img
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



// sidenav  show  Button
 function showsidenav(){
  document.getElementById("navbar").style.display = "block";
  Booly = false;
  topbutton.style.display = "none";
 }
 function closesidenav(){
  document.getElementById("navbar").style.display = "none";
  Booly = true;
  // visibel();
}

// showli  in  sidenav
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