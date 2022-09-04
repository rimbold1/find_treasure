// for (let i = 0; i < 10; i++) {
//     let ask = prompt("What you'd like to add?");
//     $('body').append(`<p>${ask}</p>`);
// }


// for (let i = 0; i < 10; i++) {
//     let bodyPage = document.querySelector('body');
//     let question = prompt("Add something to your page");
//     let newElem = document.createElement('p').innerText(question);
//     bodyPage.append(newElem);
//     console.log(newElem);
// }

// $('body').append('<p>adwda</p>')

// $("h1").hide(1000).show(1000);
// $("h1").fadeOut(1000).fadeIn(1000)



// let freindsArray = ["Petya","Yura", "Dasha", "Roman", "Igor"];
// $('h1').text("My Friends");

// for (let i = 0; i < freindsArray.length; i++) {
//     const element = freindsArray[i];
//     $('body').append("<p>" + element + " Smells!" + "</p>").hide(3000).fadeIn(3000);
// };

// let timeSetter = 1000;

// for (let i = 0; i < 5; i++) {

//     $('h1').fadeOut(timeSetter).fadeIn(timeSetter).delay(5000);
//     // timeSetter += 1000;

// }


// $('h1').fadeTo(1000, 0.7); Робить обєкт невуидимим, другий аргумент задає ступінь невидимості.

// let time__one = 2000;
// let time__two = 3000;

// let button = document.getElementById("btn");
// button.addEventListener("click", alertSomeText);

// function alertSomeText(params) {
//     setTimeout(alert("This text is random"), 3000);
// }


// let timeOutId = [];

// function asd() {
//     timeOutId.push(setTimeout(function call() {
//         alert("this message could be stopped.");
//     }, 5000));
//     console.log(timeOutId);
// }


// let button = document.getElementById("btn");
// let clickFunc = button.addEventListener("click", asd);

// // console.log(timeOutId);

// //  Next button with stop timer function.

// let button__two = document.getElementById("btn__two");
// let stopTimer = button__two.addEventListener('click', stopper);

// function stopper() {
//     for (let i = 0; i < timeOutId.length; i++) {
//         const element = timeOutId[i];
//         clearTimeout(element);
//     }

//     // clearTimeout(timeOutId);
//     console.log(`${timeOutId} was canceled.`);
// }

// let timeSetter = 1000; //time in milliseconds that would by increased
// let counter = 0;
// let intervalId = setInterval(() => { console.log(counter++)}, timeSetter);

// const btn = document.getElementById('btn');
// const stop = btn.addEventListener('click', () => {
//     clearInterval(intervalId);
//     console.log("Таймер зупинено.", timeSetter);
// });

// const btn_two = document.getElementById('btn__two');
// const increaseTimerSpeed = btn_two.addEventListener('click', () => {
//     timeSetter += 1000;
//     // intervalId;
//     console.log("Швидкість таймеру збільшено", timeSetter);
// });

// const btn_three = document.getElementById('btn__three');
// const startTimer = btn_three.addEventListener('click', () => {
//     setInterval(() => { console.log(counter++)}, timeSetter);
//     console.log("Таймер відновлено.", timeSetter);
// });

// const timerWindow = document.getElementById('timer__container').innerHTML += counter;
// // const contentBox = timerWindow.innerHTML;
// // console.log(timerWindow)

// let leftOffset = 0; // 1

// const moveHeading = function () { //2
//     $('#heading').offset({ left: leftOffset}); //3
//     leftOffset += 2; //4

//     if (leftOffset > 200) { //5
//         leftOffset = 0;
//     }
// };

// setInterval(moveHeading, 15); //6
// function ask() {
//     prompt("2 * 10?", 100);
// };
// const headingElement = document.getElementById("heading");
// const askIfTrue = headingElement.addEventListener('click', ask);

// function checkIf() {
//     if (askIfTrue === 20) {
//         alert("the asnwer is correct.");
//     }
// };

// checkIf(askIfTrue);

// $("#html").mousemove(function(event) {
//     $("#heading").offset({left: event.pageX, top: event.pageY});
// });


// let clichHandler = function(event) {
//     console.log("Click! " + event.pageX + ' ' + event.pageY);
//     $("#heading").offset({left: event.pageX, top: event.pageY});
// };

// $("html").click(clichHandler);

// // console.log(document.getElementById('heading'));












// let direction = 'вправо';
// let offset = 0;

//     $("#heading").offset({ left: offset, top: offset });    // moving heading function

//     const moveHeading = function () {
//       if (direction === 'вправо') {
//         $("#heading").offset({ left: offset });
//         offset++;
//         if (offset > 200) {
//           offset = 0;
//           direction = 'вниз';
//         }
//       } else if (direction === 'вниз') {
//         $("#heading").offset({ top: offset });
//         offset++;
//         if (offset > 200) {
//           offset = 200;
//           direction = 'влево';
//         }
//       } else if (direction === 'влево') {
//         $("#heading").offset({ left: offset });
//         offset--;
//         if (offset < 0) {
//           offset = 200;
//           direction = 'вверх';
//         }
//       } else if (direction === 'вверх') {
//         $("#heading").offset({ top: offset });
//         offset--;
//         if (offset < 0) {
//           offset = 0;
//           direction = 'вправо';
//         }
//       }
//     };


// let intervalSpeed = 170;
// let count = 10;

// const countElem = document.getElementById('count');
// const intervalId = setInterval(moveHeading, intervalSpeed);
// const stopButton = $('#stop__btn').click(() => {clearInterval(intervalId)});    // Stop button for moving heading.
// const increaser = setInterval(moveHeading, intervalSpeed -= 20);



// const increaseTimerSpeed = $('#heading').click(() => {     // Increase moving speed.
//     clearInterval(intervalId);
//     countElem.innerHTML =  count--;
//     console.log(increaser);
//     if (count < 0) {
//       clearInterval(increaser);
//       document.getElementById('heading').innerHTML = "You win";
//     }
// });


const getRandomNumber = function(maxValue) { // Sets up the random place (treasure) at the map.
  return Math.floor(Math.random() * maxValue);
};

const getDistance = function (event, target) { // Calculates the value between the event and the target.
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

const getDistanceHint = function(distance) { //Function that show the distance.
  if (distance < 10) {
    $("#distance").css('color', '#ee0c00');
    return "Boiling hot!";
  } else if (distance < 20) {
    $("#distance").css('color', '#fc510b');
    return "Really hot";
  } else if (distance < 40) {
    $("#distance").css('color', '#f9a803');
    return "Hot";
  } else if (distance < 80) {
    $("#distance").css('color', '#f9f203');
    return "Warm";
  } else if (distance < 160) {
    $("#distance").css('color', '#03f9ea');
    return "Cold";
  } else if (distance < 320) {
    $("#distance").css('color', '#03aaf9');
    return "Really cold";
  } else if (distance < 360) {
    $("#distance").css('color', '#036ff9');
    return "Really really cold!"
  } else {
    $("#distance").css('color', '#150080');
    return "Freezing!";
  }
};


let width = 400;
let height = 400;
let clicks = 0;
let clicksLimit = 20;


const target = { // Object with random coordinates on map
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};

$('#map').click((event) => {
  clicks++;

  if (clicks >= clicksLimit) {
    alert("Game over!");
    clicks = clicksLimit;
  }

  let distance = getDistance(event, target);
  let distanceHint = getDistanceHint(distance);
  $('#distance').text(distanceHint);
  $('#clicks').text(clicks);

  if (distance < 8) {
    alert("Found the reasure in " + clicks + " clicks!");
  }
});


