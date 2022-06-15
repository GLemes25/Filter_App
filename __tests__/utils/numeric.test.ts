import { NumberUtil } from '../../src/utils/numeric-format';

const currencyFormat = NumberUtil.currencyFormat;
test('currency Format', () => {
  expect(currencyFormat(7.546)).toStrictEqual('R$ 7.55');
});

const numberFormat = NumberUtil.numberFormat;
test('Number Format', () => {
  expect(numberFormat(8.0)).toStrictEqual('8');
});
