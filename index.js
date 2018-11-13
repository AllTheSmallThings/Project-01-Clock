function updateClock()
{
  //Gets the current date and stores in a variable "currentTime";
  var currentTime = new Date();

  //Stores hours, minutes and seconds in each corresponding variable;
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  //Formates the current time in a string to be displayed to HOUR:MINUTE:SECOND AM/PM
  //First we add a leading 0 to minutes and seconds values if its required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  //That way: 8min ---> "0" + currentMinute(8) = 08min

  //Checks if the current time corresponds to AM or PM
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  //That way: 9h < 12H ---> 9AM | 15 > 12H ---> 15PM

  //If required, subtracts 12 from the current hours to convert to a 12hour format.
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  //That way: 22h ---> 22 - 12 = 10h

  currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  //To show 12 hours instead of 00h:

  //Stores the alredy formatted components together on a single string in the format HOUR:MINUTE:SECOND AM/PM
  var timeNowString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = timeNowString;
}
