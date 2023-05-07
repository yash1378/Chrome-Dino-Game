
//Changing the size of dino using the buttons

let h = 60;
let w = 60; 

function myFunction() {
  var img = document.getElementById("myimage1");
  img.style.height = h+"px";
  img.style.width = w+"px";
  h=h+3;
  w=w+3;
}

function mFunction() {
  var img = document.getElementById("myimage1");
  img.style.height = h+"px";
  img.style.width = w+"px";
  h=h-3;
  w=w-3;
}



//dino running , jumping ,catus coming logic

let i=0;
let b=5;
let a = 12;
let j=0;
let k=0;
let x=0;
let p = 0;
let s = 0;
let high = 0;
function paint(){
    if(i<0){
      console.log("clicked...")
      document.getElementById("myimage1").src="./imgs/dino-stationary.png";
        let c = 0;
        if(j<16){
          document.getElementById("myimage1").style.bottom=`${c+j*20}px`;
          p=c+j*20;
          i++;
          j++;  
        }
        if(j==16){
          let d = 300;
          document.getElementById("myimage1").style.bottom=`${d-k*20}px`;
          p=d-k*20
          i++;
          k++; 
        }
    }

    else if(i%a>5){
      document.getElementById("myimage1").src="./imgs/dino-run-1.png";
      i++;
      j=0;
      k=0;
    }
    else{
      document.getElementById("myimage1").src="./imgs/dino-run-0.png";   
      i++;
      j=0;
      k=0;
    }

    if (x < 170) {
      document.getElementById("cac").style.left = `${100 - x * 0.6}vw`;
      x++;
    } else {
      document.getElementById("cac").style.left = `100vw`;
      x=0;
    }


    if(x>136  && p<70 &&x<144){
    alert("Game Over !")
    i=0;
    b=5;
    a = 12;
    j=0;
    k=0;
    x=0;
    s=0;
    document.getElementById("myimage1").style.bottom=`0px`;
    }
    else{
      s++;
      document.getElementById("sc").textContent=s;
      if(high<s){
        high=s;
      }
      localStorage.setItem("hiscore",`HiScore : ${high}`)
      let lastname = localStorage.getItem("hiscore")
      document.getElementById("high").innerHTML = lastname;
    }


    window.requestAnimationFrame(paint);


}
  window.requestAnimationFrame(paint);



//jumping timing
function sFunction(){
  console.log(i);
  i=-32;
}
//jump should execute at pressing of ArrowUp
document.addEventListener('keydown', e=> {
  if(e.key=="ArrowUp"){
    sFunction();
  }
  console.log('Key pressed:',e.key);
});
