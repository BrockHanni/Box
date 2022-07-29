document.getElementById("growbtn").addEventListener ("click", function(){
           
   document.getElementById("box").style.height="250px";

});

document.getElementById("growbtn").addEventListener ("click", function(){
  
  document.getElementById("box").style.width="250px";

});

document.getElementById("shrinkbtn").addEventListener ("click", function(){
  
  document.getElementById("box").style.height="25px";

});

document.getElementById("shrinkbtn").addEventListener ("click", function(){
  
  document.getElementById("box").style.width="25px";

});

document.getElementById("resetbtn").addEventListener ("click", function(){
  
  document.getElementById("box").style.width="150px";
});

document.getElementById("resetbtn").addEventListener ("click", function(){
  
  document.getElementById("box").style.height="150px";
});

document.getElementById("resetbtn").addEventListener ("click", function(){
  const box = document.getElementById('box');
  box.style.backgroundColor = 'gray';
});


document.getElementById("resetbtn").addEventListener ("click", function(){
  const box = document.getElementById('box');
  box.style.opacity = '100%';
});

document.getElementById("greenbtn").addEventListener ("click", function(){

  const box = document.getElementById('box');
  box.style.backgroundColor = 'green';
});

document.getElementById("redbtn").addEventListener ("click", function(){

   const box = document.getElementById('box');
box.style.backgroundColor = 'red';
});

document.getElementById("orangebtn").addEventListener ("click", function(){

   const box = document.getElementById('box');
   box.style.backgroundColor = 'orange';
});

document.getElementById("yellowbtn").addEventListener ("click", function(){

   const box = document.getElementById('box');
   box.style.backgroundColor = 'yellow';
});

document.getElementById("bluebtn").addEventListener ("click", function(){

   const box = document.getElementById('box');
   box.style.backgroundColor = 'blue';
});

document.getElementById("purplebtn").addEventListener ("click", function(){

   const box = document.getElementById('box');
   box.style.backgroundColor = 'purple';
});
document.getElementById("fadebtn").addEventListener ("click", function(){
   
   const box = document.getElementById('box');
   box.style.opacity = '50%';
});