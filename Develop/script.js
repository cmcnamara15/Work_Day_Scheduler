var topDate = dayjs().format('MMM D, YYYY');
$('#currentDay').text(topDate);

var currentTime = dayjs().format('hh:mm:ss');
$('#currentTime').text(currentTime);
console.log("Current Time" + currentTime);

$('body').css('margin-bottom', '50px');

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

function checkHour(){
  var timeB = $('.time-block');
  var timeNow = dayjs().hour();
 
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

// $('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('`$(textInput)`')

checkHour()
});




    
    // var scheduleTime = $(this).siblings('.hour').text().split[1];
    // console.log(scheduleTime)

  
  
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






