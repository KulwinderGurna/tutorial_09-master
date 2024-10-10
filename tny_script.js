"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Kulwinder Kaur
   Date: 2024-10-08

*/

/* Display date & time */

document.getElementById("dateNow").innerHTML = `m/d/y/ <br /> h:m:s`;

/* Display the time left until New Years EVE */

document.getElementById("days").textContent= "dd";
document.getElementById("hrs").textContent= "hh";
document.getElementById("mins").textContent= "mm";
document.getElementById("secs").textContent= "ss";

/* store the current date and time */

var currentDay = new Date("May, 23 , 2018  14:35:05"); 
var dateStr = currentDay.toLocaleDateString();
var timeeStr = currentDay.toLocaleTimeString();



/* Display date & time */

document.getElementById("dateNow").innerHTML =
dateStr + "<br/>" + timeeStr;