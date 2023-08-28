
//toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const ham = document.getElementById('ham');
const pam = document.getElementById('pam');
const dash = document.getElementById('dash');
const task = document.getElementById('task');

function close() {
  ham.classList.toggle('opacity-0');
  ham.classList.toggle('hidden');
};

hamburger.addEventListener('click', close);
pam.addEventListener('click', close);
dash.addEventListener('click', close);
task.addEventListener('click', close);


//date for processing
const date = new Date();

const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();

console.log(day);
console.log(month);
console.log(year);

const pro = document.getElementById("pro");
pro.textContent = day;

const remin = document.getElementById("remin");
remin.textContent = month ;

let rando = Math.floor(Math.random()*10)+1;
const manual = document.getElementById("manual");
manual.textContent = rando ;



// document.addEventListener("DOMContentLoaded", function () {
//     const hamburger = document.getElementById('hamburger');
//     const ham = document.getElementById('ham');


//     hamburger.addEventListener('click', () => {
//       ham.classList.toggle('opacity-0');
//       ham.classList.toggle('hidden');
//     });
    
//   });
// document.addEventListener("DOMContentLoaded", function () {
//   const pam = document.getElementById('pam');
//   const ham = document.getElementById('ham');


//   pam.addEventListener('click', () => {
//     ham.classList.toggle('opacity-0');
//     ham.classList.toggle('hidden');
//   });
  
// });
