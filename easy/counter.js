// try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
// function counter() {
//   let count = 0;
//   setInterval(() => {
//     count++;
//     console.log(count);
//   }, 1000);
// }
let intervalId = 0;
let count = 0;
function startCounter() {
  intervalId = setInterval(() => {
    count++;
    // console.log(coount);
    const element = document.querySelector("#timer");
    element.innerHTML = count;
  }, 1000);
}

function stopCounter() {
  clearInterval(intervalId);
}
