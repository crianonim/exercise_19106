/*
  My solution has assumptions not explicit in excercise specification:

  1. I assume for the dateToFormatTimeMillis to be a number and if not return 
  a string "Invalid Date". I assume that we want a useful string as opposed to just
  a one formated to '01/01/1970' as other data types are converted to number 0.
  Alternatively we could allow strings that correctly parse to numbers
  
  2. I assume that we want to use this function for more 'contemporary' dates, as it works
  exactly for years from 1000 to 9999, other will still work but not always with required
  'YYYY' format.
  
  3. It works correctly if no systemDateTimeMillis is provided. It fulfills the requirement of 
  not being equal as undefined isn't. If required we can return  values as per specification,
  ie. "Invalid Date" or throw an error. Alternatively we could allow format to have no arguments,
  returning "TODAY"

*/

export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  if (typeof dateToFormatTimeMillis !== 'number') return 'Invalid Date';

  const dateToFormat = new Date(dateToFormatTimeMillis);
  const systemDate = new Date(systemDateTimeMillis);


  return dateToFormat.toDateString() === systemDate.toDateString() ?
    'TODAY' :
    [dateToFormat.getDate(), dateToFormat.getMonth() + 1, dateToFormat.getFullYear()]
      .map(String)
      .map(numString => numString.padStart(2, '0'))
      .join("/")
};