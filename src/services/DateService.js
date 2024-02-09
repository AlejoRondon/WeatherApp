export default function getCurrentDate() {
  // Create a new Date object
  var currentDate = new Date();

  // Array of month names
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Array of day names
  var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get the day, month, and year
  var day = currentDate.getDate();
  var monthIndex = currentDate.getMonth();
  var year = currentDate.getFullYear();

  // Get the day name
  var dayNameIndex = currentDate.getDay();
  var dayName = dayNames[dayNameIndex];

  // Format the date
  var formattedDate = dayName + ', ' + day + ' ' + monthNames[monthIndex] + ', ' + year;

  return formattedDate;
}
