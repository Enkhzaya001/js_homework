
// const displayEl = document.getElementById("display");

// let newDate = () =>{
// let now = new Date();
// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();
// let meridiem = "AM"

// if (hours >=12){
//     meridiem = "PM"
//     if (hours >12){
//         hours-=12;
//     }
// }
// if (hours === 0){
//     hours = 12;
// }
// document.getElementById("hours").textContent =String(hours).padStart(2,"0");
// document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
// document.getElementById("seconds").textContent =String(seconds).padStart(2,"0");
// document.getElementById("meridiem").textContent = meridiem;
// }

//   setInterval(newDate, 1000);
//   newDate();

function clock(){
let monthNames =["January","February","March","April", "May","June","July","August","September","October","November","December"];
let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let today = new Date();
document.getElementById("date").innerHTML = (dayNames[today.getDay()]+ " "+ today.getDate()+" "+ monthNames[today.getMonth()]+ " "+ today.getFullYear());

let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
let day = h<11 ? "AM": "PM";

h =h<10? "0"+h: h;
m = m<10? "0"+m: m;
s = s<10? "0"+s: s;
document.getElementById("hours").innerHTML = h;
document.getElementById("min").innerHTML = m;
document.getElementById("sec").innerHTML = s;
}

let inter = setInterval(clock, 400);