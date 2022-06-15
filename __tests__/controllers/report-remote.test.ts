// import { RemoteHandlingController } from '../../src/handling/handling-controller';
// import { ReportController } from '../../src/report/report-controller';
// // import { ReportController } from '../../src/report/report-controller';

// const supply = {
//   productId: '60965073d414450dc515be35',
//   productQuantity: 8,
//   cattleQuantity: 50,
//   feederCondition: 'clean',
// };
// const handling = {
//   _id: '609652e38db7dd7d84878d1b',
//   farmId: '60964d536e78462d9b21610e',
//   herdId: '60965044d414450dc515be34',
//   type: 'supply',
//   typeLabel: 'fornecimento',
//   observation: '',
//   handledAt: new Date('2021-05-08'),
//   supply: supply,
//   synced: true,
// };
// const herd = {
//   _id: '60965044d414450dc515be34',
//   name: 'Lote',
//   farmId: '60964d536e78462d9b21610e',
//   breed: 'nellore',
//   gender: 'female',
//   birth: new Date('2021-05-08'),
//   cattleQuantity: 50,
//   acquisitionPrice: 31450.25,
//   description: 'test',
//   averageWeight: 484,
//   lastWeight: 701,
//   createdAt: new Date('2021-05-08'),
// };
// const listDiaryConsumption = ReportController.listDiaryConsumption(
//   new Date('2020-05-01'),
//   new Date('2020-08-01'),
//   herd,
//   new Date('2020-08-01'),
// );
// const handlings = async () => {
//   return await Promise.reject([handling]);
// };

// test('tests with a mock impl', () => {
//   const ypy = jest
//     .spyOn(listDiaryConsumption, 'RemoteHandlingController.suppliesBetweenDates')
//     .mockReturnValue(handlings);

//   expect(ypy).toEqual(handlings);
//   //       handlings,
//   // ReportController
//   // describe('countries list', () => {
//   //   test('listDiaryConsumption', () => {

//   //     jest.fn(suppliesBetweenDates).mockReturnValue(handlings);

//   //     expect(suppliesBetweenDates('60965044d414450dc515be34', new Date('2020-05-01'), new Date('2020-08-01'))).toEqual(
//   //       handlings,
//   //     );
//   //   });
// });

// // describe('countries list', () => {
// //   test('returns list of countries', () => {

// //     const expectedList = [
// //       {
// //         label: '+244',
// //         value: 'Angola',
// //       },
// //       {
// //         label: '+43',
// //         value: 'Austria',
// //       },
// //     ];

// //     const spy = jest.spyOn(countyListHelper, 'countriesList');
// //     spy.mockReturnValue(handlings);

// //     expect(countyListHelper.getSortedCountryData('en')).toEqual(expectedList);  // Success!

// //     spy.mockRestore();
// //   });
// // });
// // // esModule.test.js
// // jest.mock('../../src/handling/handling-controller', () => ({
// //   __esModule: true, // this property makes it work
// //   suppliesBetweenDates: jest.fn(),
// // }));
// // suppliesBetweenDates;

// // test('listDiaryConsumption', () => {
// //   expect(listDiaryConsumption(300, 50)).toBe(10);
// // });

// // const priceAt = ReportController.priceAt;
// // test('priceAt', () => {
// //   expect(priceAt(1000, 10)).toBe(100);
// // });

// // const timeCourseString = ReportController.timeCourseString;
// // test('time Course String', () => {
// //   expect(timeCourseString('11/02/2002', '11/05/2002')).toBe(90);
// // });

// // const expectedAverageWeight = ReportController.expectedAverageWeight;
// // test('expected Average Weight', () => {
// //   expect(expectedAverageWeight(260, 270, new Date('2021-05-15'), new Date('2021-05-30'), new Date('2021-05-20'))).toBe(
// //     286.67,
// //   );
// // });

// // const GMD = ReportController.GMD;
// // test('Ganho de Massa Diario', () => {
// //   expect(GMD(260, 435, new Date('2021-05-15'), new Date('2022-01-03'))).toBe(0.75);
// // });
