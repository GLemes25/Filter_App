import { format } from 'date-fns';

export const DateTime = {
  // transforma data em meses
  toMonths(date: Date) {
    date = new Date(date);
    let months;
    const today = new Date();
    months = (today.getFullYear() - date.getFullYear()) * 12;
    months -= date.getMonth();
    months += today.getMonth();
    return months <= 0 ? 0 : months;
  },
  // transforma meses em data
  toDate(months: number) {
    const date = new Date();
    date.setMonth(date.getMonth() - months);
    date.setDate(1);
    return new Date(date.setHours(0));
  },

  // formata a data
  format(date: Date, pattern: string) {
    if (date) {
      return format(date, pattern);
    }
  },

  //Formato dia
  formatDateToString(date: undefined | Date | Date[]) {
    if (date) {
      Array.isArray(date) ? (date = new Date(date[0])) : (date = new Date(date));
      const date0h = new Date(date.setHours(0));
      return format(date0h, 'dd/MM/yyyy');
    } else return '';
  },
  formatDateToStringChart(date: undefined | Date | Date[]) {
    if (date) {
      Array.isArray(date) ? (date = new Date(date[0])) : (date = new Date(date));
      const date0h = new Date(date.setHours(0));
      return format(date0h, 'dd/MM/yy');
    } else return '';
  },

  //Data em Meses
  dateFromMonths(months: number) {
    const date = new Date();
    date.setMonth(date.getMonth() - months);
    date.setDate(1);
    return new Date(date.setHours(0));
  },
  // String para Data
  stringToDate(dateStr: string) {
    const date = dateStr.split('/').reverse().join('-');
    // console.log('Format Date ' + date);
    return new Date(date);
  },
  //Add days to date
  addDays(date: Date, days: number) {
    // const copy = new Date(Number(date));
    date = new Date(date);
    const date0 = new Date(date.setHours(0));
    const copy = date0.setDate(date0.getDate() + days);
    const copyDate = new Date(copy);
    return copyDate;
  },
  //Periodo
  timeCourse(start: Date, end: Date) {
    start = new Date(start);
    end = new Date(end);
    const startday = new Date(start.setHours(0));
    const endDay = new Date(end.setHours(0));
    const totaltime = endDay.getTime() - startday.getTime();
    const totalDays = totaltime / (1000 * 3600 * 24);
    return totalDays;
  },
};
