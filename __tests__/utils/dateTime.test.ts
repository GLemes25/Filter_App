//yyyy-mm-dd
import { DateTime } from '../../src/utils/date-time';

//comparação com data atual
const toMonths = DateTime.toMonths;
test('Date to Months', () => {
  expect(toMonths(new Date('2020-12-02'))).toStrictEqual(8);
});

//comparação com data atual
const toDate = DateTime.toDate;
test('Months to DATE', () => {
  expect(toDate(8)).toStrictEqual(new Date('2020-12-01T04:00:00.000Z'));
});

const format = DateTime.format;
test('format', () => {
  expect(format(new Date('2021-11-07T21:32:17.908Z'), 'dd/MM/yyyy HH:mm')).toStrictEqual('07/11/2021 17:32');
});

const formatDateToString = DateTime.formatDateToString;
test('format Date To String', () => {
  expect(formatDateToString(new Date('2021-11-07T21:02:57.908Z'))).toStrictEqual('07/11/2021');
});

const dateFromMonths = DateTime.dateFromMonths;
test('date From Months', () => {
  expect(dateFromMonths(9)).toStrictEqual(new Date('2020-11-01T04:00:00Z'));
});

const stringToDate = DateTime.stringToDate;
test('string To Date', () => {
  expect(stringToDate('17/04/2019')).toStrictEqual(new Date('2019-04-17T00:00:00Z'));
});

const addDays = DateTime.addDays;
test('add days', () => {
  expect(addDays(new Date('2020-01-28'), 1)).toStrictEqual(new Date('2020-01-29T04:00:00Z'));
});

const timeCourse = DateTime.timeCourse;
test('time Course', () => {
  expect(timeCourse(new Date('2021-05-15'), new Date('2022-01-03'))).toStrictEqual(233);
});
