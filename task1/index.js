function getAlternateMondays(fromDate, toDate) {
  //initialize resultant array
  let alternateMondays = [];
  
  //initialize date objects
  let startDate = new Date(fromDate);
  let endDate = new Date(toDate);
  
  // Iterate throught start date by adding 1 each day to find first Monday
  while (startDate.getDay() !== 1) {
    startDate.setDate(startDate.getDate() + 1);
  }
  
  // Loop through alternate Mondays until last date 
  while (startDate <= endDate) {
    alternateMondays.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 14); // add 14 to skip to alternate Monday
  }
  
  return alternateMondays;
}

console.log(getAlternateMondays('2023-08-01', '2023-08-21'))

export default getAlternateMondays;