export const NumberUtil = {
  //Formato de moeda
  currencyFormat(num: number) {
    if (num) {
      return 'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    return 'R$ 0,00';
  },
  // Formato numerico
  numberFormat(num: number) {
    if (num) {
      let number = '0';
      if (num % 1 !== 0) {
        number = num.toFixed(2);
      } else {
        number = num.toString();
      }
      return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    return ' 0';
  },
};
