// this uses day.js to retrieve the current date 
var topDate = dayjs().format('MMM D, YYYY');
$('#currentDay').text(topDate);

// this grabs the current time in the day based on my location 
var currentTime = dayjs().format('hh:mm:ss');
$('#currentTime').text(currentTime);
console.log("Current Time" + currentTime);

// gave a little space on the bottom of the page 
$('body').css('margin-bottom', '50px');

// created a variable by grabbing the elements in html with the class of time-block 
var timeBlock = $('.time-block');


$(document).ready(function () {
  $('.saveBtn').on("click", function(){
    // window.alert('clicked')
    var textInput = $(this).siblings('textarea').val();
    console.log(textInput)
    var time = $(this).parent().attr('id');
    console.log(time);
    localStorage.setItem(time, textInput);
// var time = $(this).siblings(".hour").text();
  })


//the function to render color on the time slots based on the reference of the current time
// this function also stores and retrieves the text input data from the user  
function checkHour(){
  var timeB = $('.time-block');
  var timeNow = dayjs().hour();
 
  // i leave console.logs in the code as a point of reference and to make sure things are working correctly 
  console.log(timeNow + " time now")
  for(var i = 0; i < timeB.length; i ++){
    console.log(timeB[i]);
    var timeDiv = timeB[i];
    var scheduleTime = parseInt($(timeB[i]).attr('id').split('-')[1]);
    var time = timeB[i].getAttribute('id')
    console.log(time)
    var textInput = localStorage.getItem(time)
    console.log(textInput)
    timeDiv.children[1].val = textInput
    // console.log(scheduleTime)
    // console.log(timeNow)
    

  // the conditional statement that deciphers what color each time block is 
  if (scheduleTime < timeNow) {
    $(timeB[i]).removeClass("future");
    $(timeB[i]).removeClass("present");
    $(timeB[i]).addClass("past");
  }
  else if (scheduleTime === timeNow) {
    $(timeB[i]).removeClass("past");
    $(timeB[i]).removeClass("future");
    $(timeB[i]).addClass("present");
}
  else {
    $(timeB[i]).removeClass("present");
    $(timeB[i]).removeClass("past");
    $(timeB[i]).addClass("future");

}
  
}}

// the code to retrieve the data from local storage and append it to the page 
$('#hour-9 .description').val(localStorage.getItem('hour-9'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-13 .description').val(localStorage.getItem('hour-13'))
$('#hour-14 .description').val(localStorage.getItem('hour-14'))
$('#hour-15 .description').val(localStorage.getItem('hour-15'))
$('#hour-16 .description').val(localStorage.getItem('hour-16'))
$('#hour-17 .description').val(localStorage.getItem('hour-17'))


// var descriptions = $('.description');
// for (var i = 0; i < descriptions.length; i++) {
//   descriptions[i].val(localsto)
// }

checkHour()
});




// !!--------- Im leaving the text from the starter code to use as reference upon

  
  
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.  



// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.






