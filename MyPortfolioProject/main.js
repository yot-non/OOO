"use stricpt";

{
  const images = [
    "img/ooo.jpeg",
    "img/pic01.png",
    "img/pic02.png",
    "img/pic03.png",
    "img/pic04.png",
    "img/pic05.png",
    "img/pic06.png",
    "img/pic07.png",
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById("main");
  mainImage.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;

    const li = document.createElement("li");
    if (index === currentIndex) {
      li.classList.add("current");
    }
    li.addEventListener("click", () => {
      mainImage.src = image;
      const thumbnails = document.querySelectorAll(".thumbnails > li");
      thumbnails[currentIndex].classList.remove("current");
      currentIndex = index;
      thumbnails[currentIndex].classList.add("current");
    });
    li.appendChild(img);
    document.querySelector(".thumbnails").appendChild(li);
  });

  const next = document.getElementById("next");
  next.addEventListener("click", () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll(".thumbnails>li")[target].click();
  });
  const prev = document.getElementById("prev");
  prev.addEventListener("click", () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll(".thumbnails>li")[target].click();
  });
  let timeoutId;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1000);
  }

  let isPlaying = false;

  const play = document.getElementById("play");
  play.addEventListener("click", () => {
    if (isPlaying === false) {
      playSlideshow();
      play.textContent = "Pause";
    } else {
      clearTimeout(timeoutId);
      play.textContent = "Play";
    }
    isPlaying = !isPlaying;
  });
}

// {
//   const otherScores =[10,20];
//   const scores = [80,90,40,70,...otherScores];
// console.log(scores);

// }

// scores.splice(1,1,40,50 );
// for (let i = 0; i < scores.length;i++){
// console.log(`Score: ${scores[i]}`);

// console.log(`Score:$(scores[0])`);
// console.log(`Score:$(scores[1])`);
// console.log(`Score:$(scores[2])`);

// for(let i =0; i< 3; i ++){

// console.log(scores[1]);
// scores[2] = 44;
// console.log(scores);

// scores =10;
// console.log(scores.length);

// const score1 =80;
// const score2=90;
// const score3=40;
// function sum(a, b, c){
//   return a+b+c;
// const sum=(a, b, c)=>a+b+c;

// sum(1,2,3);
// sum(3,4,5);

// const total=sum(1,2,3)+sum(3,4,5);
// console.log(total);

// const double=function(a){
// return a * 2 ;
// }

// const double = a=>a*2;
// console.log(double(12));

// function showAd(message){

//   console.log('-----------');
//   console.log(`----{$message}-----`);
//   console.log('-----------');
// }

// showAd('Header Ad');
// console.log('Tom is great');
// console.log('-----------');
// console.log('Bob is great');
// showAd('Ad');
// console.log('Tom is great');
// console.log('-----------');
// console.log('Bob is great');

// let hp = -50;

// for(let i = 1; i <= 10; i++){
// if(i===4){
// if(i%3===0){
// continue;
// }
// if(i===4){
//   break;
// }
// console.log(i);
// }

// do {
//   console.log(`${hp}HP left`);
//   hp -= 15;
// }while (hp>0);

// const score =60;
// const name ='taguchi';

// if(score >= 50){

//   if(name === 'taguchi'){
//     console.log('GOOD');
//   }
// }
// if(score >= 50 && name === 'taguchi'){
//   console.log('GOOD');
// }

// if(score >= 80){
//   console.log('Great');
// }else if (score >= 60){
// } else {
//   console.log('OK...');
// }
// (score >= 80)? console.log('Great') : console.log('OK...');

// console.log(typeof 'hello');
// console.log(parseInt('5',10) + 3);
// console.log(typeof true);
// console.log(typeof undifined);
// console.log(typeof null);

// console.log(parseInt('hello',10))
// const price=1200
// console.log(price >1000);

// console.log(Boolean(0));

// let price =500;

// price+=100;

// price*=2;

// price++;

// console.log(price);
// console.log(price*140);
// console.log(price*160);

//  price =170;

// console.log(price*140);
// console.log(price*160);
