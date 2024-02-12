export default function getCurrentDate() {
  // Create a new Date object
  var currentDate = Date.now();
  return unixTimeConverter(currentDate);
}

export function unixTimeConverter(unix_timestamp) {
  var date_to_convert = new Date(unix_timestamp);

  // Array of month names
  var month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Array of day names
  var day_names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  var day = date_to_convert.getDate();
  var month_index = date_to_convert.getMonth();
  var year = date_to_convert.getFullYear();

  var day_name_index = date_to_convert.getDay();
  var day_name = day_names[day_name_index];

  var month_name = month_names[month_index];

  var hour = date_to_convert.getHours();
  var min = date_to_convert.getMinutes();
  var sec = date_to_convert.getSeconds();
  return {
    day,
    month: month_index + 1,
    year,
    long_date_str: day_name + ', ' + day + ' ' + month_name + ' ' + year,
    short_date_str: day_name + ', ' + day + ' ' + month_name,
    time_str: hour + ':' + min + ':' + sec,
  };
}
