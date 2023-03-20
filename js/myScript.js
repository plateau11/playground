var q20 = "\"A good conscience is a continual Christmas\" - Benjamin Franklin";
var q21 = "\"If you want to lift yourself up, lift up someone else\" - Booker T. Washington";
var q22 = "You’re braver than you believe, stronger than you seem, and smarter than you think.";
var q23 = "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.";



var element = document.querySelector(".quotes");

var dateObj = new Date();

var day = dateObj.getUTCDate();

var q = "Quote of the day : ";

if(day == 20)
  element.textContent = q + q20;

else if(day == 21)
  element.textContent = q + q21;

else if(day == 22)
  element.textContent = q + q22;

else
  element.textContent = q;

