import { format } from '../src/dateFormatter';

it('when the system date and the date to format are the same day formats as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
});


it('formats result in a desired form if system date and date to format are different', () => {
  const systemDateTime = new Date(2018, 11, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date("2006-12-24").getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe('24/12/2006');
});

it('formats result with values padded with 0', () => {
  const systemDateTime = new Date(2018, 11, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date("2006-05-04").getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe('04/05/2006');
});

it('returns "Invalid Date" if not supplied with correct date to format argument', () => {
  const correctDate = new Date(2018, 11, 15, 10, 5).getTime();
  const expected = 'Invalid Date'
  expect(format(correctDate, 1 / 0)).toBe("15/12/2018");
  expect(format(null, correctDate)).toBe(expected);
  expect(format("12")).toBe(expected);
  expect(format()).toBe(expected);
});