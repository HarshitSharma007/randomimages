const container=document.querySelector(".CONTAINER");
let url="https://source.unsplash.com/random/";
for(let i=0;i<250;i++){
    let a=Math.floor(Math.random()*100)+300;
     let b=Math.floor(Math.random()*100)+300;
    let img=document.createElement('img');
    url=url +a+"*"+b;
   img.src=url ;
   
    container.appendChild(img);
}