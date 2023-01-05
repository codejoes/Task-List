// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  var textArray = [];
  var locationArray = [];



  var getText = localStorage.getItem('storedText');
  var getLocation = localStorage.getItem('storedLocation');
  
  console.log(getText);
  console.log(getLocation);

  if (getText || getLocation !== null) {

    var location = [];
    var text = [];
    location = JSON.parse(getLocation);
    text = JSON.parse(getText);

    for (let i = 0; i < location.length; i++) {
      //console.log(location[i]);
      var savedHour = document.getElementById(location[i]);
      console.log(savedHour);
      if (savedHour !== null) {
        savedHour.childNodes[3].value = text[i];
      }
    }
  }
  


  var hour9 = document.getElementById('hour-9');
  var hour10 = document.getElementById('hour-10');
  var hour11 = document.getElementById('hour-11');
  var hour12 = document.getElementById('hour-12');
  var hour13 = document.getElementById('hour-13');
  var hour14 = document.getElementById('hour-14');
  var hour15 = document.getElementById('hour-15');
  var hour16 = document.getElementById('hour-16');
  var hour17 = document.getElementById('hour-17');
  var hour18 = document.getElementById('hour-18');
  var hour19 = document.getElementById('hour-19');
  var hour20 = document.getElementById('hour-20');
  var hour21 = document.getElementById('hour-21');
 
  var nowShort = dayjs().format('hA');
  var nowOnlyHour = dayjs().format('HH');
 
  if (hour9.innerText == nowShort) {
    $('#hour-9').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 9) {
    $("#hour-9").addClass('future').removeClass('present', 'past');
  } else { $("#hour-9").addClass("past").removeClass('present', 'future'); }

  if (hour10.innerText == nowShort) {
    $('#hour-10').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 10) {
    $("#hour-10").addClass('future').removeClass('present', 'past');
  } else { $("#hour-10").addClass("past").removeClass('present', 'future'); }

  if (hour11.innerText == nowShort) {
    $('#hour-11').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 11) {
    $("#hour-11").addClass('future').removeClass('present', 'past');
  } else { $("#hour-11").addClass("past").removeClass('present', 'future'); }

  if (hour12.innerText == nowShort) {
    $('#hour-12').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 12) {
    $("#hour-12").addClass('future').removeClass('present', 'past');
  } else { $("#hour-12").addClass("past").removeClass('present', 'future'); }

  if (hour13.innerText == nowShort) {
    $('#hour-13').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 13) {
    $("#hour-13").addClass('future').removeClass('present', 'past');
  } else { $("#hour-13").addClass("past").removeClass('present', 'future'); }

  if (hour14.innerText == nowShort) {
    $('#hour-14').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 14) {
    $("#hour-14").addClass('future').removeClass('present', 'past');
  } else { $("#hour-14").addClass("past").removeClass('present', 'future'); }

  if (hour15.innerText == nowShort) {
    $('#hour-15').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 15) {
    $("#hour-15").addClass('future').removeClass('present', 'past');
  } else { $("#hour-15").addClass("past").removeClass('present', 'future'); }

  if (hour16.innerText == nowShort) {
    $('#hour-16').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 16) {
    $("#hour-16").addClass('future').removeClass('present', 'past');
  } else { $("#hour-16").addClass("past").removeClass('present', 'future'); }

  if (hour17.innerText == nowShort) {
    $('#hour-17').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 17) {
    $("#hour-17").addClass('future').removeClass('present', 'past');
  } else { $("#hour-17").addClass("past").removeClass('present', 'future'); }

  if (hour18.innerText == nowShort) {
    $('#hour-18').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 18) {
    $("#hour-18").addClass('future').removeClass('present', 'past');
  } else { $("#hour-18").addClass("past").removeClass('present', 'future'); }

  if (hour19.innerText == nowShort) {
    $('#hour-19').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 19) {
    $("#hour-19").addClass('future').removeClass('present', 'past');
  } else { $("#hour-19").addClass("past").removeClass('present', 'future'); }

  if (hour20.innerText == nowShort) {
    $('#hour-20').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 20) {
    $("#hour-20").addClass('future').removeClass('present', 'past');
  } else { $("#hour-20").addClass("past").removeClass('present', 'future'); }

  if (hour21.innerText == nowShort) {
    $('#hour-21').addClass('present').removeClass('future', 'past');
  } else if (nowOnlyHour < 21) {
    $("#hour-21").addClass('future').removeClass('present', 'past');
  } else { $("#hour-21").addClass("past").removeClass('present', 'future'); }

  var container = document.getElementById('container');
  // var textAreas = document.querySelector('.description');
  // var saveButton = document.querySelectorAll('.saveBtn');

  container.addEventListener('click', (event) => {
    var checkButton = event.target.nodeName === 'BUTTON';
    if (!checkButton) {
      return;
    }
    //console.log(event.target.nodeName);
    //console.log(event.target);
    //console.log(event.target.previousElementSibling.value);
    var thisStuff = event.target.previousElementSibling.value;
    var thisDiv = (event.target.parentNode.id).toString();

    textArray.push(thisStuff);
    locationArray.push(thisDiv);

    localStorage.setItem('storedText', JSON.stringify(textArray));
    
    localStorage.setItem('storedLocation', JSON.stringify(locationArray));
  });
 

  // Addedd code to display the current date in the header of the page.
  
  var now = dayjs().format('dddd, MMMM Do');
  $('#currentDay').text(now);
});
